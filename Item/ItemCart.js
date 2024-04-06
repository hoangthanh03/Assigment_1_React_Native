import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CheckBox, Image } from 'react-native-elements';
import { useDispatch, useSelector } from "react-redux";

const ItemCart = () => {
    const [checkBox, setcheckBox] = useState(false)
    const ListPrd = useSelector(state => state.listCart.listCart);
    const dispatch = useDispatch();

    const anCheck = ()=>{
        setcheckBox(!checkBox)
    }
    return (
        <View style={styles.container}>
            <View style={styles.viewItem}>
                <CheckBox
                    checked={checkBox}
                    onPress={anCheck}
                    checkedIcon={<Image style={{ width: 18, height: 18 }} source={require('../image/checkNotNull.png')} />}// Icon khi ô đánh dấu được chọn
                    uncheckedIcon={<Image style={{ width: 18, height: 18 }} source={require('../image/checkNull.png')} />}     // Icon khi ô đánh dấu không được chọn
                />
                <Image style={styles.imgItem} source={{uri:item.img}}/>
                <View style={{flexDirection:"column"}}>
                    <Text style={styles.text}>{listCart.motorName}</Text>
                    <Text style={styles.text}>Price:<Text style={{color:'red'}}>{listCart.price}</Text></Text>
                    <View style={{flexDirection:"row",justifyContent:'space-between',width:70,marginTop:7}}>
                        <TouchableOpacity>
                        <Image style={{width:20,height:20}} source={require('../image/remove.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.text}>1</Text>
                        <TouchableOpacity>
                        <Image style={{width:20,height:20}} source={require('../image/add.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{alignItems:'flex-end',justifyContent:'flex-end',flex:1,margin:5}}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.text}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ItemCart

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    viewItem: {
        flexDirection: 'row',
        alignItems:'center',
        width:'auto'
    },
    imgItem:{
        width:70,
        height:70,
        margin:10
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