import {Platfrom} from 'react-native';

const theme = {
	colors: {
		textPrimary: '#24292e',
		textSecondary: '#586069',
		primary: '#0366d6',
	},
	fontSizes: {
		body: 14,
		subheading: 16,
	},
	fonts: Platform.select({
		main: 'System',
		ios: 'Roboto',
		android: 'Sans-serif',
	})
	fontWeights: {
		normal: '400',
		bold: '700',
	},	
};

export default theme;
