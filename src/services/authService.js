import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword
} from "firebase/auth";
import getFirebase from "../infrastructures/filebase";
import { addUser, getUserById } from "./usersService";
import { AuthProviders } from "../commons/enums";

const app = getFirebase();
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    'login_hint': 'user@gmail.com'
})
const auth = getAuth(app)

const signinWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, provider)
        const { user } = response
        const userData = await getUserById(user.uid)
        if (!userData) {
            await addUser({
                userId: user.uid,
                name: user.displayName,
                authProvider: AuthProviders.GOOGLE,
                email: user.email
            })
        }
    } catch (e) {
        throw e
    }
}

const signinWithEmailAndPassword = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        const { user } = response
        const userData = await getUserById(user.uid)
        if (!userData) {
            await addUser({
                userId: user.uid,
                name: user.displayName,
                authProvider: AuthProviders.LOCAL,
                email: user.email
            })
        }
    } catch (e) {
        throw e
    }
}

export {
    signinWithGoogle,
    signinWithEmailAndPassword
}