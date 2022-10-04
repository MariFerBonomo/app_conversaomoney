
import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Alert } from "react-native-web";


export default function Home (){

    let [valor1, setValor1] = useState();    
    let [valor2, setValor2] = useState();
    //let [total, setTotal] = useState();

    function CalcularTotal(){

        let resultado = parseFloat(valor2)/ parseFloat(valor1);
        //setTotal(resultado);

        alert("O Resultado total: " + resultado);
    }


    return(
        <View style= {styles.container}>
            <Text style= {styles.titulo}><i>App Convert Money</i></Text>

            <TextInput onChangeText={setValor1} style= {styles.campo} placeholder="Digite a cotação do Dolar"/>

            <TextInput onChangeText={setValor2} style= {styles.campo} placeholder="Digite o valor para a conversão"/>

            <TouchableOpacity style= {styles.botao} onPress={CalcularTotal}>
                <Text style= {styles.botaoTexto}><i>Calcular</i></Text>
            </TouchableOpacity>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#99FF99',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',        
    },

    titulo:{
        fontSize:30,
        color:'#000',
        fontWeight:'bold',
        marginBottom: 40,
    },

    campo:{
        backgroundColor:'#FFF',
        fontSize: 18,
        padding: 8,
        marginTop: 10,
        width:300,
        borderRadius: 10,
        textAlign: 'center',
        
    },

    botao:{
        backgroundColor:'#FFFF66',
        alignItems: 'center',
        padding: 15,
        borderRadius:7,
        marginTop: 20,
        widht: 250
    },

    botaoTexto: {
        color: "",
        fontSize:17,
        fontWeight: "700",

    }
});
