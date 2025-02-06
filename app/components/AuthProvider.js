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

      // Modification clé : redirections conditionnelles et moins agressives
      if (authUser) {
        // Si un utilisateur est connecté, navigue vers la page d'accueil sans forcer
        router.push('/');
      } else {
        // Si aucun utilisateur, navigue vers login sans forcer
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
