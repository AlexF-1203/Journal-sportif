import { Slot } from 'expo-router';
import { AuthProvider } from './app/components/AuthProvider.js';

export default function App() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
