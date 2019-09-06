import { StyleSheet } from 'react-native';
import themeVariables from './variables';
import themeCommonStyles from './common';

export default StyleSheet.create({
  page_background: {
    backgroundColor: themeVariables.SECONDARY_COLOR,
    flex : 1 
  },
  h1 : {
        ...themeCommonStyles.headingStyles,
        fontFamily : themeVariables.FONT_BOLD,
        fontSize : 45
  },
  h2: {     
        ...themeCommonStyles.headingStyles,
        fontFamily : themeVariables.FONT_BOLD,
        fontSize : 30
  },
  h3: { 
        ...themeCommonStyles.headingStyles,
        fontFamily : themeVariables.FONT_MEDIUM,
        fontSize : 25

  },
  p_lead : { 
        ...themeCommonStyles.paragraphDefault,
        fontSize : 20
  },
  p : { 
        ...themeCommonStyles.paragraphDefault,
        fontSize: 15 
  },
  

});