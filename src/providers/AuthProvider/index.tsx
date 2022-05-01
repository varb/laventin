import { createContext, useContext, useEffect, useState } from "react"
import { getAuth, User } from 'firebase/auth';
import firebaseApp from "network";

interface AuthProviderProps {
  children: React.ReactElement;
}

type UserType = User | null;
interface UserContext {
  user: UserType,
  setUser: (user: UserType) => void,
}

export const AuthContext = createContext<UserContext>({
  user: null,
  setUser: () => {}
});
export const AuthConsumer = AuthContext.Consumer;
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<UserType>(null);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  const setUser = (user: UserType) => {
    if (!user) return;
    setCurrentUser(user);
  }

  return (
    <AuthContext.Provider value={{
      user: currentUser,
      setUser,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
