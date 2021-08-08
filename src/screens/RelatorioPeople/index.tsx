import React, {useState} from "react";
import { View, StatusBar, TouchableOpacity,FlatList} from "react-native";
import { styles } from './styles';
import { Appbar, Text, Button, DataTable, TextInput } from 'react-native-paper';


const optionsPerPage = [2, 3, 4];

type NavigationProp ={
    navigation: any;
}
export function RelatorioAluno({navigation}:NavigationProp){

    const [page, setPage] = React.useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);


    const [notas,setNotas] = useState([
        {id: '1', aluno: 'Leidia T.R', notatot: 45, Atvna: 1, Atvsa: 0},
        {id: '2', aluno: 'Janina B. A', notatot: 50, Atvna: 0, Atvsa: 0},
        {id: '3', aluno: 'Geovana R. T', notatot: 20, Atvna: 2, Atvsa: 1},
        
    ])

    const [turmas,seTurmas] = useState([
        {id: '1', turma: 'Desenvolvimento para Ambientes Móveis (DAM)', prof: ' Prof. Leonardo Silva'},
    
    ])

    return(
        <View>
            <StatusBar barStyle="dark-content" backgroundColor='#FFF'/>

            <Text style= {styles.titleCard}>Aluno</Text>
            <TextInput
                mode = 'outlined'
                placeholder= 'Digite o nome do aluno'
                style = {styles.input}
            />
            <Text style= {styles.titleCard}>Período</Text>
            <View style = {styles.datas}>
            <TextInput
                mode = 'outlined'
                placeholder= 'Data inicial'
                style = {styles.inputData}
            />
            <TextInput
                mode = 'outlined'
                placeholder= 'Data final'
                style = {styles.inputData}
            />
            </View>

            <TouchableOpacity style={styles.gerarButton}>
                <Text style={styles.gerarText}>Gerar Relatório</Text>
            </TouchableOpacity>

            <Text style= {styles.titleCard}>Relatório - Situação do aluno</Text>
            <DataTable>
                <DataTable.Header style={{borderBottomColor:'#12325'}}>
                    <DataTable.Title>Aluno</DataTable.Title>
                    <DataTable.Title numeric>Nota Total</DataTable.Title>
                    <DataTable.Title numeric>Atv não Ent.</DataTable.Title>
                    <DataTable.Title numeric>Atv.sem Arq.</DataTable.Title>
                </DataTable.Header>
                
                <FlatList 
                    data={notas}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => (
                        <DataTable.Row style={{borderBottomColor:'#12325'}}>
                            <DataTable.Cell>{item.aluno}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.notatot}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.Atvna}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.Atvsa}</DataTable.Cell>
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

            <TouchableOpacity style={styles.relatorioButton}>
                <Text style={styles.relatorioText}>GERAR TABELA</Text>
            </TouchableOpacity>

        </View>
    );
}