import React from 'react';
import {View, Text, StatusBar, Dimensions, StyleSheet} from 'react-native';
import Video from 'react-native-video';
//
import PikaVideo from '../assets/videos/splash.mp4';

const {height, width} = Dimensions.get('screen');

function SplashVideo({SetIsVideoEnd}) {
  return (
    <View>
      <StatusBar hidden={true} />

      <Video
        source={PikaVideo}
        style={styles.videoScreen}
        muted={true}
        resizeMode="cover"
        onEnd={() => SetIsVideoEnd(true)}
      />
    </View>
  );
}

export default SplashVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  videoScreen: {
    width: width,
    height: height,
  },
});
