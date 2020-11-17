import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Touchable from 'components/Touchable/NativeTouchable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Style
import {Metrics, Colors, ApplicationStyles} from 'utils/Theme';
const styles = StyleSheet.create({
  container: {
    borderRadius: Metrics.xxs,
    backgroundColor: Colors.lightGray,
    width: '100%',
    marginBottom: Metrics.medium,
  },
  row: {
    flexDirection: 'row',
    padding: Metrics.xs,
  },
  image: {
    resizeMode: 'cover',
    borderRadius: Metrics.xxs,
    width: 150,
    height: 100,
  },
  textView: {
    ...ApplicationStyles.fullFlex,
    paddingHorizontal: Metrics.xs,
  },
  title: {
    fontWeight: 'bold',
    fontSize: Metrics.small,
  },
  desc: {
    fontSize: Metrics.xs,
  },
});

const CardButton = ({data = {}, iconComponent = {}, onPress, onPressIcon}) => {
  return (
    <Touchable
      containerStyle={styles.container}
      style={styles.row}
      onPress={onPress}>
      <Image
        style={styles.image}
        source={data.urlToImage ? {uri: data.urlToImage} : ''}
      />
      <View style={styles.textView}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
      </View>
      <TouchableOpacity onPress={onPressIcon}>
        <Icon
          name={iconComponent.name}
          size={Metrics.xl}
          color={iconComponent.color || Colors.black}
        />
      </TouchableOpacity>
    </Touchable>
  );
};

export default CardButton;
