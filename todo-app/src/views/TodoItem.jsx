import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default (TodoItem = ({ item, onPress }) => {
	return (
		//
		<TouchableOpacity onPress={() => onPress(item.id)}>
			<View style={styles.item}>
				<MaterialIcons name="delete" size={28} color="grey" />
				<Text style={styles.itemText}> {item.name}</Text>
			</View>
		</TouchableOpacity>
	);
});

const styles = StyleSheet.create({
	item: {
		marginTop: 16,
		padding: 16,

		borderWidth: 1,
		borderColor: 'grey',
		borderStyle: 'dashed',
		borderRadius: 10,
		flexDirection: 'row'
		// backgroundColor: 'grey',
		//marginVertical: 1
		// marginHorizontal: 10
	},
	itemText: {
		fontSize: 17,
		marginLeft: 10
	}
});
