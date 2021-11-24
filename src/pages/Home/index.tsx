import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import Watering from '../../assets/watering.png';
import {useNavigation } from '@react-navigation/native';
import {styles} from './styles'
import { ButtonNext } from '../../components/ButtonNext';



    export function Home() { 



    return (
     
            
        <View style={styles.container}>
            <Text style ={styles.textHeader}>
                Gerencia {`\n`}
                suas plantas de{`\n`}
                forma facil!
            </Text>
            
            <Image source={Watering}/>
            <Text style ={styles.textBottom}>
            Nao esqueca mais de regar suas{`\n`}
            plantas. Nos cuidamos de lembrar voce{`\n`}
            sempre que precisar.           
            </Text>
            <ButtonNext title=">"
            activeOpacity={0.7}
            disabled={false}
  

            />
        


        </View>
    )
      
}
