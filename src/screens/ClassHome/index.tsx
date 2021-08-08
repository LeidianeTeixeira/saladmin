import React, {useState} from "react";
import { View, StatusBar, TouchableOpacity,FlatList} from "react-native";
import { styles } from './styles';
import { Appbar, BottomNavigation, Text, Button } from 'react-native-paper';
import Cards from '../Components/Cards';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClassActvity } from "../ClassActvity";
import { ClassNotas } from "../ClassNotas";

type NavigationProp ={
    navigation: any;
}

export function ClassHome({navigation}:NavigationProp){
    const [turmas,seTurmas] = useState([
        {id: '1', turma: 'Desenvolvimento para Ambientes Móveis (DAM)', prof: ' Prof. Leonardo Silva'},
    
    ])

    return(
        <View>
           <StatusBar barStyle="dark-content" backgroundColor='#FFF'/>
            
            <FlatList 
                data={turmas}
                keyExtractor={item=>item.id}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <Text style={styles.titleCard}>{item.turma}</Text>
                    </View>
                )}
            />

            <View style={styles.menu}>
                <Button  style={styles.menuHome} onPress={() => {navigation.navigate('ClassHome')}}>Home</Button>
                <Button  style={styles.menu} onPress={() =>{navigation.navigate('ClassPeople')}}>Pessoas</Button>
                <Button  style={styles.menu} onPress={() => {navigation.navigate('ClassActvity')}}>Atividades</Button>
                <Button  style={styles.menu} onPress={() => {navigation.navigate('ClassNotas')}}>Notas</Button>
            </View>

            <View style={styles.cardDesc}>
                <Text style={styles.titleCard}>Descrição</Text>
                <Text style={styles.cardDescTex}>Turma destinada aoa compartilhamento de materias, 
                    avaliações, atividades voltados para a disciplina de 
                    Desenvolvimento para Ambientes Móveis.</Text>
            </View>

        </View>
  );

}