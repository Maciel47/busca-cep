import * as React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TextInput,
  TouchableOpacity 
 } from 'react-native';


export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: '',
      item:[],
    }
  }

  searchCep() {
    fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`)
    .then(async (response) => {
      let data = await response.json();
      console.warn(data);
      }) 
    .catch((error) => {
      return console.error(error);
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={ styles.text }>Buscar CEP</Text>
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
          onPress={()=> this.searchCep()}>
          <View>
            <Text style={ styles.textButton }>BUSCAR</Text>
          </View>
        </TouchableOpacity>
        <Text style={ styles.text }>Resultado: </Text>
      </View>    
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20
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
      width: '90%',
      height: '5%',
      padding: 3,
      marginTop: 15,
      marginBottom: 15,
      fontSize: 25,
      borderRadius: 10,
      borderBottomWidth: 0.5,
    }
  });