import {Text,Image, View, StyleSheet, FlatList} from 'react-native';
import theme from '../styles/theme';


const styles = StyleSheet.create({
	separator: {
		height: 10,
		marginBottom: 5,
		backgroundColor: '#D3D3D3',
	},
		
	repository_wrap: {
		flex: 1,
		flexDirection: 'column',
		height: 200,
		padding: 5,

	},
	repo_info: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginTop: 10,
	},
	user_info: {
		flexDirection: 'row',
		height: 70,
		paddingBottom: 10,
		flex: 1,
	},
	user_img: {
		width: 60,
		height: 60,
		borderRadius: 3,
	},
	user_info_detail: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		marginLeft: 10,
	},
	fullname: {
		fontWeight: "bold",
		padding: 5,
	},
	description: {
		color: 'gray',
		width: 250,
		padding: 5,
	},
	language: {
		color: "white",
		backgroundColor: theme.colors.primary,
		borderRadius: 3,
		padding: 5,
		marginTop: 5,
	},
	names: {
		alignSelf: "center",
	},
	nums: {
		fontWeight: 'bold',
		alignSelf: 'center',
	}




});

const repositories = [
	{
		id: 'jaredpalmer.formik',
		fullName: 'jaredpalmer/formik',
		description: 'Build froms in React, without the tears',
		language: 'Typescript',
		forksCount: 1589,
		stargazersCount: 21553,
		ratingAverage: 88,
		reviewCount: 4,
		ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
	},
	{
		id: 'rails.rails',
		fullName: 'rails/rails',
		description: 'Ruby on Rails',
		language: 'Ruby',
		forksCount: 18349,
		stargazersCount: 45377,
		ratingAverage: 100,
		reviewCount: 2,
		ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
	},
	{
		id: 'django.django',
		fullName: 'django/django',
		description: 'The Web framework for perfectionists with deadlines.',
		language: 'Python',
		forksCount: 21015,
		stargazersCount: 48496,
		ratingAverage: 73,
		reviewCount: 5,
		ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
	},
	{
		id: 'reduxjs.redux',
		fullName: 'reduxjs/redux',
		description: 'Predictable state container for JS',
		language: 'Typescript',
		forksCount: 13902,
		stargazersCount: 52869,
		ratingAverage: 0,
		reviewCount: 0,
		ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4'
	}
	
];

function ItemSeparator(){
	return <View style={styles.separator}></View>
}






function RepositoryItem({fullName, description, language, stars, forks, reviews, rating, imgUri}){
	
	return (
		<View style={styles.repository_wrap}>

			<View style={styles.user_info}>
				<Image style={styles.user_img} source={{uri: imgUri}}/>
		
				<View style={styles.user_info_detail}>
					<Text style={styles.fullname}>{fullName}</Text>
					<Text style={styles.description}>{description}</Text>
					<Text style={styles.language}>{language}</Text>
				</View>
			</View>

			<View style={styles.repo_info}>

				<View>
					<Text style={styles.nums}> {stars}</Text>
					<Text style={styles.names}> Stars</Text>
				</View>
				
				<View>
					<Text style={styles.nums}>{forks}</Text>
					<Text style={styles.names}>Forks</Text>
				</View>
				
				<View>
					<Text style={styles.nums}>{reviews}</Text>
					<Text style={styles.names}>Reviews</Text>
				</View>
				
				<View>
					<Text style={styles.nums}>{rating}</Text>	
					<Text style={styles.names}>Rating</Text>
				</View>
				
			</View>

		</View>
	);

}

function RepositoryList(){
	return (
		<FlatList 
			data={repositories}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({item})=> <RepositoryItem imgUri={item.ownerAvatarUrl} fullName={item.fullName} description={item.description} language={item.language} stars={item.stargazersCount} forks={item.forksCount} reviews={item.reviewCount} rating={item.ratingAverage}/> }
		/>
	);
}

export default RepositoryList;
