import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ItemHome = ({item}) => {
  return (
    
      
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={()=>navigation.navigate('Cart')}> */}
        <View style={styles.viewItem}>
            <Image style={styles.img} source={{uri: item.img}}/>
            <View>
            <Text style={styles.title}>The Firm:<Text style={{fontStyle:"italic"}}>{item.theFirm} </Text></Text>
            <Text style={styles.title}>Name:<Text style={{fontStyle:"italic"}}> {item.motorName} </Text></Text>
            <Text style={styles.title}>Price:<Text style={styles.text}> {item.price}</Text></Text>
            </View>
        </View>
      
    {/* </TouchableOpacity> */}
    </View>
  )
}

export default ItemHome

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        // flex:1
       
    },
    img:{
        width:130,
        height:130,
        borderRadius:10
    },
    viewItem:{
        // flex:1
        backgroundColor:"rgba(0,0,0,0.03)",
        borderRadius:10,
        width:160,
        height:200,
        alignItems:"center",
        margin:10,
        padding:10
    },
    title:{
        fontWeight:'bold',
        fontSize:13,
        color:'black'
    },
    text:{
        color:'red',
        fontStyle:'italic'
    }
})
