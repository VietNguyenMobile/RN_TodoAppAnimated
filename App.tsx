import React from 'react';
import { View, Text } from 'react-native';
import AppContainer from './src/components/app-container';
import Navigator from './src/navigation';

const App = () => {
  return (
    <AppContainer>
      <Navigator />
      {/* <View>
        <Text>aaa</Text>
      </View> */}
    </AppContainer>
    // <View>
    //   <Text>aaa</Text>
    // </View>
  );
};

export default App;
