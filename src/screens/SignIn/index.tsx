import React,{useContext, useReducer} from "react";
import{Text, View,TouchableOpacity, StatusBar} from 'react-native';
import { styles } from "./styles";
import {FontAwesome5} from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';

import * as AuthSession from 'expo-auth-session';
import{CLIENT_ID} from '../../config'
import { useAuth } from "../../hooks/auth";
import { Alert } from "react-native";

type NavigationProp ={
    navigation: any;
}

export function SignIn({navigation}: NavigationProp){

    const {signIn, loading } = useAuth();

    //console.log(User);
    
    async function handleSignIn(){
        try {
            await signIn();
            navigation.navigate('Class');
        } catch (error) {
            Alert.alert(error);
        }
    }
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
                //onPress={()=>navigation.navigate('Class')}
                disabled={loading}
                onPress={() => {handleSignIn();}}
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