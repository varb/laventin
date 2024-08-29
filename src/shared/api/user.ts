import firebaseApp from "shared/api/firebase";
import {
  getAuth,
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from "firebase/auth";

const auth = getAuth(firebaseApp);

export async function authUser(): Promise<User | null> {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      resolve(user);
    });
  });
}

export async function loginUser(
  email: string,
  password: string
): Promise<UserCredential> {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  if (!userCredential) {
    console.error(userCredential);
  }

  return userCredential;
}

export async function logoutUser(): Promise<void> {
  await firebaseSignOut(auth);
}
