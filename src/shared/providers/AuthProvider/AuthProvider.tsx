import { createContext, useContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { authUser, loginUser, logoutUser } from "shared/api/user";
import showPageContent from "shared/helpers/showPageContent";

interface AuthProviderProps {
  children: React.ReactElement;
}

type UserType = User | null;
interface UserContext {
  user: UserType;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<UserContext>({
  user: null,
  signIn: async () => {},
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<UserType>(null);
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      const user = await authUser();
      setCurrentUser(user);
      setIsAuthInitialized(true);
      showPageContent();
    };

    initializeAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    const userCredentials = await loginUser(email, password);

    setCurrentUser(userCredentials.user);
  };

  const signOut = async () => {
    await logoutUser();
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        signIn,
        signOut,
      }}
    >
      {isAuthInitialized && children}
    </AuthContext.Provider>
  );
}
