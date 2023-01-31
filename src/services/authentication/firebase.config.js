import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp2n5uMmJ2VWl1j-SFmqB2Nq5uaJTmMXs",
  authDomain: "mealstogo-f9bd7.firebaseapp.com",
  projectId: "mealstogo-f9bd7",
  storageBucket: "mealstogo-f9bd7.appspot.com",
  messagingSenderId: "432939753591",
  appId: "1:432939753591:web:74e2f5ef26fbf8e3472672",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);