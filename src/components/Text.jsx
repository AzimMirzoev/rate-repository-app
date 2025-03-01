import {Text as NativeText, StyleSheet} from 'react-native';

import theme from '../styles/theme';

const styles = StyleSheet.create({
	text: {
		color: theme.colors.textPrimary,
		fontSize: theme.fontSizes.body,
		fontFamily: theme.fonts.main,
		fontWeight: theme.fontWeights.normal,
	},
	colorTextSecondary: {
		color: theme.colors.textSecondary,
	},

	colorPrimary: {
		color: theme.coloors.primary,
	},
	fontSizeSubheading: {
		fontSize: theme.fontSizes.subheading,
	},
	fontWeightBold: {
		fontWeight: theme.fontWeights.bold,
	},
});

function Text({color, fontSize, fontWeight, style, ...props}){
	const textStyle = [
		styles.text,
		color === 'textSecondary' && styles.colorTextSecondary,
		color === 'primary' && styles.colorPrimary,
		fontSize === 'subheading' && styles.fontSizeSubheading,
		fontWeight === 'bold' && styles.fontWeightBold,
		style,
	];
	
	// so when we put the style here it means adding new values to the NativeText styling 
	
	
	return NativeText style ={textStyle} {...props} />
}

export default Text;
