import { Stack } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from './components/AuthProvider';

export default function Layout() {
  const { user, loading } = useContext(AuthContext);

  return (
    <Stack screenOptions={{ headerShown: true }}>
      {/* Routes publiques */}
      <Stack.Screen name="login" options={{ title: 'Connexion' }} />
      <Stack.Screen name="register" options={{ title: 'Inscription' }} />

      {/* Routes protégées */}
      <Stack.Screen
        name="index"
        options={{
          title: 'Accueil',
          // Empêche de retourner à la page de login une fois connecté
          headerBackVisible: false
        }}
      />
    </Stack>
  );
}
