// import { View, Text } from 'react-native';

import React, { useCallback, useState, FunctionComponent } from 'react';
import {
  Icon,
  VStack,
  useColorModeValue,
  themeTools,
  useTheme,
  useColorMode,
  Fab,
  Center,
  Box,
  Text,
} from 'native-base';
import { Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AnimatedColorBox from '../components/animated-color-box';
import TaskList from '../components/task-list';
import TaskItem from '../components/task-item';
import shortid from 'shortid';
import Masthead from '../components/masthead';
import NavBar from '../components/navbar';
import ThemeToggle from '../components/theme-toggle';
import AnimatedCheckbox from '../components/animated-checkbox';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerParamType } from '../navigation';

type MainScreenProps = NativeStackScreenProps<DrawerParamType, 'Main'>;

const MainScreen: FunctionComponent<MainScreenProps> = ({
  navigation,
  route,
}) => {
  const [checked, setChecked] = useState(false);

  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev);
  }, []);

  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <Box w="100px" h="100px">
          <Pressable onPress={handlePressCheckbox}>
            <AnimatedCheckbox checked={checked} />
          </Pressable>
        </Box>
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>MainScreen</Text>
        </Box>
        <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox} />
        <ThemeToggle />
      </VStack>
    </Center>
  );
};

export default MainScreen;
