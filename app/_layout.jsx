import { Stack } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from './components/AuthProvider';

export const unstable_settings = {
  initialRouteName: 'index', // Forcer la route initiale
};

export default function Layout() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <ActivityIndicator />;

  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: !!user, // Masquer l'en-tête si non connecté
          headerBackVisible: false
        }}
      />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
