// Dans App.jsx
import { useEffect } from 'react';
import { Slot } from 'expo-router';
import { AuthProvider } from './components/AuthProvider';

export default function App() {
  useEffect(() => {
    console.log('App component mounted');
  }, []);

  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
