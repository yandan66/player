import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-looped-carousel';

let screenWidth = Dimensions.get('window').width;

export default class Swiper extends React.Component {
  render() {
    return (<View>
      <Carousel
        style={styles.swiperContainer}
        delay={5000}
        autoplay
        bullets
        bulletStyle={{
          margin: 5,
          width: 4,
          height: 4,
          backgroundColor: '#ccc',
          borderColor: '#ccc'
        }}
        chosenBulletStyle={{
          margin: 5,
          width: 6,
          height: 6,
          backgroundColor: '#3cb963',
          borderColor: '#3cb963'
        }}
        bulletsContainerStyle={{
          bottom: -10
        }}>
        {this.renderSwipers()}
      </Carousel>
    </View>);
  }

  renderSwipers() {
    let swiperData = this.props.swipers;
    return swiperData.map((swiper, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          focusedOpacity={1}
          onPress={() => { }}>
          <Image
            style={styles.swiper}
            source={{ uri: swiper.imgUrl }}
          />
        </TouchableOpacity>
      )
    })
  }
}

const styles = StyleSheet.create({
  swiperContainer: {
    width: screenWidth,
    height: screenWidth / 1.7794
  },
  swiper: {
    resizeMode: 'contain',
    width: screenWidth,
    height: screenWidth / 1.7794
  },
})