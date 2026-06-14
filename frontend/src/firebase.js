import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2eLA-XdnGISnEL5Hfm22ovS-BtsSua-8",
  authDomain: "breastcancer-mhealth.firebaseapp.com",
  projectId: "breastcancer-mhealth",
  storageBucket: "breastcancer-mhealth.firebasestorage.app",
  messagingSenderId: "180529676861",
  appId: "1:180529676861:web:a9b9098931f39753c42054"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);