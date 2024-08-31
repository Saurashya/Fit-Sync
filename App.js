import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex justify-center items-center h-screen">
      <Text className="text-red-600">Open up App.js to start working on your app!</Text>
      <Text className="text-blue-600">Changes you make will automatically reload.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

