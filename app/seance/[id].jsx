import { useLocalSearchParams } from 'expo-router';

export default function SeanceDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Séance ID: {id}</Text>
    </View>
  );
}
