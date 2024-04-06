import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { forwardRef } from 'react'

const TextInPut_Custom = forwardRef((props,ref) => {
  const { isPassword, ...rest } = props; // Lấy isPassword từ props
  return (
    <TextInput 
    {...rest}
    {...props}
    ref={ref}
    style ={[props.style,styles.input]}
    placeholderTextColor={props.placeholderTextColor||'gray'}
    secureTextEntry={isPassword ? true : false}
    />
  )

}
)

export default TextInPut_Custom

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:0.5,
        paddingLeft:10,
        width:'100%',
        // borderRadius:5,
        margin:10,
        height:40
    }
})