package server

import (
	"crypto/sha256"
	"crypto/subtle"
	"encoding/json"
	"log"
	"net/http"

	"fmt"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"

	"nhooyr.io/websocket"

	"service/internal/domain"
)

func (s *Server) RegisterRoutes() http.Handler {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{"http://*"},
		AllowCredentials: false,
	}))

	r.Get("/", s.HelloWorldHandler)
	r.Get("/health", s.healthHandler)
	r.Get("/customer", s.customerHandler)
	r.Get("/websocket", s.websocketHandler)

	r.Post("/api/signup", s.signupHandler)
	r.Post("/api/signin", s.signinHandler)

	return r
}

func (s *Server) signupHandler(w http.ResponseWriter, r *http.Request) {
  // Parse and decode the request body into a new `Credentials` instance
	creds := &domain.Credentials{}
	err := json.NewDecoder(r.Body).Decode(creds)
	if err != nil {
		// If there is something wrong with the request body, return a 400 status
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	if err = s.db.Signup(creds); err != nil {
  	// If there is any issue with inserting into the database, return a 500 error
  	w.WriteHeader(http.StatusInternalServerError)
  	return
	}

	// We reach this point if the credentials we correctly stored in the database, and the default status of 200 is sent back
}

func (s *Server) signinHandler(w http.ResponseWriter, r *http.Request) {
 	// Parse and decode the request body into a new `Credentials` instance
	creds := &domain.Credentials{}
	err := json.NewDecoder(r.Body).Decode(creds)
	if err != nil {
		// If there is something wrong with the request body, return a 400 status
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	if err = s.db.Signin(creds, r); err != nil {
		// If there is any issue with inserting into the database, return a 500 error
		w.WriteHeader(http.StatusInternalServerError)
		return
	}



  // If we reach this point, that means the users password was correct, and that they are authorized
// The default 200 status is sent
}

func basicAuth(next http.HandlerFunc) http.HandlerFunc {
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    // Extract the username and password from the request
  	// Authorization header. If no Authentication header is present
  	// or the header value is invalid, then the 'ok' return value
  	// will be false.
  	username, password, ok := r.BasicAuth()
  	if ok {
      // Calculate SHA-256 hashes for the provided and expected
      // usernames and passwords.
  		usernameHash := sha256.Sum256([]byte(username))
  		passwordHash := sha256.Sum256([]byte(password))
  		expectedUsernameHash := sha256.Sum256([]byte("your expected username"))
  		expectedPasswordHash := sha256.Sum256([]byte("your expected password"))

        // Use the subtle.ConstantTimeCompare() function to check if
        // the provided username and password hashes equal the
        // expected username and password hashes. ConstantTimeCompare
        // will return 1 if the values are equal, or 0 otherwise.
        // Importantly, we should to do the work to evaluate both the
        // username and password before checking the return values to
        // avoid leaking information.
  		usernameMatch := (subtle.ConstantTimeCompare(usernameHash[:], expectedUsernameHash[:]) == 1)
  		passwordMatch := (subtle.ConstantTimeCompare(passwordHash[:], expectedPasswordHash[:]) == 1)

        // If the username and password are correct, then call
        // the next handler in the chain. Make sure to return
        // afterwards, so that none of the code below is run.
  		if usernameMatch && passwordMatch {
next.ServeHTTP(w, r)

 			return
 	  }
    }

   	// If the Authentication header is not present, is invalid, or the
    // username or password is wrong, then set a WWW-Authenticate
    // header to inform the client that we expect them to use basic
    // authentication and send a 401 Unauthorized response.
  	w.Header().Set("WWW-Authenticate", `Basic realm="restricted", charset="UTF-8"`)
  	http.Error(w, "Unauthorized", http.StatusUnauthorized)
  })
}

func (s *Server) HelloWorldHandler(w http.ResponseWriter, r *http.Request) {
	resp := make(map[string]string)
	resp["message"] = "Hello World"

	jsonResp, err := json.Marshal(resp)
	if err != nil {
		log.Fatalf("error handling JSON marshal. Err: %v", err)
	}

	_, _ = w.Write(jsonResp)
}

func (s *Server) healthHandler(w http.ResponseWriter, r *http.Request) {
	jsonResp, _ := json.Marshal(s.db.Health())
	_, _ = w.Write(jsonResp)
}

func (s *Server) customerHandler(w http.ResponseWriter, r *http.Request) {
	jsonResp, _ := json.Marshal(s.db.Customer())
	_, _ = w.Write(jsonResp)
}

func (s *Server) websocketHandler(w http.ResponseWriter, r *http.Request) {
	socket, err := websocket.Accept(w, r, nil)

	if err != nil {
		log.Printf("could not open websocket: %v", err)
		_, _ = w.Write([]byte("could not open websocket"))
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	defer socket.Close(websocket.StatusGoingAway, "server closing websocket")

	ctx := r.Context()
	socketCtx := socket.CloseRead(ctx)

	for {
		payload := fmt.Sprintf("server timestamp: %d", time.Now().UnixNano())
		err := socket.Write(socketCtx, websocket.MessageText, []byte(payload))
		if err != nil {
			break
		}
		time.Sleep(time.Second * 2)
	}
}
