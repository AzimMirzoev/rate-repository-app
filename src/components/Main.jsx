import {ScrollView, View, Text, StyleSheet} from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import {Routes,Navigate, Route, Link} from 'react-router-native';
import SignIn from './SignIn.jsx';


const styles = StyleSheet.create({
	container: {
		wrap: 'wrap',
		flexGrow: 1,
		flexShrink: 1,
		height: 'auto',
		paddingBottom: 10,
		marginBottom: 10,
	}
});

function Main(){
	return <View style={styles.container}>
			<AppBar />
			<Routes>
				<Route path='/' element={<RepositoryList />} />
				<Route path='/sign-in' element={<SignIn />} />
	
		
			</Routes>
			
		</View>
}

export default Main;
