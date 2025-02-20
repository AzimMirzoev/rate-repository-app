import {Text, View, StyleSheet, FlatList} from 'react-native';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
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
	return <View style={styles.separator}> </View>
}


function RepositoryItem({fullName, description, language, stars, forks, reviews, rating}){
	return (
		<View>

			<Text>Fullname: {fullName}</Text>
			<Text>Description: {description}</Text>
			<Text>Language: {language}</Text>
			<Text>Stars: {stars}</Text>
			<Text>Forks: {forks}</Text>
			<Text>Reviews: {reviews}</Text>
			<Text>Rating: {rating}</Text>
		</View>
	);

}

function RepositoryList(){
	return (
		<FlatList 
			data={repositories}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({item})=> <RepositoryItem fullName={item.fullName} description={item.description} language={item.language} stars={item.stargazersCount} forks={item.forksCount} reviews={item.reviewCount} rating={item.ratingAverage}/> }
		/>
	);
}

export default RepositoryList;

