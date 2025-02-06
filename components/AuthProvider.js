import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config';
import { useRouter, useSegments } from 'expo-router';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const segments = useSegments();
  const router = useRouter();
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setLoading(false);

      const isAuthRoute = ['/login', '/register'].includes(pathname);

      if (authUser && isAuthRoute) {
        router.push('/');
      } else if (!authUser && !isAuthRoute) {
        router.push('/login');
      }
    });
    return unsubscribe;
  }, [router, segments]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
