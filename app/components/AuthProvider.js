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
      setLoading(false); // Définir loading à false APRÈS le traitement

      if (!loading) { // Attendre que le chargement soit terminé
        const route = window.location.pathname;
        if (authUser && !['/login', '/register'].includes(route)) {
          router.push('/');
        } else if (!authUser && !['/login', '/register'].includes(route)) {
          router.push('/login');
        }
      }
    });
    return () => unsubscribe();
  }, [loading]); 

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
