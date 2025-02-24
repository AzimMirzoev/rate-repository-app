import {View, StyleSheet, Pressable, Text} from 'react-native';
import Constants from 'expo-constants';
import theme from '../styles/theme';
import {Link} from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';


const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
	},
	pressable: {
		width: 'auto',
		height: '60',
		backgroundColor: 'black',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginBottom: '0',
		paddingBottom: '0',
		flexDirection: 'row',
	},
	text: {
		color: 'white',
		fontSize: '20',
		fontWeight: theme.fontWeights.bold
	}
});

function AppBar(){
	return (
		<View style={styles.container}>
			<View style={styles.pressable}>
				<Link to="/">
					<Text style={styles.text}>Repositories</Text>
				</Link>
				<Link to='/sign-in'>
					<Text style={styles.text}>Sign In</Text>
				</Link>
			</View>
		</View>
	)
}

export default AppBar;
