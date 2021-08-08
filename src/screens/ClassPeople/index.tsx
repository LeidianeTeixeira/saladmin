import React, {useState} from "react";
import { View, StatusBar, TouchableOpacity,FlatList} from "react-native";
import { styles } from './styles';
import { Appbar, Card,Text, Button } from 'react-native-paper';
import Cards from '../Components/Cards';

type NavigationProp ={
    navigation: any;
}

export function ClassPeople({navigation}:NavigationProp){

    const [alunos,setAlunos] = useState([
        {id: '1', nome: 'Leidiane Teixeira dos Reis'},
        {id: '2', nome: 'Janina Barbosa de Aguilar'},
        {id: '3', nome: 'Rafaela Goveia'},
    ])

    const [professor,setProf] = useState([
        {id: '1', nome: 'Leonardo Silva'},
    ])

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
                    <View style={styles.cardInit}>
                        <Text style={styles.titleCard}>{item.turma}</Text>
                    </View>
                )}
            />

            <View style={styles.menu}>
                <Button  style={styles.menu} onPress={() => {navigation.navigate('ClassHome')}}>Home</Button>
                <Button  style={styles.menuPessoas} onPress={() => {navigation.navigate('ClassPeople')}}>Pessoas</Button>
                <Button  style={styles.menu} onPress={() => {navigation.navigate('ClassActvity')}}>Atividades</Button>
                <Button  style={styles.menu} onPress={() => {navigation.navigate('ClassNotas')}}>Notas</Button>
            </View>

            
            <Card.Title style={styles.peopleTitle}
                title="Professores"
            />

            <FlatList 
                data={professor}
                keyExtractor={item=>item.id}
                renderItem={({item}) => (
                    <View>
                        <Text style={styles.titleList}>{item.nome}</Text>
                    </View>
                )}
            />

            <Card.Title style={styles.peopleTitle}
                title="Alunos"
            />

            <FlatList 
                data={alunos}
                keyExtractor={item=>item.id}
                renderItem={({item}) => (
                    <View>
                        <Text style={styles.titleList}>{item.nome}</Text>
                    </View>
                )}
            />

            <TouchableOpacity style={styles.relatorioButton}onPress={() => {navigation.navigate('RelatorioPeople')}}>
                <Text style={styles.relatorioText}>RELATÓRIO</Text>
            </TouchableOpacity>

        </View>
    );
}
