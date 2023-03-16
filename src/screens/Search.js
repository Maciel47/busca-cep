import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Search() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Buscar CEP</Text>
        <TextInput>Digite o CEP aqui</TextInput>
        <Text>Resultado: </Text>
      </View>
    );
  }