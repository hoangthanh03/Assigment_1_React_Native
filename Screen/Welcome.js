import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Welcome = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Login')
        },4000)
    },[])
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.img} source={require('../image/bgr.jpg')}>
        <View style={styles.view1}>
          <Text style={styles.title}>Hello</Text>
          <Text style={[styles.title,{fontSize:30}]}>Welcome  motorcycle </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  img:{
    flex:1,
    width:"100%",
    height:'100%'
  },
  view1:{
    margin:10
  },
  title:{
    fontFamily:'welcome',
    fontSize:40
  }
})