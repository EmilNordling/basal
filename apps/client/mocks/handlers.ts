import { delay, http, HttpResponse } from "msw";
import { type FilesModel } from "internal/api/models/files_model";
import { type UserModel } from "internal/api/models/user_model";
import { type FileDetailsModel } from "internal/api/models/file_details_model";
import { LogBooksModel } from "internal/api/models/logbook_model";

const LATENCY = 100;

type FileDBModel = {
  id: string;
  name: string;
  updates: number;
};

type FileDetailsDBModel = {
  id: string;
  fileId: string;
  age: number | null;
};

type EventListDBModel = {
  id: string;
  fileId: string;
  event: string;
};

type EventDetailsDBModel = {
  id: string;
  eventId: string;
};

const db = {
  fileListTable: [
    { id: (0).toString(), name: "Lasse Åberg", updates: 0 },
    { id: (1).toString(), name: "Ernst Kirschsteiger", updates: 0 },
    { id: (2).toString(), name: "Christer Fuglesang", updates: 0 },
    { id: (3).toString(), name: "GW Persson", updates: 0 },
    { id: (4).toString(), name: "Bert Karlsson", updates: 0 },
    { id: (5).toString(), name: "Gunilla Persson", updates: 0 },
    { id: (6).toString(), name: "Robert Broberg", updates: 0 },
    { id: (7).toString(), name: "Carolina Gynning", updates: 0 },
    { id: (8).toString(), name: "Jonas Gardell", updates: 0 },
    { id: (9).toString(), name: "Alexander Bard", updates: 0 },
    { id: (10).toString(), name: "Björn Borg", updates: 0 },
    { id: (11).toString(), name: "Greta Thunberg", updates: 0 },
    { id: (12).toString(), name: "Ingmar Bergman", updates: 0 },
    { id: (13).toString(), name: "Astrid Lindgren", updates: 0 },
    { id: (14).toString(), name: "Alfred Nobel", updates: 0 },
    { id: (15).toString(), name: "Zlatan Ibrahimović", updates: 0 },
    { id: (16).toString(), name: "ABBA", updates: 0 },
    { id: (17).toString(), name: "Stieg Larsson", updates: 0 },
    { id: (18).toString(), name: "Henning Mankell", updates: 0 },
    { id: (19).toString(), name: "Selma Lagerlöf", updates: 0 },
  ],
  fileDetailsTable: [{ id: (0).toString(), fileId: (0).toString(), age: 70 }],
  eventListTable: [
    { id: (0).toString(), fileId: (0).toString(), event: "Monster Drink" },
    {
      id: (1).toString(),
      fileId: (0).toString(),
      event: "Leauge of Legends RP",
    },
  ],
  eventDetailsTable: [{ id: (0).toString(), eventId: (0).toString() }],
} satisfies {
  fileListTable: FileDBModel[];
  fileDetailsTable: FileDetailsDBModel[];
  eventListTable: EventListDBModel[];
  eventDetailsTable: EventDetailsDBModel[];
};

export const handlers = [
  http.post("/api/login", async () => {
    await delay(LATENCY);

    return HttpResponse.json(null, {
      headers: {
        "Set-Cookie": "authToken=abc-123",
      },
    });
  }),
  http.post("/api/logout", async () => {
    await delay(LATENCY);

    clearCookies();

    return HttpResponse.json(null);
  }),
  http.get("api/user", async ({ cookies }) => {
    await delay(LATENCY);

    if (!cookies.authToken) {
      return new HttpResponse(null, { status: 401 });
    }

    // ...and respond to them using this JSON response.
    return HttpResponse.json<UserModel>({
      username: "John",
      email: "Maverick",
      token: "token",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "text",
    });
  }),
  http.get("api/file/:id", async ({ cookies, params }) => {
    await delay(LATENCY);

    if (!cookies.authToken) {
      return new HttpResponse(null, { status: 403 });
    }

    const file = db.fileListTable.find((file) => file.id === params.id);
    if (file == null) {
      return new HttpResponse(null, { status: 404 });
    }

    const details = db.fileDetailsTable.find(
      (file) => file.fileId === params.id
    );
    if (details == null) {
      return new HttpResponse(null, { status: 404 });
    }

    const parsed = {
      id: file.id,
      name: file.name,
      update: file.updates,
      age: details.age,
    };

    return HttpResponse.json<FileDetailsModel>(parsed);
  }),
  http.get("api/files/list", async ({ cookies }) => {
    await delay(LATENCY);

    if (!cookies.authToken) {
      return new HttpResponse(null, { status: 403 });
    }

    const parsed = db.fileListTable.map((x) => ({
      id: x.id,
      name: x.name,
    }));

    return HttpResponse.json<FilesModel>(parsed);
  }),
  http.get("api/file/:fileId/logbook", async ({ cookies, params }) => {
    await delay(LATENCY);

    if (!cookies.authToken) {
      return new HttpResponse(null, { status: 403 });
    }

    const list = db.eventListTable.filter(
      (file) => file.fileId === params.fileId
    );
    const parsed = list.map((x) => ({
      id: x.id,
      event: x.event,
    }));

    return HttpResponse.json<LogBooksModel>(parsed);
  }),
];

function clearCookies() {
  document.cookie.split(";").forEach((cookie) => {
    document.cookie = cookie
      .replace(/^ +/, "")
      .replace(/=.*/, `=;expires=${new Date(0).toUTCString()}`);
  });
}
