import {initializeApp} from "firebase/app"
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD0W9wUD6WU10sXkAmiFe8ONqTamRRsqfM",
    authDomain: "green-shop-2bde6.firebaseapp.com",
    projectId: "green-shop-2bde6",
    storageBucket: "green-shop-2bde6.firebasestorage.app",
    messagingSenderId: "297477321145",
    appId: "1:297477321145:web:9e500c4a982f84bfdec668",
    measurementId: "G-1XSN5T0PN7",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const provider = new GoogleAuthProvider()

const signWithGoogle = () => {
    return signInWithPopup(auth, provider)
}

export {signWithGoogle}
