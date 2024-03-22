import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import TextInPut_Custom from '../Component_custom/TextInPut_Custom'
import CustomButton from '../Component_custom/Button_Custom'

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errUser, setErrUser] = useState('')
  const [errPass, setErrPass] = useState('')
  const [userNameFocused, setUserNameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const userNameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleUserNameFocus = () => {
    setUserNameFocused(true);
    setUserNameFocused(false);
   
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
    setPasswordFocused(false);
  };

  const handleLogin = () => {
    // Handle login here
    navigation.navigate('BottomTab')
  }

  const checkInputs = () => {
    if (!userName) {
      setErrUser('Vui lòng nhập username');
      userNameRef.current.focus();
      setUserNameError(true)
    } else {
      setUserNameError(false)
      setErrUser('')
    }

    if (!password) {
      setErrPass('Vui lòng nhập password');
      passwordRef.current.focus();
      setPasswordError(true)
    } else {
      setPasswordError(false)
      setErrPass('')
    }
    // If no errors, proceed with login
    handleLogin();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground style={styles.img} source={require('../image/background_crop2.png')}>
          <Text style={{  fontFamily:'welcome',fontSize:40}}>Login</Text>
        </ImageBackground>
      </View>
      <View style={styles.viewBody}>
        <View>
          <TextInPut_Custom
            ref={userNameRef}
            onFocus={handleUserNameFocus}
            onChangeText={setUserName}
            placeholder='Username'
            placeholderTextColor='gray'
            style={[
              styles.input,
              userNameFocused && { borderColor: 'blue' },
              userNameError && { borderColor: 'red', placeholderTextColor: "red" },
            ]}
          />
          <Text style={styles.errorText}>{errUser}</Text>

          <TextInPut_Custom
            ref={passwordRef}
            onFocus={handlePasswordFocus}
            onChangeText={setPassword}
            placeholder='Password'
            placeholderTextColor='gray'
            style={[
              styles.input,
              passwordFocused && { borderColor: 'cyan' },
              passwordError && { borderColor: 'red' },
            ]}
          />
          <Text style={styles.errorText}>{errPass}</Text>

          <CustomButton
            title='Login'
            onPress={checkInputs}
          />
          <View style={{ alignItems: "center" }}>
            <Text style={{marginBottom:17,fontStyle:'italic'}}>Forgot password?</Text>
            <Text style={{fontStyle:'italic',color:'black'}}>________________________Or________________________</Text>
          </View>
        </View>
        <View style={styles.btnWith}>
        <TouchableOpacity style={styles.logWith}>
          <Image style={{width:25,height:25,marginRight:7}} source={require('../image/facebook.png')} />
          <Text style={styles.text}>Facebook</Text>
        </TouchableOpacity>
        {/* //////////// */}
        <TouchableOpacity style={styles.logWith}>
          <Image style={{width:25,height:25,marginRight:7}} source={require('../image/google.png')} />
          <Text style={styles.text}>Google</Text>
        </TouchableOpacity>

        </View>
        <View style={{alignItems:'center'}}>
          <Text onPress={()=>{navigation.navigate('Register')}} style={{fontStyle:'italic',marginTop:10}}>Don't have an account? <Text style={{color:'black',fontWeight:'bold',fontStyle:'italic'}}>Sign Up</Text></Text>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6E2FF'
  },
  input: {
    borderColor: 'gray',
    paddingLeft: 10,
  },
  errorText: {
    color: 'red',
    marginLeft: 20,
    fontStyle: 'italic',
    fontSize: 12
  },
  img: {
    // flex: 1,
    width: '100%', // Chiều rộng cố định của ảnh
    height: '100%', // Chiều cao cố định của ảnh

  },
  header: {
    flex: 0.7
  },
  viewBody: {
    flex: 2.1,
    backgroundColor: "white",
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  logWith: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9AC0CD',
    padding:4,
    borderRadius:6,
    width:100,
    alignItems:'center',
    justifyContent:'center',
    margin:10
    // margin:20
  },
  btnWith:{
    flexDirection:'row',
    // alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:'black',
    fontWeight:'bold'
  }
})
