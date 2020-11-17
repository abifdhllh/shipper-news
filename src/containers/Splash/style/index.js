import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Metrics} from 'utils/Theme';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.fullFlex,
    ...ApplicationStyles.justifyAlignCenter,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: Metrics.xl,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.baseColor,
  },
});
