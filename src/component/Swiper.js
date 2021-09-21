import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import {SliderBox} from 'react-native-image-slider-box';

const images= [
  require('../img/slide1.jpg'),
  require('../img/slide2.jpg'),
  require('../img/slide3.jpg'),
  require('../img/slide4.jpg'),
]
const Slider = () => {
    return (
      <SliderBox
          images={images}
          sliderBoxHeight={200}
          // onCurrentImagePressed={index =>
          //   console.warn(`image ${index} pressed`)
          // }
          // currentImageEmitter={index => console.warn(`image ${index} pressed`)}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          horizontal={true}
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: 'rgba(128, 128, 128, 0.92)',
          }}
          autoplay
          circleLoop
          ImageComponentStyle={{borderRadius: 10, width: '100%',marginHorizontal:10}}
          imageLoadingColor="#2196F3"
        />
       
    )
}
const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        width:'92%',
      },
      anh:{
        resizeMode: 'stretch',
        width:'100%',
        height:'100%',
        borderRadius:5,
      },
})
export default Slider;
