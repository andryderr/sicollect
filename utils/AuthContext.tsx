import React, { createContext, useState } from 'react';
import { login } from './Api';

interface User {
  user_id: number;
  name: string;
  email:string;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<User>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  login: async () => {
    throw new Error('login function not implemented');
  },
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async (email: string, password: string) => {
    try {
      const userData = await login(email, password);
      setUser(userData);
      return userData;
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login: handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};