//Styles
import { estilos } from "../../styles/StylesHome";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Pressable } from 'react-native';

//Componentes Partials
import Textos from "../partials/Text";
import InputsComponent from "../partials/Inputs";
import Pressavel from "../partials/Pressable";

export default function Home() {

//Variáveis
const [mensagem, setMensagem] = useState("")


//Funções
atualizarMensagem = () => {
  setMensagem("Pierre")
}
  return (
    <View style={estilos.container}>
    <Textos txt={mensagem}/>
    <Pressavel PressFunc={atualizarMensagem} txt="Me aperte"/>
    </View>
  );
}
