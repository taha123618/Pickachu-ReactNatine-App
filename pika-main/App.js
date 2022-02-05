import React, {useState} from 'react';
import {View, Text} from 'react-native';

//
import Card from './components/Card';
import SplashVideo from './components/SplashVideo';

function App() {
  const [isVideoEnd, SetIsVideoEnd] = useState(false);

  return (
    <View style={{flex: 1}}>
      {isVideoEnd ? <Card /> : <SplashVideo SetIsVideoEnd={SetIsVideoEnd} />}
    </View>
  );
}

export default App;
