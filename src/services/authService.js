import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification

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

const loginWithEmailAndPassword = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        const { user } = response
        if (!user) {
            throw new Error('Your account is not found')
        }
        if (!user.emailVerified) {
            throw new Error('Your account is not activate yet')
        }
    } catch (e) {
        alert(e)
        throw e
    }
}

const registerWithEmailAndPassword = async (email, fullName, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        const { user } = response
        await sendEmailVerification(user, {
            url: 'http://localhost:3000/'
        })
        const userData = await getUserById(user.uid)
        if (!userData) {
            await addUser({
                userId: user.uid,
                name: fullName,
                authProvider: AuthProviders.LOCAL,
                email: user.email
            })
        }

    } catch (ex) {
        throw ex
    }
}

const isAuthenticated = () => !!auth.currentUser

export {
    signinWithGoogle,
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    isAuthenticated
}