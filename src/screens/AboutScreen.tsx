import { View, Text } from 'react-native';
import React, { FunctionComponent } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerParamType } from '../navigation';

type AboutScreenProps = NativeStackScreenProps<DrawerParamType, 'About'>;

const AboutScreen: FunctionComponent<AboutScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <View>
      <Text>AboutScreen</Text>
    </View>
  );
};

export default AboutScreen;
