import firebaseApp from "network/firebase";
import {
  getAuth,
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from 'firebase/auth';

const auth = getAuth(firebaseApp);

export async function authUser(onAuth: (user: User | null) => void): Promise<void> {
  await auth.onAuthStateChanged(onAuth);
}

export async function loginUser(email: string, password: string): Promise<UserCredential> {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);

  if (!userCredential) {
    console.error(userCredential);
  }

  return userCredential;
}

export async function logoutUser(): Promise<void> {
  await firebaseSignOut(auth);
}
