// Main Lib
import React, {useEffect} from 'react';

// Component
import {View, Text, Image} from 'react-native';

// Constant
import {APP_NAME} from 'utils/Constants';

// Style
import {appIcon} from 'utils/Images';
import styles from './style';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={appIcon} style={styles.image} />
      <Text style={styles.title}>{APP_NAME}</Text>
    </View>
  );
};

export default Splash;
