import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextInPut_Custom from '../Component_custom/TextInPut_Custom'
import CustomButton from '../Component_custom/Button_Custom'

const Update_Profile = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style={styles.textTitle}>
        <TouchableOpacity onPress={()=>navigation.navigate('BottomTab')}>
        <Image style={{ width: 10, height: 15 }} source={require('../image/back.png')}/>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black" }}>Chỉnh Sửa Thông Tin</Text>
        <Text></Text>
      </View>
      <View style={styles.body}>
        <Image style={styles.avt} source={{ uri: 'https://i.pinimg.com/564x/ed/fe/76/edfe76400d541662d057aece50b0a529.jpg' }} />
        <TextInPut_Custom
          placeholder="Hoàng Trung Thành"
        />
        <TextInPut_Custom
          placeholder="hoangthanh0310204@gmail.com"
        />
        <TextInPut_Custom
          placeholder="Hà Đông-Hà Nội"
        />
        <TextInPut_Custom
          placeholder="0325572833"
        />
      </View>
      <CustomButton
      title='Chỉnh sửa thông tin'
      // onPress={onPress}
      style={{marginTop:90}}
      />
    </View>
  )
}

export default Update_Profile

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textTitle: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    margin: 10
  },
  body: {
    alignItems: 'center',
    marginTop: 20,
    margin: 20
  },
  avt: {
    width: 80,
    height: 80,
    borderRadius: 40,
  }
})