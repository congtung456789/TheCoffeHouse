import React from 'react'
import { View,ActivityIndicator, Text,StyleSheet } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#888888" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      position:'absolute',
      top:350,
      left:'50%',
      zIndex:10,
      transform:[
        {translateY:-50},{translateX:-10}
      ]
    },

  });
export default Loading
