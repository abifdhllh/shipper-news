import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Metrics} from 'utils/Theme';

export default StyleSheet.create({
  ...ApplicationStyles,
  container: {
    ...ApplicationStyles.fullFlex,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    ...ApplicationStyles.globalContainer,
    paddingBottom: 0,
    flexGrow: 1,
  },
  title: {
    fontSize: 15,
    color: Colors.gray,
  },
});
