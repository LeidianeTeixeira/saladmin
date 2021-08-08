import React, {FunctionComponent} from "react";
import {StyleSheet, View, Text} from 'react-native';

export default function Cards(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text>{props.children}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        height:80,
        borderRadius: 6,
        elevation:5,
        backgroundColor: '#FFF',
        shadowOffset: {width: 2, height:2},
        shadowColor: '#7F3DFF',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        marginHorizontal: 6,
        marginVertical: 6,
        //alignItems: 'center',
        borderColor: '#7F3DFF',
        justifyContent:'center',
        borderWidth:0.5,
    },

    cardContent:{
        marginHorizontal: 6,
        marginVertical: 6,
        justifyContent:'center',
        backgroundColor: '#FFF',

    }

})
