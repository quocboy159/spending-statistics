import {
    collection,
    getFirestore,
    query,
    where,
    getDocs,
    setDoc,
    doc
} from "firebase/firestore"
import getFirebase from "../infrastructures/filebase";

const app = getFirebase()
const db = getFirestore(app)
const usersRef = collection(db, "users")

const addUser = async (user) => {
    await setDoc(doc(usersRef, user.userId), user)
}

const getUserById = async (id) => {
    const q = query(usersRef, where("userId", "==", id))
    const querySnapshot = await getDocs(q);
    if(querySnapshot.docs.length){
        return querySnapshot.docs[0];
    }

    return null
}

export {
    addUser,
    getUserById
}