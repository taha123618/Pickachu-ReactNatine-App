import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import CardStack, {Card} from 'react-native-card-stack-swiper';

// images import
import Pic1 from '../assets/images/p1.png';
import Pic2 from '../assets/images/p2.jpg';
import Pic3 from '../assets/images/p3.png';
import Pic4 from '../assets/images/p4.jpg';
import Pic5 from '../assets/images/p5.jpg';
import Pic6 from '../assets/images/p6.jpg';
import Pic7 from '../assets/images/p7.jpg';
import Pic8 from '../assets/images/p8.png';
import Pic9 from '../assets/images/p9.jpg';
import Pic10 from '../assets/images/p10.jpg';

//
import BackIcon from '../assets/icons/back.png';
import RightSwipeIcon from '../assets/icons/green.png';
import LeftSwipeIcon from '../assets/icons/red.png';

function CardComponent() {
  const cardRef = useRef(null);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <CardStack style={styles.content} ref={cardRef}>
        <Card style={styles.card}>
          <Image resizeMode="cover" style={styles.image} source={Pic1} />
        </Card>
        <Card style={styles.card}>
          <Image resizeMode="cover" style={styles.image} source={Pic2} />
        </Card>
        <Card style={styles.card}>
          <Image resizeMode="cover" style={styles.image} source={Pic3} />
        </Card>
        <Card style={styles.card}>
          <Image resizeMode="cover" style={styles.image} source={Pic4} />
        </Card>
        <Card style={styles.card}>
          <Image resizeMode="cover" style={styles.image} source={Pic5} />
        </Card>
        <Card style={styles.card}>
          <Image resizeMode="cover" style={styles.image} source={Pic6} />
        </Card>
        <Card style={styles.card}>
          <Image resizeMode="cover" style={styles.image} source={Pic7} />
        </Card>
        <Card style={styles.card}>
          <Image resizeMode="cover" style={styles.image} source={Pic8} />
        </Card>
        <Card style={styles.card}>
          <Image resizeMode="cover" style={styles.image} source={Pic9} />
        </Card>
        <Card style={styles.card}>
          <Image resizeMode="cover" style={styles.image} source={Pic10} />
        </Card>
      </CardStack>

      <View style={styles.footer}>
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity
            style={styles.leftSwipe}
            onPress={() => cardRef.current.swipeLeft()}>
            <Image source={LeftSwipeIcon} style={{height: 62, width: 62}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => cardRef.current.goBackFromLeft()}>
            <Image
              source={BackIcon}
              style={{height: 32, width: 32, borderRadius: 5}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rightSwipe}
            onPress={() => cardRef.current.swipeRight()}>
            <Image source={RightSwipeIcon} style={{height: 62, width: 62}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CardComponent;

const {height, width} = Dimensions.get('screen');

console.log('height', height);
console.log('width', width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    // height: 460,
    // width: 300,
    width: width - 100,
    height: height - 300,
    borderRadius: 15,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonContainer: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backbutton: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: 'rgb(246,190,66)',
    borderRadius: 55,
    marginTop: -15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSwipe: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#01df8a',
  },
  leftSwipe: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#fd267d',
  },
});
