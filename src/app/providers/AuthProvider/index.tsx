import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { User } from "firebase/auth";
import { authUser, loginUser, logoutUser } from "network/user";

interface AuthProviderProps {
  children: React.ReactElement;
}

type UserType = User | null;
interface UserContext {
  user: UserType;
  signOut: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<UserContext>({
  user: null,
  signIn: async () => {},
  signOut: async () => {},
});

export const AuthConsumer = AuthContext.Consumer;
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<UserType>(null);

  useLayoutEffect(() => {
    authUser(setCurrentUser);
    console.log("AuthProvider setted");
  }, []);

  const signIn = async (email: string, password: string) => {
    const userCredentials = await loginUser(email, password);
    console.log("sign in");

    setCurrentUser(userCredentials.user);
  };

  const signOut = async () => {
    await logoutUser();
    setCurrentUser(null);
  };

  console.log("AuthProvider", currentUser);

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
