import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Style
import {Colors, ApplicationStyles} from 'utils/Theme';
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: Colors.gray,
    textAlign: 'center',
  },
});

const EmptyList = ({message}) => {
  return (
    <View
      style={[
        ApplicationStyles.fullFlex,
        ApplicationStyles.justifyAlignCenter,
      ]}>
      <Icon color={Colors.gray} size={100} name="delete-empty" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default EmptyList;
