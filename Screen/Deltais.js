import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector,Provider } from "react-redux";
import { addCart } from '../redux/reduxcer/reducerCart'

const Deltais = ({prd,navigation}) => {
  const route = useRoute();
  const { item } = route.params;

  const dispatch = useDispatch();

  const addProduct = () =>{
    dispatch(addCart(item))
    console.log(item);
  }
  return (
      
    <LinearGradient colors={["#FFFFFF", "#FFFFFF", '#262B33']} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('BottomTab')}>
            <Image style={styles.imgBtn} source={require('../image/back.png')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', fontStyle: 'italic' }}>Deltais</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image style={[styles.imgBtn, { width: 20, height: 20 }]} source={require('../image/cart.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={{ alignItems: "center" }}>
            <Image style={styles.img} source={{ uri: item.img }} />
          </View>
          <View style={{ width: '100%', padding: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.title}>Name: <Text style={styles.content}>{item.motorName}</Text></Text>
              <Text style={styles.title}>The firm: <Text style={styles.content}>{item.theFirm}</Text></Text>
            </View>
            <Text style={styles.title}>Segment:<Text style={styles.content}>{item.segment}</Text></Text>
            <Text style={styles.title}>Describe: <Text style={styles.content}>{item.describe}</Text></Text>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <View style={{ width: 140, height: 40, backgroundColor: "#FFC125", borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexDirection: "row", justifyContent: 'space-evenly', padding: 4 }}>
                  <Image style={{ width: 25, height: 25 }} source={require('../image/countries.png')} />
                  <Text style={styles.title}>Country: <Text style={styles.content}>{item.country}</Text></Text>

                </View>
                <View style={{ width: 140, height: 40, backgroundColor: "#FFC125", borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexDirection: "row", justifyContent: 'space-evenly', padding: 4, marginVertical: 10 }}>
                  <Image style={{ width: 25, height: 25 }} source={require('../image/tag.png')} />
                  <Text style={styles.title}>Price:<Text style={[styles.content, { color: 'red' }]}>{item.price}</Text><Text style={[styles.content,{color:"red"}]}>đ</Text></Text>
                </View>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
              <TouchableOpacity style={{ width: 180, height: 90, backgroundColor: "#FF6A6A", marginLeft: 10, borderRadius: 10, alignItems: 'center', justifyContent: "center", flexDirection: 'row',flex:5 }} onPress={()=>Alert.alert('Đã thêm vào mục ưa thích')}>
                <Image style={{ width: 30, height: 30, }} source={require('../image/heart.png')} />
              </TouchableOpacity>

              <TouchableOpacity style={{ width: 180, height: 90, backgroundColor: "#EE9A49", marginLeft: 10, borderRadius: 10, alignItems: 'center', justifyContent: "center", flexDirection: 'row',flex:5 }} onPress={()=>{addProduct(item),Alert.alert('Đã thêm vào giỏ hàng'),navigation.navigate("BottomTab")}}>
                <Image style={{ width: 30, height: 30, }} source={require('../image/addCart.png')} />
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default Deltais

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgBtn: {
    width: 15,
    height: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    margin: 10,
    alignItems: "center"

  },
  body: {
    margin: 10,
    flex: 1
  },
  img: {
    width: 320,
    height: 300,
    borderRadius: 10
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 5
  },
  content: {
    fontStyle: 'italic',
  }
})
