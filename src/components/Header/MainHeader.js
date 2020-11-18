import React from 'react';

// Component
import {View, Text, StatusBar, Platform, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BorderlessButton} from 'react-native-gesture-handler';

// Style
import {Colors, Metrics, ApplicationStyles} from 'utils/Theme';

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.medium,
    backgroundColor: Colors.white,
    elevation: 2,
  },
  title: {
    fontSize: Metrics.large,
    color: Colors.baseColor,
    fontWeight: 'bold',
    flex: 1,
  },
  touchable: {
    ...ApplicationStyles.justifyAlignCenter,
  },
  icon: {
    fontSize: Metrics.xl,
    color: Colors.baseColor,
  },
});

const Header = ({
  title,
  backButton,
  navigation,
  customButton,
  iconName,
  onPressCustomButton,
}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={styles.container}>
        {backButton && (
          <BorderlessButton
            style={[styles.touchable, {marginRight: Metrics.medium}]}
            onPress={() => navigation.goBack()}>
            <Icon
              name={Platform.OS === 'android' ? 'arrow-back' : 'arrow-back-ios'}
              style={styles.icon}
            />
          </BorderlessButton>
        )}
        <Text
          style={[
            styles.title,
            {textAlign: Platform.OS === 'ios' ? 'auto' : 'left'},
          ]}>
          {title}
        </Text>
        {customButton && (
          <BorderlessButton
            style={[styles.touchable, {marginLeft: Metrics.medium}]}
            onPress={onPressCustomButton}>
            <Icon name={iconName} style={styles.icon} />
          </BorderlessButton>
        )}
      </View>
    </>
  );
};

export default Header;
