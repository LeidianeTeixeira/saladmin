import React, {useState} from "react";
import { View, StatusBar, TouchableOpacity,FlatList} from "react-native";
import { styles } from './styles';
import { Appbar, Text, Button, DataTable } from 'react-native-paper';


const optionsPerPage = [2, 3, 4];

type NavigationProp ={
    navigation: any;
}

export function ClassNotas({navigation}:NavigationProp){

    const [page, setPage] = React.useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);


    const [notas,setNotas] = useState([
        {id: '1', aluno: 'Leidia T.R', Atv1: 5, Atv2: 5, media: 5},
        {id: '2', aluno: 'Janina B. A', Atv1: 10, Atv2: 10, media: 5},
        {id: '3', aluno: 'Geovana R. T', Atv1: 8, Atv2: 8, media: 8},
        /*{id: '4', aluno: 'Carla T.', Atv1: 7, Atv2: 7, media: 7},
        {id: '4', aluno: 'Maria J. F', Atv1: 9, Atv2: 9, media: 9},*/
        
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
                <Button  style={styles.menu} onPress={() => {navigation.navigate('ClassPeople')}}>Pessoas</Button>
                <Button  style={styles.menu} onPress={() => {navigation.navigate('ClassActvity')}}>Atividades</Button>
                <Button  style={styles.menuNotas} onPress={() => {navigation.navigate('ClassNotas')}}>Notas</Button>
            </View>
    

            <DataTable>
                <DataTable.Header style={{borderBottomColor:'#12325'}}>
                    <DataTable.Title>Aluno</DataTable.Title>
                    <DataTable.Title numeric>Atv.1</DataTable.Title>
                    <DataTable.Title numeric>Atv.2</DataTable.Title>
                    <DataTable.Title numeric>Média</DataTable.Title>
                </DataTable.Header>
                
                <FlatList 
                    data={notas}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => (
                        <DataTable.Row style={{borderBottomColor:'#12325'}}>
                            <DataTable.Cell>{item.aluno}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.Atv1}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.Atv2}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.media}</DataTable.Cell>
                        </DataTable.Row>
                    )}
                 />

                <DataTable.Pagination
                    page={page}
                    numberOfPages={3}
                    onPageChange={(page) => setPage(page)}
                    label="1-2 of 6"
                    //optionsPerPage={optionsPerPage}
                    //itemsPerPage={itemsPerPage}
                    //setItemsPerPage={setItemsPerPage}
                    //showFastPagination
                    //optionsLabel={'Rows per page'}
                />
            </DataTable>

            <TouchableOpacity style={styles.relatorioButton}  onPress={() => {navigation.navigate('RelatorioActNota')}}>
                <Text style={styles.relatorioText}>RELATÓRIO</Text>
            </TouchableOpacity>

        </View>
    );
}