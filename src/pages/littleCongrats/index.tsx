import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


import {styles} from './styles'
import { TextInput } from 'react-native-gesture-handler';
import { ButtonConfirm } from '../../components/ButtonConfirm';


export function littleCongrats(){


    return (
        
        <View style={styles.container}>

            
       
        <View style={styles.icon}>
        <Fontisto name="smiley" size={50} color="black" />             
        </View>
        <Text style={styles.txt1}>Prontinho</Text> 

         <ButtonConfirm title="Confirmar"
            activeOpacity={0.7}
            disabled={false}
  

            />   
        </View>
        
    )
      
}
