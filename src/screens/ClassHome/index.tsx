import React, {useState} from "react";
import { View, StatusBar, TouchableOpacity,FlatList} from "react-native";
import { styles } from './styles';
import { Appbar, BottomNavigation, Text, Button } from 'react-native-paper';
import Cards from '../Components/Cards';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClassActvity } from "../ClassActvity";
import { ClassNotas } from "../ClassNotas";
import { classroomApi } from "../../services/classroomApi";
import { useAuth } from "../../hooks/auth";

type NavigationProp ={
    navigation: any;
    route: any;

}

type RouteProp ={
    route: any;
}

async function listCourses(token: string) {
	classroomApi.defaults.headers.authorization = `Bearer ${token}`;
	const res = await classroomApi.get('/v1/courses');
	return res.data.courses;
}

type CourseData = {
	name: string,
    id: string,
	key: string
}

type StudentData = {
	name: string,
    id: string,
	key: string
}

async function liststudent(token: string, id:string) {
	classroomApi.defaults.headers.authorization = `Bearer ${token}`;
	const res = await classroomApi.get(`/v1/courses ${id}`);
	return res.data.courses;
}

export function ClassHome({route, navigation}:NavigationProp){
    const [turmas,seTurmas] = useState([
        {id: '1', turma: 'Desenvolvimento para Ambientes Móveis (DAM)', prof: ' Prof. Leonardo Silva'},
    
    ])

    const {id, nome} = route.params;
    //const {id} = route.params?.id;
    //const {nome} = route.params?.nome;
    //const {id1} = navigation.getParam('id');
    //const {nome1} = navigation.getParam('nome');
    

    return(
        <View>
           <StatusBar barStyle="dark-content" backgroundColor='#FFF'/>
            
            
            <View style={styles.card}>
                <Text style={styles.titleCard}>{nome}</Text>
            </View>
              

            <View style={styles.menu}>
                <Button  style={styles.menuHome} onPress={() => {navigation.navigate('ClassHome',{id:id, nome:nome})}}>Home</Button>
                <Button  style={styles.menu} onPress={() =>{navigation.navigate('ClassPeople', {id:id, nome:nome})}}>Pessoas</Button>
                <Button  style={styles.menu} onPress={() => {navigation.navigate('ClassActvity', {id:id, nome:nome})}}>Atividades</Button>
                <Button  style={styles.menu} onPress={() => {navigation.navigate('ClassNotas',{id:id, nome:nome})}}>Notas</Button>
            </View>

            <View style={styles.cardDesc}>
                <Text style={styles.titleCard}>Descrição</Text>
                <Text style={styles.cardDescTex}>Turma destinada ao compartilhamento de materias, 
                    avaliações, atividades voltados para a disciplina de {nome}.</Text>
            </View>

        </View>
  );

}