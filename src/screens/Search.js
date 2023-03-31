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
  ActivityIndicator
 } from 'react-native';

export default class Results extends React.Component {
  state = {
    loading: false,
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
  searchCep() {
    this.setState ({
      loading: true,
      item: {
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        ibge: '',
        ddd: ''
      }
    });
    fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`)    
    .then(response => response.json())
    .then(data => {
      this.setState({
        loading: false,
        item: data
      })
    })
    .catch(error => {
      this.setState({
        loading: false,
        item: data
      })
      return console.error(error);
    });
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={ styles.text }>Buscar CEP</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'position'}>
          <TextInput
            style={styles.input}
            placeholder="Digite o CEP aqui"
            inputMode={'numeric'}
            keyboardType='numeric'
            onChangeText={(cep) => this.setState({cep: cep})}
            value={this.state.cep}
            cursorColor={'#999FEC'}
            maxLength={8}
          />
          <TouchableOpacity 
            style={styles.buttonLayout}
            onPress={() => this.searchCep()}>
            <Text style={ styles.textButton }>BUSCAR</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView> 
          {
            this.state.item.localidade ? 
            <View style={styles.container}>
              <Text style={ styles.text }>Resultado: </Text>
              <View style={styles.itemList}>
                <Text style={styles.textList}>
                  Rua: {this.state.item.logradouro}
                </Text>
                <Text style={styles.textList}>
                  Complemento: {this.state.item.complemento ? this.state.item.complemento : 
                  <Text style={styles.itemList}>
                    Não consta
                  </Text>}
                </Text>
                <Text style={styles.textList}>
                  Bairro: {this.state.item.bairro}
                </Text>
                <Text style={styles.textList}>
                  Cidade: {this.state.item.localidade}
                </Text>
                <Text style={styles.textList}>
                  Estado: {this.state.item.uf}
                </Text>
                <Text style={styles.textList}>
                  Código do munícipio (IBGE): {this.state.item.ibge}
                </Text>
                <Text style={styles.textList}>
                  DDD: {this.state.item.ddd}
                </Text>
              </View>
          </View> : (this.state.loading ? <ActivityIndicator size='large'/> : null)
          }
        </View>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  text: {
    fontSize: 25,
  },
  input: {
    backgroundColor: '#FFF',
    width: 300,
    height: '20%',
    padding: 3,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 25,
    borderRadius: 10,
    borderBottomWidth: 0.5,
  },
  buttonLayout: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: "#999FEC"
  },
  textButton: {
    fontSize: 20,
    padding: 15,
    color: "#FFF"
  },
  itemList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 50,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#999FEC",
    width: '98%'
  },
  titleList: {
    fontSize: 28,
    color: '#FFF',
    alignItems: 'center',
    backgroundColor: '#E59BE4'
  },
  textList: {
    fontSize: 25,
    color: '#FFF',
    alignItems: 'center'
  }
});