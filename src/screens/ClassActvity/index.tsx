import React, {useState} from "react";
import { View, StatusBar, TouchableOpacity,FlatList} from "react-native";
import { styles } from './styles';
import { Appbar, Text, Button } from 'react-native-paper';

type NavigationProp ={
    navigation: any;
    route: any;
}

export function ClassActvity({route,navigation}: NavigationProp){
    const {id, nome} = route.params;

    const [atividades,setAtividades] = useState([
        {id: '1', nome: 'Atividade 1', desc: 'Atividade Módulo VI Semana 1'},
        {id: '2', nome: 'Atividade 2', desc: 'Atividade Módulo VI Semana 2'},
        {id: '3', nome: 'Atividade 3', desc: 'Atividade Módulo VI Semana 3'},
        /*{id: '4', nome: 'Atividade 4', desc: 'Atividade Módulo VI Semana 4'},*/
        
    ])

    const [turmas,seTurmas] = useState([
        {id: '1', turma: 'Desenvolvimento para Ambientes Móveis (DAM)', prof: ' Prof. Leonardo Silva'},
    
    ])

    return(
        <View>
            <StatusBar barStyle="dark-content" backgroundColor='#FFF'/>
            
            <View style={styles.cardInit}>
                <Text style={styles.titleCard}>{nome}</Text>
            </View>


            <View style={styles.menu}>
                <Button  style={styles.menu} onPress={() => {navigation.navigate('ClassHome',{id:id, nome:nome})}}>Home</Button>
                <Button  style={styles.menu} onPress={() => {navigation.navigate('ClassPeople',{id:id, nome:nome})}}>Pessoas</Button>
                <Button  style={styles.menuAtv} onPress={() => {navigation.navigate('ClassActvity',{id:id, nome:nome})}}>Atividades</Button>
                <Button  style={styles.menu} onPress={() => {navigation.navigate('ClassNotas',{id:id, nome:nome})}}>Notas</Button>
            </View>

            <FlatList 
                data={atividades}
                keyExtractor={item=>item.id}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <Text style={styles.titleCard}>{item.nome}</Text>
                        <Text style={styles.descCard}>{item.desc}</Text>
                    </View>
                )}
            />

            <TouchableOpacity style={styles.relatorioButton} onPress={() => {navigation.navigate('RelatorioAct')}}>
                <Text style={styles.relatorioText}>RELATÓRIOS</Text>
            </TouchableOpacity>

        </View>
    );
}
