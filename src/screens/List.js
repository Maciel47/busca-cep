import * as React from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
// import conn from '../database/conn';
import { getDatabase, ref, onValue } from 'firebase/database';

const db = getDatabase();
const infoAddress = ref(db, 'address/');
  onValue(infoAddress, (snapshot) => {
    const data = snapshot.val();
    
    // updateAddress(postElement, data);
  })

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
  );
  
  const App = () => {
    const [selectedId, setSelectedId] = React.useState();
  
    const renderItem = ({item}) => {
      const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
      const color = item.id === selectedId ? 'white' : 'black';
  
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
        />
      );
    };
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={null}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  
  export default App;

// export default function List () {
//     return (
//       <View style={styles.container}>
//         <Text style={ styles.text }>CEP's buscados</Text>
//       </View>
//     );
//   }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     text: {
//       fontSize: 20
//     }
//   });

  // export default class List extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.state={
    //       list:[],
    //     }
    //   }
    //   componentDidMount(){
    //     app.database().ref().on('value', (snapshot) => {
    //       var li = []
    //       snapshot.forEach((child) => {
    //         li.push({
    //           key: child.key,
    //           bairro: child.val().bairro,
    //           cep: child.val().cep,
    //           complemento: child.val().complemento,
    //           ddd: child.val().ddd,
    //           ibge: child.val().ibge,
    //           localidade: child.val().localidade,
    //           logradouro: child.val().logradouro,
    //           uf: child.val().uf,
    //         })
    //       })
    //       this.setState({list:li})
    //     })
    //   }
    //   render() {
    //     return (
    //       <View style={{flex:1, alignSelf:'center', justifyContent:'center'}}>
    //        <FlatList style={{width:'100%'}}
    //           data={this.state.list}
    //           keyExtractor={(item)=>item.key}
    //           renderItem={({item})=>{
    //              return(
    //                 <View>
    //                   <Text>
    //                     {item.bairro}  
    //                     {item.cep}
    //                     {item.complemento}
    //                     {item.ddd}
    //                     {item.ibge}
    //                     {item.localidade}
    //                     {item.logradouro}
    //                     {item.uf}
    //                   </Text>
    //                 </View>)
    //              }}/>
    //      </View>
    //     )
    //   }
    // }
    