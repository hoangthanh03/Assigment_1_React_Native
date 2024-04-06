import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Favorites = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('BottomTab')}>
          <Image style={styles.imgBtn} source={require('../image/back.png')} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', fontStyle: 'italic' }}>Favorites</Text>
        <Text></Text>
      </View>
        <View style={styles.body}>
    
        <ImageBackground style={styles.img} source={{uri: 'https://i.pinimg.com/564x/bb/50/00/bb50000207dbf67d666f792e54234d00.jpg'}}>

         <View style={styles.viewFavorites}>
          <TouchableOpacity style={styles.boderFavorites}>
            <Image source={require('../image/Favorites.png')}/>
          </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <View style={styles.viewBody}>
                <View style={{flexDirection:'column',margin:10}}>
                </View>

                <View style={{flexDirection:'row',margin:10,justifyContent:'space-around'}}>
                  <Text>Ducati V4S</Text>
                </View>
            </View>
            <View style={{alignItems:'flex-end',margin:10}}>
            </View>

        </View>
        </ImageBackground>
      </View>
      {/* =============================== */}


      {/* ====================Footer================= */}
      <View style={styles.footer}>
        <Text style={styles.textTitle}>The Firm: Ducati</Text>
        <Text style={[styles.textTitle,{fontSize:14,fontWeight:1}]}>Name: Ducati V4S</Text>
      </View>
      {/* =================================== */}
      </View>
    
  )
}

export default Favorites

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:300,
    height:2,
    marginHorizontal:30
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
    body:{
      flex:1,
      backgroundColor:'rgba(0,0,0,0.5)',
      borderTopRightRadius:20,
      borderTopLeftRadius:20,

    },
    footer:{
      flex:0.2,
      backgroundColor:'#262B33',
      padding:20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20
    },
    img:{
      width:300,
      height:450,
      borderRadius:30,

      justifyContent:'flex-end',
    flexDirection:'column'
    },
    viewFavorites:{
        flex:2,
        alignItems:'flex-end',
        margin:10
    },
    boderFavorites:{
        width:40,
        height:40,
        borderRadius:10,
        backgroundColor:'rgba(0,0,0,0.6)',
        justifyContent:'center',
        alignItems:'center'
    },
    viewBody:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    btnBody:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#141921',
        width:60,
        height:60,
        borderRadius:15
    },
    textTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    }
})