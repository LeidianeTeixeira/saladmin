import React, {useState} from "react";
import { View, Text, StatusBar, TouchableOpacity,FlatList} from "react-native";
import { styles } from "./styles";
import { Appbar, Card, Avatar, IconButton } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";

type NavigationProp ={
    navigation: any;
}

export function Class ({navigation}: NavigationProp) {
    const [turmas,seTurmas] = useState([
        {id: '1', turma: 'Desenvolvimento para Ambientes Móveis (DAM)',prof: ' Prof. Leonardo Silva'},
        {id: '2', turma: 'TCC I e II', prof:'Prof. Alison Zille'},
        {id: '3', turma:'Tópicos I', prof: 'Prof. Patricia Lucas'},
        {id: '4', turma:'Segurança e Auditoria de SI', prof: 'Prof. Reginaldo'},
       
    ])
    return (
        <View>
            <StatusBar barStyle="dark-content" backgroundColor='#FFF'/>
            
            <Card.Title style={styles.turmasTitle}
                title="Turmas"
                left={(props) => <Avatar.Icon {...props} icon="home"/>}
            />

            <FlatList 
                data={turmas}
                keyExtractor={item=>item.id}
                renderItem={({item}) => (
                <TouchableOpacity style= {styles.cardturma}onPress={()=>navigation.navigate('ClassHome')}>
                    <View style={styles.card}>
                        <Text style={styles.titleCard}>{item.turma}</Text>
                        <Text style={styles.descCard}>{item.prof}</Text>
                    </View>
                </TouchableOpacity>
                )}
            />
        </View>

    );
}