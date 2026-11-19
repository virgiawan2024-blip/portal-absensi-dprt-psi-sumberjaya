/*
 * KONFIGURASI FIREBASE - DPRT PSI SUMBERJAYA
 * Isi dengan konfigurasi Web App dari Firebase Console > Project settings > Your apps.
 * Firebase Web config bukan password/service-account key. Jangan pernah menaruh
 * service account private key atau token Admin SDK di file frontend.
 */
window.FIREBASE_CONFIG = {
  apiKey: "ISI_API_KEY_DARI_FIREBASE",
  authDomain: "ISI_PROJECT_ID.firebaseapp.com",
  projectId: "ISI_PROJECT_ID",
  storageBucket: "ISI_STORAGE_BUCKET_DARI_FIREBASE",
  messagingSenderId: "ISI_MESSAGING_SENDER_ID",
  appId: "ISI_APP_ID"
};

// Gunakan email admin yang memang sudah didaftarkan pada Firebase Authentication.
window.ADMIN_EMAIL = "ISI_EMAIL_ADMIN";
