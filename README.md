# FitForge app

FitForge can run as an installable offline PWA or be wrapped in an Android app with Capacitor.

## Training features

The workout library includes strength, cardio, HIIT, calisthenics, mobility, and recovery routines. Save routines to Favorites for quick access, create your own routines, and review weekly activity and personal best logged weights from the RPG dashboard. Favorites, workout progress, and history are stored on the device and included in JSON backups.

## Install as a PWA

Deploy the files in this folder to a static web host with HTTPS. Open the site in a supported browser and use **Install FitForge App** in Settings when the browser offers installation. For local development, serve the folder on `localhost`; opening `index.html` directly with `file://` does not enable service workers or PWA installation.

The service worker caches the app shell and same-origin resources for offline launches. Bump `CACHE_NAME` in `sw.js` when changing cached resources to invalidate the old shell cache.

## Build an Android debug APK

Install Node.js 20 or newer, Android Studio with the Android SDK, and a supported JDK. In PowerShell, from this folder:

```powershell
npm install
npm run android:add
npm run android:debug
```

`android:add` creates the native Android project once. For later web changes, run `npm run android:sync` before building. The debug APK is created at:

```text
android\app\build\outputs\apk\debug\app-debug.apk
```

Open the native project in Android Studio with `npm run android:open`. A release APK needs a signing key and release signing configuration before distribution.
