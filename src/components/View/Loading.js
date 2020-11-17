import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

// Styles
import {Colors, Metrics, ApplicationStyles} from 'utils/Theme';
const styles = StyleSheet.create({
  container: {
    ...ApplicationStyles.fullFlex,
    ...ApplicationStyles.justifyAlignCenter,
  },
  box: {
    ...ApplicationStyles.justifyAlignCenter,
    height: 90,
    width: 140,
    backgroundColor: Colors.gray,
    borderRadius: 10,
  },
  text: {
    fontSize: Metrics.medium,
    color: 'white',
  },
});

const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ActivityIndicator size="large" color={Colors.white} />
        <Text style={styles.text}>Loading ...</Text>
      </View>
    </View>
  );
};

export default Loading;
