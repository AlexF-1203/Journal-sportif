import { Stack } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from './components/AuthProvider';

export default function Layout() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Home"
        options={{
          title: 'Accueil',
          headerBackVisible: false
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          title: 'Connexion',
          headerBackVisible: false
        }}
      />
      <Stack.Screen
        name="Register"
        options={{ title: 'Inscription' }}
      />
    </Stack>
  );
}
