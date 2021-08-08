import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Home } from "../Home"; 
import { SignIn } from "../SignIn";
import { Class } from "../Class";
import { ClassActvity } from "../ClassActvity";
import { ClassHome } from "../ClassHome";
import { ClassNotas } from "../ClassNotas";
import { ClassPeople } from "../ClassPeople";
import { RelatorioAct } from "../RelatorioAct";
import { RelatorioActNota } from "../RelatorioActNota";
import { RelatorioActSub } from "../RelatorioActSub";
import { RelatorioAluno } from "../RelatorioPeople";


const {Navigator, Screen} = createNativeStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator>
            <Screen 
            name="SignIn" component ={SignIn}
            />
             <Screen
            name="Home" component ={Home}
            />
             <Screen
            name="Class" component ={Class}
            />
            <Screen
            name="ClassHome" component ={ClassHome}
            />
            <Screen
            name="ClassPeople" component ={ClassPeople}
            />
            <Screen
            name="ClassActvity" component ={ClassActvity}
            />
            <Screen
            name="ClassNotas" component ={ClassNotas}
            />
            <Screen
            name="RelatorioAct" component ={RelatorioAct}
            />
             <Screen
            name="RelatorioActNota" component ={RelatorioActNota}
            />
             <Screen
            name="RelatorioActSub" component ={RelatorioActSub}
            />
             <Screen
            name="RelatorioPeople" component ={RelatorioAluno}
            />
        </Navigator>
    );
}