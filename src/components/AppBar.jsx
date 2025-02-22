import {View, StyleSheet, Pressable, Text} from 'react-native';
import Constants from 'expo-constants';
import theme from '../styles/theme';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
	},
	pressable: {
		width: 'auto',
		height: '60',
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '0',
		paddingBottom: '0',
	},
	text: {
		color: 'white',
		fontSize: '30',
		fontWeight: theme.fontWeights.bold
	}
});

function AppBar(){
	return (
		<View style={styles.container}>
			<Pressable style={styles.pressable}>
				<Text style={styles.text}>Repositories</Text>
			</Pressable>
		</View>
	)
}

export default AppBar;
