import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';

// Styles
import {Colors} from 'utils/Theme';

const NativeTouchable = ({onPress, children, containerStyle, style}) => {
  const Touchable =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <View style={containerStyle}>
      <Touchable
        background={TouchableNativeFeedback.Ripple(Colors.gray, true)}
        onPress={onPress}>
        <View style={style}>{children}</View>
      </Touchable>
    </View>
  );
};

export default NativeTouchable;
