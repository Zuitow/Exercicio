//Styles
import { estilos } from "../../styles/StylesHome";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Pressable } from 'react-native';


//Componentes Partials
import Textos from "../partials/Text";

export default function Home() {

//Variáveis
const [mensagem, setMensagem] = useState("")


//Funções
atualizarMensagem = {
  setMensagem("")
}
  return (
    <View style={estilos.container}>
    <Textos mensagem="Teste"/>
      <StatusBar style="auto" />
    </View>
  );
}
