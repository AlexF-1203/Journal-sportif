import { Slot, Stack } from 'expo-router';
import { AuthProvider } from './src/components/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer independent={true}>
        <Stack>
          <Stack.Screen
            name="login"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="register"
            options={{ title: 'Inscription' }}
          />
          <Stack.Screen
            name="index"
            options={{
              title: 'Accueil',
              headerLeft: () => null
            }}
          />
        </Stack>
      </NavigationContainer>
    </AuthProvider>
  );
}
