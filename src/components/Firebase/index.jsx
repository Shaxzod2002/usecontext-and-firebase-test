import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDPkpjEj3rRUOY__65wbZz8WefWO5jtCDU",
  authDomain: "usecontex-test.firebaseapp.com",
  projectId: "usecontex-test",
  storageBucket: "usecontex-test.appspot.com",
  messagingSenderId: "172089333438",
  appId: "1:172089333438:web:ab6a280c6d3ee7bdbdf0ef",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);