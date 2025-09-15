use tauri::{
    menu::{MenuBuilder, MenuItemBuilder},
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    Manager, WebviewWindowBuilder,
};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        // .plugin(tauri_plugin_fs::init())
        // .plugin(tauri_plugin_autostart::init(
        //     MacosLauncher::LaunchAgent,
        //     Some(vec!["--flag1", "--flag2"]),
        // ))
        // .plugin(tauri_plugin_dialog::init())
        // .plugin(tauri_plugin_http::init())
        // .plugin(tauri_plugin_os::init())
        // .plugin(tauri_plugin_window_state::Builder::default().build())
        .plugin(tauri_plugin_clipboard_manager::init())
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_shell::init())
        .setup(|app| {
            #[cfg(desktop)]
            app.handle()
                .plugin(tauri_plugin_global_shortcut::Builder::new().build())
                .unwrap();

            let toggle = MenuItemBuilder::with_id("toggle", "Toggle").build(app)?;
            let menu = MenuBuilder::new(app).items(&[&toggle]).build()?;
            let _ = TrayIconBuilder::new()
                .on_tray_icon_event(|tray, event| {
                    if let TrayIconEvent::Click {
                        button: MouseButton::Left,
                        ..
                    } = event
                    {
                        // let webview_window = tauri::WebviewWindowBuilder::new(
                        //     &app,
                        //     "label",
                        //     tauri::WebviewUrl::App("index.html".into()),
                        // )
                        // .build()?;

                        // let window = WebviewWindowBuilder::new(
                        //     app,
                        //     "tray",
                        //     tauri::WebviewUrl::App("index.html".into()),
                        // )
                        // .inner_size(450 as f64, 600 as f64)
                        // .decorations(false)
                        // .focused(true)
                        // .always_on_top(true)
                        // .build();

                        let app = tray.app_handle();

                        // if let Some(webview_window) = app.get_webview_window("main") {
                        //     let _ = webview_window.show();
                        //     let _ = webview_window.set_focus();
                        // }
                    }
                })
                .build(app)?;

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
