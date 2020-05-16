import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './screens/Home';
import About from './screens/About.js';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {globalStyles} from './styles/global'
import Navigator from './routes/Drawer';
// const getFonts = () =>
// 	Font.loadAsync({
// 		'Merriweather-Regular': require('./assets/fonts/Merriweather-Regular.ttf'),
// 		'Merriweather-Bold': require('./assets/fonts/Merriweather-Bold.ttf')
// 	});

export default function App() {
	// const [ fontsLoaded, setFontsLoaded ] = useState(false);

	const [ fontsLoaded ] = useFonts({
		'Merriweather-Regular': require('./assets/fonts/Merriweather-Regular.ttf'),
		'Merriweather-Bold': require('./assets/fonts/Merriweather-Bold.ttf')
	});
	if (!fontsLoaded) {
		
		return (
			<AppLoading />
			// <AppLoading
			// 	startAsync={getFonts}
			// 	onFinish={() => {
			// 		setFontsLoaded(true);
			// 		console.log('in finsish');
			// 	}}
			// />
		);
	} else {
	
		return (
			<SafeAreaView style={globalStyles.container}>
				<Navigator />	
     {/* <View ><Text>abcd</Text></View> */}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center'
	}
});
