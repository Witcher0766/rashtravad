import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyACFwy9IeijWYdXtX23af85_DScZlRfyWg",
  authDomain: "rashtravad-5f6f5.firebaseapp.com",
  projectId: "rashtravad-5f6f5",
  storageBucket: "rashtravad-5f6f5.firebasestorage.app",
  messagingSenderId: "889200413407",
  appId: "1:889200413407:web:e9347d0ee501dcaa30776a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app;