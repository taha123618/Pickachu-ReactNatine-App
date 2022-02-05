import React, {useState} from 'react';
import {View} from 'react-native';
import Card from './source/components/Card';
import SplashVideo from './source/components/SplashVideo';

const App = () => {
  const [isVideoEnd, SetIsVideoEnd] = useState(false);

  return (
    <View style={{flex: 1}}>
      {isVideoEnd ? <Card /> : <SplashVideo SetIsVideoEnd={SetIsVideoEnd} />}
    </View>
  );
};

export default App;
