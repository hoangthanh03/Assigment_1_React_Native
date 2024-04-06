import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CheckBox, Image } from 'react-native-elements';
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteCart } from '../redux/reduxcer/reducerCart';

const Cart = ({navigation,item}) => {

  const [checkBox, setcheckBox] = useState(false)
  const ListPrd = useSelector(state => state.listCart.listCart);

  const dispatch = useDispatch();

  const anCheck = () => {
      setcheckBox(!checkBox)
  }

  const renderItem = ({ item }) => (
    <View style={styles.viewItem}>
      <CheckBox
        checked={checkBox}
        onPress={anCheck}
        checkedIcon={<Image style={{ width: 18, height: 18 }} source={require('../image/checkNotNull.png')} />}
        uncheckedIcon={<Image style={{ width: 18, height: 18 }} source={require('../image/checkNull.png')} />}
      />
      <Image style={styles.imgItem} source={{ uri: item.img }} />
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.text}>{item.motorName}</Text>
        <Text style={styles.text}>Price:<Text style={{ color: 'red' }}>{item.price}</Text></Text>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', width: 70, marginTop: 7 }}>
          <TouchableOpacity onPress={()=>{dispatch(deleteCart(item))}}>
            <Image style={{ width: 20, height: 20 }} source={require('../image/remove.png')} />
          </TouchableOpacity>
          <Text style={styles.text}>{item.quantity}</Text>
          <TouchableOpacity onPress={()=>dispatch(addCart(item))}>
            <Image style={{ width: 20, height: 20 }} source={require('../image/add.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', flex: 1, margin: 5 }}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('BottomTab')}>
          <Image style={styles.btnHearder} source={require('../image/back.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>Cart</Text>
        <TouchableOpacity>
          <Image style={styles.btnHearder} source={require('../image/bin.png')} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={ListPrd}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    flexDirection:'row',
    margin:10,
    justifyContent:'space-between',
    alignItems:'center'
  },
  btnHearder:{
    width:17,
    height:17,
  },
  title:{
    fontSize:20,
    color:'black',
    fontStyle:'italic',
    fontWeight:'bold'
  },

  ////////
  viewItem: {
    flexDirection: 'row',
    alignItems:'center',
    width:'auto'
  },
  imgItem:{
    width:70,
    height:70,
    margin:10,
    borderRadius:10
  },
  btn:{
    width:50,
    height:30,
    backgroundColor:'#9AC0CD',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    color:'black',
    fontStyle:"italic"
  }
})
