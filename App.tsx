import { Text, View } from 'react-native';

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import './global.css';

export default function App() {
  return (
    <GluestackUIProvider mode="light"><View className="flex-1 justify-center items-center bg-white">
        <Text className="text-2xl font-bold text-blue-500">Hello World</Text>
      </View></GluestackUIProvider>
  );
}
