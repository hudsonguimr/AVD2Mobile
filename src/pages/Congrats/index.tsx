import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


import {styles} from './styles'
import { TextInput } from 'react-native-gesture-handler';
import { ButtonStart } from '../../components/ButtonStart';


export function Congrats(){


    return (
        
        <View style={styles.container}>

            
       
        <View style={styles.icon}>
        <Fontisto name="smiley" size={50} color="black" />             
        </View>
        <Text style={styles.txt1}>Prontinho</Text> 
        <Text style={styles.txt2}>Agora vamos comecar a cuidar das suas {`\n`}plantinhas com muito cuidado.</Text> 
        

         <ButtonStart title="Comecar"
            activeOpacity={0.7}
            disabled={false}
  

            />   
        </View>
        
    )
      
}
