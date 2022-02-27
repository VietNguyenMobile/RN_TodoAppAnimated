import { View } from 'react-native';
import React, { FunctionComponent } from 'react';
import { Box, Text, VStack } from 'native-base';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerParamType } from '../navigation';

type AboutScreenProps = NativeStackScreenProps<DrawerParamType, 'About'>;

const AboutScreen: FunctionComponent<AboutScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <VStack flex={1}>
      <Box >
        <Text>AboutScreen</Text>
      </Box>
    </VStack>
  );
};

export default AboutScreen;
