import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCphno8HlNFnBhRr3htcfBc2msD9BgmQn0",
    authDomain: "prueba-ldp.firebaseapp.com",
    projectId: "prueba-ldp",
    storageBucket: "prueba-ldp.firebasestorage.app",
    messagingSenderId: "1002487609429",
    appId: "1:1002487609429:web:988d78cc4f17d08776fcdc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }