import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config';
import { useRouter, useSegments } from 'expo-router';

export const AuthContext = createContext({
  user: null,
  loading: true
});

export function AuthProvider({ children }) {
  const router = useRouter();
  const segments = useSegments();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setLoading(false);

      const inAuthGroup = segments[0] === '(auth)';

      try {
        if (authUser && inAuthGroup) {
          router.replace('/(app)/');  // Redirection vers la page d'accueil protégée
        } else if (!authUser && !inAuthGroup) {
          router.replace('/(auth)/login');  // Redirection vers la page de connexion
        }
      } catch (error) {
        console.error('Erreur de navigation:', error);
      }
    });

    return unsubscribe;
  }, [router, segments]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
