import { Stack } from 'expo-router';
import React from 'react';
import '../global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

export default function RootLayout() {
	return (
		<SafeAreaView className="flex-1 bg-background">
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
				}}
			>
				<Stack>
					<Stack.Screen
						name="index"
						options={{ headerShown: false }}
					/>
				</Stack>
			</ScrollView>
		</SafeAreaView>
	);
}
