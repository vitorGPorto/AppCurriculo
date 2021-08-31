/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assests/foto.png'
import Card from './components/Card'

const App = () => {
  
  function handleRedesSocial(rede_social){

    switch(rede_social){

      case 'linkedin':
      Alert.alert('https://www.linkedin.com/in/vitor-porto-8340bb173/')
      break
      case 'instagram':
      Alert.alert('https://www.instagram.com/m0rcegao/')
      break
      case 'github':
      Alert.alert('https://github.com/vitorGPorto')
      break


    }
  }

  return (
    <>
     <View style={style.page}>
        <View style={style.container_cabecalho}>
            <Image source   ={foto} style={style.foto}/>
            <Text style={style.Name} >VITOR PORTO</Text>
            <Text style={style.func}>Desenvolvedor Mobile</Text>
          <View style={style.redes_socias}>
            <TouchableOpacity onPress={()=>handleRedesSocial('github')}>
                  <Icon name="github" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleRedesSocial('linkedin')} >
                  <Icon name="linkedin" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleRedesSocial('instagram')} >
                  <Icon name="instagram" size={30}/>
            </TouchableOpacity>
              
             
            
            
          </View>
       </View >

       <Card titulo="Experincia Profissional"> 
              <Text style={style.card_container_text} >- ANÁLISTA TESTER</Text>
              <Text style={style.card_container_text} >- ESTAGIÁRIO DESENVOLVIMENTO MOBILE</Text>
       </Card>

         <Card titulo="Formação Academica" >
              <Text style={style.card_container_text} > -TÉCNICO EM INFORMÁTICA, IFMG</Text>
              <Text style={style.card_container_text} > -GRADUAÇÃO EM CIÊNCIAS DA COMPUTAÇÃO, UNIBH
              </Text>
         </Card>
      
    </View>

    </>
  );
};


const style = StyleSheet.create({
   page:{
     backgroundColor: '#E7E7E7',
     flex: 1, 
     alignItems: 'center',
   },
   container_cabecalho:{
    
    alignItems: 'center',
    justifyContent: 'center',


  },
   foto:{
     width: 100,
     height:100,
     borderRadius:125,
     marginTop:20

   },
   Name:{
    fontSize:26,
    fontWeight: 'bold',
    marginTop:10,

   },
   func:{
     color:'#939393',
    
    
   },
   redes_socias:{
     flexDirection: 'row',
     justifyContent: 'space-between',
     width: '40%',
     marginTop: 20
   },
   card_container_text:{
    color:'#939393',
    marginBottom: 10
   },
})


export default App;
