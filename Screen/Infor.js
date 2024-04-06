import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Infor = ({navigation}) => {
  return (
    <LinearGradient colors={['#87CEEB', '#FFFFF0', '#EECBAD']} style={{ flex: 1 }}>
    <View style={styles.container}>
      <View style={{alignItems:"center",margin:10}}>
      <Text style={{color:'black',fontWeight:"bold",fontSize:20}}>PROFILE</Text>
      </View>
      <View style={styles.viewBody}>

        <View style={styles.viewAvt}>
          <Image style={styles.avt} source={{uri:'https://i.pinimg.com/564x/ed/fe/76/edfe76400d541662d057aece50b0a529.jpg'}}/>
          <View style={{marginLeft:10}}>
            <Text style={styles.text}>Hoàng Trung Thành</Text>
            <Text style={{fontSize:12}}>hoangthanh0310204@gmail.com</Text>
          </View>
        </View>
        <View style={styles.viewText}>
  
          <Text>__________________________________________________</Text>
          <Text style={styles.textContent} onPress={()=>navigation.navigate('UpdatePRF')}>Chỉnh sửa thông tin</Text>
          <Text style={styles.textContent} onPress={()=>navigation.navigate('Favorites')}>Danh sách yêu thích</Text>
          <Text style={styles.textContent}>Lịch sử xem</Text>
          <Text onPress={()=>{navigation.navigate('Login')}} style={[styles.textContent,{color:'red'}]}>Đăng xuất</Text>

        </View>

      </View>
    </View>
    </LinearGradient>
  )
}

export default Infor

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  viewBody:{
    flex:1,
    margin:20,

  },
  viewAvt:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:''

  },
  avt:{
    width:40,
    height:40,
    borderRadius:40
  },
  text:{
    color:'black',
    fontWeight:'bold',
    fontStyle:"italic"

  },
  viewText:{
    marginTop:50
  },
  textContent:{
    fontWeight:'bold',
    color:'#8B4513',
    margin:7
  }
})