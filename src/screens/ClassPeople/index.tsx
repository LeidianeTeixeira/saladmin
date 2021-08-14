import React, {useEffect, useState} from "react";
import { View, StatusBar, TouchableOpacity,FlatList} from "react-native";
import { styles } from './styles';
import { Appbar, Card,Text, Button } from 'react-native-paper';
import Cards from '../Components/Cards';
import { classroomApi } from "../../services/classroomApi";
import { useAuth } from "../../hooks/auth";

type NavigationProp ={
    navigation: any;
}

async function listCourses(token: string) {
	classroomApi.defaults.headers.authorization = `Bearer ${token}`;
	const res = await classroomApi.get('/v1/courses');
	return res.data.courses;
}

type CourseData = {
	//name: string,
    id: string,
	key: string
}


async function liststudent(token: string, id:string) {
	classroomApi.defaults.headers.authorization = `Bearer ${token}`;
	const res = await classroomApi.get(`/v1/courses ${id}/students`);
	return res.data.courses;
}

type StudentData = {
	name: string,
    id: string,
	key: string
}

export function ClassPeople({navigation}:NavigationProp){
    const { user } = useAuth();
    const [items, setItems] = useState<CourseData[]>([]);
    const [aluno, setAluno] = useState<StudentData[]>([]);

    /*useEffect(() => {
		async function getItems() {
			try {
				let course = new Array<CourseData>(); 
				const data = await listCourses(user.token);
				for (let i=0;i<data.length;i++) {
					const list = JSON.parse(JSON.stringify(data[i]));
					course.push({ 
						//name: list.name,
                        id: list.id,
						key: String(i),
					});

				}
				setItems(course);
                
			} catch (error) {
				alert("Ocorreu um erro ao buscar os items " + error.response.data.error.message);
			}
		}
		getItems();
	}, []);

    useEffect(() => {
		async function getAluno() {
			try {
				let student = new Array<StudentData>(); 
				const data = await liststudent(user.token,'378168351496');
				for (let i=0;i<data.length;i++) {
					const list = JSON.parse(JSON.stringify(data[i]));
					student.push({ 
						name: list.name,
                        id: list.id,
						key: String(i),
					});

				}
				setAluno(student);
                
			} catch (error) {
				alert("Ocorreu um erro ao buscar os items " + error.response.data.error.message);
			}
		}
		getAluno();
	}, []);*/

    
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
