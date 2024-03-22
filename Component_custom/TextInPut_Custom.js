import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { forwardRef } from 'react'

const TextInPut_Custom = forwardRef((props,ref) => {
  return (
    <TextInput 
    {...props}
    ref={ref}
    style ={[props.style,styles.input]}
    placeholderTextColor={props.placeholderTextColor||'gray'}
    />
  )

}
)

export default TextInPut_Custom

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        paddingLeft:10,
        // borderRadius:5,
        margin:10,
        height:40
    }
})