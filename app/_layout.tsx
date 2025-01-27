import { Stack } from 'expo-router';
import React from 'react';
import '../global.css';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
	return (
		<SafeAreaView className="flex-1 bg-background">
			<Stack>
				<Stack.Screen
					name="index"
					options={{ headerShown: false }}
				/>
			</Stack>
		</SafeAreaView>
	);
}
