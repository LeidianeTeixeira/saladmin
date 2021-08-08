import React, {useState} from "react";
import { View, StatusBar, TouchableOpacity,FlatList} from "react-native";
import { styles } from './styles';
import { Appbar, Text, Button, DataTable, TextInput } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const optionsPerPage = [2, 3, 4];

type NavigationProp ={
    navigation: any;
}

export function RelatorioActNota({navigation}:NavigationProp){

    const [page, setPage] = React.useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    const [selectedValue, setSelectedValue] = useState("Atividades com atraso");

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);


    const [notas,setNotas] = useState([
        {id: '1', aluno: 'Leidia T.R', top: 'Interface', desc: 'Atv. Revisão', valor: 10, nota: 5},
        {id: '2', aluno: 'Janina B. A', top: 'Flat List', desc: 'Atv. Avaliativa', valor: 10, nota: 5},
        {id: '3', aluno: 'Geovana R. T', top: 'React', desc: 'Atv. Avaliativa', valor: 10, nota: 5},
        
    ])

    const [turmas,seTurmas] = useState([
        {id: '1', turma: 'Desenvolvimento para Ambientes Móveis (DAM)', prof: ' Prof. Leonardo Silva'},
    
    ])

    return(
        <View>
            <StatusBar barStyle="dark-content" backgroundColor='#FFF'/>

            <Text style= {styles.titleCard}>Tipo de relatório</Text>
            <View style={styles.container}>
                <Picker
                    itemStyle= {styles.caixa}
                    mode={'dropdown'}
                    selectedValue={selectedValue}
                    style={styles.caixa}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >

                <Picker.Item label="Nota abaixo 60%" value="nota" />
                </Picker>
            </View>

            
            <Text style= {styles.titleCard}>Atividades</Text>
            <View style={styles.container}>
                <Picker
                    mode={'dropdown'}
                    selectedValue={selectedValue}
                    style={styles.caixa}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Todas" value="atv1" />
                    <Picker.Item label="Atividade 1" value="atv1" />
                    <Picker.Item label="Atividade 2" value="atv2" />
                    <Picker.Item label="Atividade 3" value="atv3" />
                </Picker>
            </View>
            

            <TouchableOpacity style={styles.gerarButton}>
                <Text style={styles.gerarText}>Gerar Relatório </Text>
            </TouchableOpacity>

            <Text style= {styles.titleCard}>Relatório - Nota menor que a média </Text>
            <DataTable>
                <DataTable.Header style={{borderBottomColor:'#12325'}}>
                    <DataTable.Title>Tópico</DataTable.Title>
                    <DataTable.Title>Descrição da Atv.</DataTable.Title>
                    <DataTable.Title> Aluno</DataTable.Title>
                    <DataTable.Title numeric>Valor</DataTable.Title>
                    <DataTable.Title numeric>Nota</DataTable.Title>
                </DataTable.Header>
                
                <FlatList 
                    data={notas}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => (
                        <DataTable.Row style={{borderBottomColor:'#12325'}}>
                            <DataTable.Cell>{item.top}</DataTable.Cell>
                            <DataTable.Cell>{item.desc}</DataTable.Cell>
                            <DataTable.Cell>{item.aluno}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.valor}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.nota}</DataTable.Cell> 
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