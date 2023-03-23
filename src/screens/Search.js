import * as React from 'react';
import { 
  View, 
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList, 
  Platform
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
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'position'}>
        <View style={styles.logoSpace}>
          <View style={styles.sections}>
            <Text style={ styles.text }>Buscar CEP</Text>
          </View>
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
            <Text style={ styles.textButton }>BUSCAR</Text>
          </TouchableOpacity>
          <View style={styles.sections}>
            <Text style={ styles.text }>Resultado: </Text>
          </View>
          <View style={styles.sectionList}>
            <FlatList
              data={this.state.cep}
              renderItem={({item}) => <item title={item.title} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        </KeyboardAvoidingView>
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
      height: '5%',
      padding: 3,
      marginTop: 15,
      marginBottom: 15,
      fontSize: 25,
      borderRadius: 10,
      borderBottomWidth: 0.5,
    }
  });