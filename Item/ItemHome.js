import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const ItemHome = () => {
  return (
    <View style={styles.container}>
        <View style={styles.viewItem}>
            <Image style={styles.img} source={{uri:'https://i.pinimg.com/564x/64/ec/a0/64eca095aff49d952e87cf3aba39a9d1.jpg'}}/>
            <View>
            <Text style={styles.title}>The Firm:<Text style={{fontStyle:"italic"}}> BMW </Text></Text>
            <Text style={styles.title}>Name:<Text style={{fontStyle:"italic"}}> BMW S1000RR </Text></Text>
            <Text style={styles.title}>Price:<Text style={styles.text}> 1.000.000.000</Text></Text>
            </View>
        </View>
      
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