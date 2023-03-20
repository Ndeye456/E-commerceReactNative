
import React, { useState } from 'react'
import { errormessage, formgroup, head1, head2, input, label, link, link2 } from '../components/formcss'
import { button1 } from '../components/CustomTextInput'
import { View } from 'react-native'
import { Image } from 'react-native'
import { Text } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'


const Login = ({navigation}) => {
  const [fdata, setFdata] = useState({
    email:'',
    password:''
  })

  const [errormsg, setErrormsg] = useState(null);

  const Sendtobackend =() => {
    //console.log(fdata);
    if(fdata.email ==''|| fdata.password=='')  {
      setErrormsg('All fields are required');
      return;
    }
    else{
      fetch('http://10.0.2.2:5000/api/users/login',{
        method : 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(fdata)
      })
      .then(res => res.json()).then(
        data => {
          //console.log(data);
          if(data.error) {
            setErrormsg(data.error);
          }
          else{
            alert('logged successfully');
            navigation.navigate('home')
          }
      }
      )
    }
  }
  return (
    <View style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.s1}>
            <Image style={styles.logo} source={require('../../Images/logo.png')}/>
            <Text style={styles.h1} onPress={() => navigation.navigate('splash')}>Used2, Inc</Text>
            <Text style={styles.small1}>Acheter et vendre en ligne</Text>
          </View>
          <View style={styles.s2}>
            <Text style={head1}>Connexion</Text>
            <Text style={head2}>Inscrivez-vous pour continuer</Text>
            {
            errormsg ? <Text style={errormessage}>{errormsg}</Text> : null
          }
            <View style={formgroup}>
              <Text style={label}>Email</Text>
              <TextInput style={input} placeholder="Etrer votre Email"
              onPress={() =>  setErrormsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, email: text })}
              />
            </View>
            <View style={formgroup}>
              <Text style={label}>Password</Text>
              <TextInput style={input} placeholder="Etrer votre password"
              secureTextEntry={true}

              onChangeText={(text) => setFdata({ ...fdata, password: text })}
              onPress={() =>  setErrormsg(null)}
              />
            </View>
            <View style={styles.fp}>
              <Text style={link}>Mot de passe oublier</Text>
            </View>
            <Text style={button1}
            onPress={() => {
              Sendtobackend();
            }}
            >Login</Text>
            <Text style={link2}>vous n'avez de compt?&nbsp;
              <Text style={link}
               onPress={() =>navigation.navigate('LocalMall')}>
              Creer un nouveaux compt
              </Text></Text>
          </View>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    display:'flex',
  },
  patternbg:{
    position:"absolute",
    top:0,
    width:'100%',
    height:"100%",
    zIndex:-1,
  },
  container1:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
  },
  s1:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:"40%",
  },
  small1:{
    color:'#000',
    fontSize:17,
  },
  h1:{
    fontSize:30,
    color:'#000',
  },
  s2: {
display:'flex',
backgroundColor:'#fff',
width:'100%',
height:'60%',
borderTopLeftRadius:30,
borderTopRightRadius:30,
padding:20,
  },
  formgroup:{
  display:'flex',
  flexDirection:'column',
  width:'100%',
  marginVertical:10,
  },
label:{
  fontSize:17,
  color:'#000',
  marginLeft:10,
  marginBottom:5,
},
input:{
  backgroundColor:'#FFB0CC',
  borderRadius:20,
  padding:10,
},
fp:{
  display:'flex',
  alignItems:'flex-end',
  marginHorizontal:10,
  marginVertical:5,
},
logo:{
  height:80,
  resizeMode:'contain',
}
})


