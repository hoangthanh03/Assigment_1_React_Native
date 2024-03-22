import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import TextInPut_Custom from '../Component_custom/TextInPut_Custom'
import CustomButton from '../Component_custom/Button_Custom'

const Register = ({ navigation }) => {
  //usetate lưu giá trị
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [Cfpassword, setCfPassword] = useState('')

  //usestate lưu giá trị khi input bị lỗi hiển thị ra thẻ text
  const [errUser, setErrUser] = useState('')
  const [errPass, setErrPass] = useState('')
  const [errCfPass, setErrCfPass] = useState('')

  // usestate lưu giá trị khi input được theo dõi
  const [userNameFocused, setUserNameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [CfpasswordFocused, setCfPasswordFocused] = useState(false);

  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [CfpasswordError, setCfPasswordError] = useState(false);

  const userNameRef = useRef(null)
  const passwordRef = useRef(null)
  const CfpasswordRef = useRef(null)

  const handleUserNameFocus = () => {
    setUserNameFocused(true);
    setPasswordFocused(false);
    setCfPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
    setUserNameFocused(false);
    setCfPasswordFocused(false);
  };

  const handleCfPasswordFocus = () => {
    setCfPasswordFocused(true);
    setPasswordFocused(false);
    setUserNameFocused(false);
  };

  const handleLogin = () => {
    // Handle login here
    // navigation.navigate('Home')
  }

  const checkInputs = () => {
    if (!userName) {
      setErrUser('Vui lòng nhập username');
      userNameRef.current?.focus();
      setUserNameError(true)
    } else {
      setUserNameError(false)
      setErrUser('')
    }

    if (!password) {
      setErrPass('Vui lòng nhập password');
      passwordRef.current?.focus();
      setPasswordError(true)
    } else {
      setPasswordError(false)
      setErrPass('')
    }

    if (!Cfpassword) {
      setErrCfPass('Vui lòng xác nhận password');
      CfpasswordRef.current.focus();
      setCfPasswordError(true)
    } else {
      setCfPasswordError(false)
      setErrCfPass('')
    }

    if(Cfpassword != password){

    }

    // If no errors, proceed with login
    handleLogin();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground style={styles.img} source={require('../image/background_crop2.png')}>
          <Text style={{ fontFamily: 'welcome', fontSize: 40 }}>Register</Text>
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

          <TextInPut_Custom
            ref={CfpasswordRef}
            onFocus={handleCfPasswordFocus}
            onChangeText={setCfPassword}
            placeholder='Confirm Password'
            placeholderTextColor='gray'
            style={[
              styles.input,
              CfpasswordFocused && { borderColor: 'cyan' },
              CfpasswordError && { borderColor: 'red' },
            ]}
          />
          <Text style={styles.errorText}>{errCfPass}</Text>

          <CustomButton
            title='Register'
            onPress={checkInputs}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text onPress={() => { navigation.navigate('Login') }} style={{ fontStyle: 'italic', marginTop: 10 }}>Do you have an account? <Text style={{ color: 'black', fontWeight: 'bold', fontStyle: 'italic' }}>Sign In</Text></Text>
        </View>
      </View>
    </View>
  )
}

export default Register

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
    padding: 4,
    borderRadius: 6,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
    // margin:20
  },
  btnWith: {
    flexDirection: 'row',
    // alignItems:'center',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    fontWeight: 'bold'
  }
})
