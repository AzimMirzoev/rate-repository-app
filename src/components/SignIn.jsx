import {Text, TextInput, Pressable, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useFormik} from 'formik';
import theme from '../styles/theme';
import * as yup from 'yup';


const styles = StyleSheet.create({
	container: {
		padding: 20,
		width: '100%',
		alignItems: 'center',
		flexGrow: 1,
		flexShrink: 1,
	},
	title: {
		fontSize: 50,
		color: 'black',
		fontWeight: 'bold',
		alignSelf: 'center',
		margin: 10,
		padding: 10,
	},
	input: {
		borderWidth: 1,
		borderRadius: 5,
		margin: 10,
		padding: 15,
		width: '100%',
		borderColor: 'gray',
		fontSize: 20,
		height: 50,

	},
	text: {
		color: 'white',
		alignSelf: 'center',
		fontSize: 25,
		fontWeight: 'bold',
	},

	pressable: {
		width: '100%',
		height: 40,
		margin: 10,
		justifyContent: 'center',
		alignContent: 'center',
		borderRadius: 5,
		backgroundColor: theme.colors.primary, 
	},
	error: {
		color: 'red',
		alignSelf: 'left',
		alignContent: 'start',
		fontSize: 14,

	}

});

const initialValues = {
	name: '',
	password: '',
}

const validationSchema = yup.object().shape({
	name: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
});

function handleSignIn(values){
	console.log(values.name);
	console.log(values.password);
}

function SignIn(){
	
	const formik = useFormik({
		initialValues,
		validationSchema: validationSchema,
		onSubmit: values => {
			return handleSignIn(values)
		},
	});

	return <View style={styles.container}>

			<Text style={styles.title}>Sign in</Text>
	
			<TextInput style={styles.input} placeholder="username" value={formik.values.name} onChangeText={formik.handleChange('name')} />
			{formik.touched.name && formik.errors.name && (<Text style={styles.error}>{formik.errors.name}</Text>)}
			
			<TextInput style={styles.input} placeholder="password" value={formik.values.password} onChangeText={formik.handleChange('password')}/>
			{formik.touched.password && formik.errors.password && (<Text style={styles.error}>{formik.errors.password}</Text>)}
			<TouchableOpacity style={styles.pressable} onPress={formik.handleSubmit}>
				<Text style={styles.text}> sign in </Text>
			</TouchableOpacity>
		</View>

}

export default SignIn;
