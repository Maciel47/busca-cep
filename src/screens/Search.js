import * as React from 'react';
import { 
  View, 
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  FlatList
 } from 'react-native';


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: '',
      item:{
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        ibge: '',
        ddd: ''
      }
    }
  }

  searchCep() {
    fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`)    
    .then(response => response.json())
    .then(data => {
      this.setState({
        item: data
      })
    })
    .catch(error => {
      return console.error(error);
    });
  }
  render () {
    return (
      <View>
          <TextInput
            style={styles.input}
            placeholder="Digite o CEP aqui"
            inputMode={'numeric'}
            keyboardType='numeric'
            onChangeText={(cep) => this.setState({cep: cep})}
            value={this.state.cep}
            maxLength={8}
          />    
          <TouchableOpacity 
            style={styles.buttonLayout}
            onPress={() => this.searchCep()}>
            <Text style={ styles.textButton }>BUSCAR</Text>
          </TouchableOpacity>
          {
            this.state.item.localidade ? 
            <View style={styles.itemList}>
            <Text style={ styles.text }>Resultado: </Text>
              <Text style={styles.itemList}>
                Rua: {this.state.item.logradouro}
              </Text> 
              <Text style={styles.itemList}>
                Complemento: {this.state.item.complemento}
              </Text>
              <Text style={styles.itemList}>
                Bairro: {this.state.item.bairro}
              </Text>
              <Text style={styles.itemList}>
                Cidade: {this.state.item.localidade}
              </Text>
              <Text style={styles.itemList}>
                Estado: {this.state.item.uf}
              </Text>
              <Text style={styles.itemList}>
                Código do munícipio (IBGE): {this.state.item.ibge}
              </Text>
              <Text style={styles.itemList}>
                DDD: {this.state.item.ddd}
              </Text>
          </View>: null
          }
        </View>
    );
    
  }
}



export default function Search () {
  return (
    <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'position'}>
        <View style={styles.logoSpace}>
          <View style={styles.sections}>
            <Text style={ styles.text }>Buscar CEP</Text>
          </View>
          <Results/>
          <View style={styles.sections}>
          </View>
        </View>
        </KeyboardAvoidingView>
      </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight || 0,
    },
    logoSpace: {
      flex: 1,
      marginTop: '50%'
    },
    sections: {
      flex: 0.1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionList: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
    },
    buttonLayout: {
      alignItems: 'center',
      alignContent: 'center',
      marginTop: 10,
      marginBottom: 30,
      backgroundColor: "#999FEC"
    },
    textButton: {
      fontSize: 20,
      padding: 15,
      color: "#FFF"
    },
    input: {
      backgroundColor: '#FFF',
      width: 300,
      height: '18%',
      padding: 3,
      marginTop: 15,
      marginBottom: 15,
      fontSize: 25,
      borderRadius: 10,
      borderBottomWidth: 0.5,
    },
    itemList: {
      color: 'white',
      fontSize: 25,
      alignItems: 'center',
      alignContent: 'center',
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: "#999FEC"
    }
  });