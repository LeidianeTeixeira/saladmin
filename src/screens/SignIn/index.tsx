import React from "react";
import{Text, View,TouchableOpacity, StatusBar} from 'react-native';
import { styles } from "./styles";
import {FontAwesome5} from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';

import * as Google from 'expo-auth-session/providers/google';
import{CLIENT_ID} from '../../config'

type NavigationProp ={
    navigation: any;
}

export function SignIn({navigation}: NavigationProp){

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: CLIENT_ID,
        iosClientId: '',
        androidClientId: '',
        webClientId: '',
    });
    
    React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
          console.log(authentication);
          navigation.navigate(
              'Class', 
              {
                  //token: JSON.stringify(authentication?.accessToken)
                  //token: authentication?.accessToken
                  token: authentication
              });
          }
    }, [response]);
    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor='#FFF'/>

            <FontAwesome5 name='user' size={32} color='#7F3DFF' style={styles.logo}/>

            <Text style={styles.logoText}>LOGIN</Text>

            <TextInput
                mode = 'outlined'
                placeholder= 'Email'
                style = {styles.input}
            />
            <TextInput
                style = {styles.input}
                mode = 'outlined'
                placeholder = 'Senha' 
                secureTextEntry
                right={<TextInput.Icon name="eye" color='#7F3DFF'/>}
            />

            <TouchableOpacity style={styles.loginButton} 
                onPress={()=>navigation.navigate('Class')}
                //disabled={!request}
                //onPress={() => {promptAsync();}}
                >
                <FontAwesome5 name='google' size={18} color='#FFF'/>
                <Text style={styles.loginText}> Entrar com o Google</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.forgotContainer}onPress={()=>{}}>
                <FontAwesome5 name='google' size={18} color='#7F3DFF'/>
                <Text style={styles.forgotText}> Acessar com outra conta Google</Text>
            </TouchableOpacity>
        </View>
        
    );
}