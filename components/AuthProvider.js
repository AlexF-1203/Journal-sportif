import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { useRouter } from 'expo-router';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setLoading(false);

      const currentRoute = window.location.pathname;
      const isAuthRoute = ['/login', '/register'].includes(currentRoute);

      if (authUser && isAuthRoute) {
        router.push('/');
      } else if (!authUser && !isAuthRoute) {
        router.push('/login');
      }
    });
    return unsubscribe;
  }, [router]); 

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
