import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import {Button} from 'react-native-paper';

import { styles } from "./styles";

export function Home () {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor='#7F3DFF'/>
            <Text style={styles.title}>Conexão Class</Text>
        </View>

    );
}

