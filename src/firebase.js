import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcE367GxE1KQ5K-wmPTfGjA2LPacEejWE",
  authDomain: "hearit-audio.firebaseapp.com",
  projectId: "hearit-audio",
  storageBucket: "hearit-audio.appspot.com",
  messagingSenderId: "698175013534",
  appId: "1:698175013534:web:ba0af9e7b96b0d3caa718f",
  measurementId: "G-TM7J36V8C3"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);