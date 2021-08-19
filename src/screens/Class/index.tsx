import React, {useEffect, useState} from "react";
import { View, Text, StatusBar, TouchableOpacity,FlatList} from "react-native";
import { styles } from "./styles";
import { Card, Avatar} from 'react-native-paper';

import {useAuth} from "../../hooks/auth"
import { classroomApi } from "../../services/classroomApi";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

type NavigationProp ={
    navigation: any;
}

async function listCourses(token: string) {
	classroomApi.defaults.headers.authorization = `Bearer ${token}`;
	const res = await classroomApi.get('/v1/courses');
	return res.data.courses;
}

type CourseData = {
	name: string,
    id: string
}

export function Class ({navigation}: NavigationProp) {
    const { user } = useAuth();
    const [items, setItems] = useState<CourseData[]>([]);

    useEffect(() => {
		async function getItems() {
			try {
				let course = new Array<CourseData>(); 
				const data = await listCourses(user.token);
				for (let i=0;i<data.length;i++) {
					const list = JSON.parse(JSON.stringify(data[i]));
					course.push({ 
						name: list.name,
                        id: list.id,
					});
				}
				setItems(course);
			} catch (error) {
				alert("Ocorreu um erro ao buscar os items " + error.response.data.error.message);
			}
		}
		getItems();
	}, []);

    return (
        <View>
            <StatusBar barStyle="dark-content" backgroundColor='#FFF'/>
            
            <Card.Title style={styles.turmasTitle}
                title="Turmas"
                left={(props) => <Avatar.Icon {...props} icon="home"/>}
            />

            <FlatList 
                data={items}
                //keyExtractor={item=>item.id}
                renderItem={({item}) => (
                <TouchableOpacity style= {styles.cardturma}onPress={()=>navigation.navigate('ClassHome', {id: item.id, nome:item.name})}>
                    <View style={styles.card}>
                        <Text style={styles.titleCard}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
                )}
            />
        </View>

    );
}