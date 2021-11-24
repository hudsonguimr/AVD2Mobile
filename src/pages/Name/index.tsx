import React from 'react';
import { Text, View} from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 



import {styles} from './styles'
import { TextInput } from 'react-native-gesture-handler';
import { ButtonConfirm } from '../../components/ButtonConfirm';

export function Name(){


    return (
        <View style={styles.container}>           
       
        <View style={styles.icon}>
        <Fontisto name="smiley" size={50} color="black" />             
        </View>
        <Text style={styles.txt}>Como podemos te chamar?</Text>   
        <View style={styles.input}>
            <TextInput placeholder="Digite seu nome"></TextInput>
        </View> 

         <ButtonConfirm title="Confirmar"
            activeOpacity={0.7}
            disabled={false}

            />   
        </View>
        
   
        
    )
      
}
