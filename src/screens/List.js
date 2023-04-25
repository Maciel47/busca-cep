import * as React from 'react';
import {
  View, 
  SafeAreaView,
  StatusBar, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  FlatList,
  ScrollView,
  RefreshControl
  } from 'react-native';
import { getDatabase, ref, onValue, get } from 'firebase/database';
import { ActivityIndicator } from 'react-native-paper';

const List = () => {
  const  [address, setAddress] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  function refresh() {
    setLoading(true);
    <ActivityIndicator/>
    setLoading(false);
  }

  const getAddress = () => {
    const db = getDatabase();
    const dbRef = ref(db, 'address/');
    onValue(dbRef, (snapshot) => {
      const data = [];
      snapshot.forEach((childItem) => {
        data.push ({
          key: childItem.key,
          cep: childItem.val().cep,
          logradouro: childItem.val().logradouro,
          complemento: childItem.val().complemento,
          bairro: childItem.val().bairro,
          localidade: childItem.val().localidade,
          uf: childItem.val().uf, 
          ibge: childItem.val().ibge,
          ddd: childItem.val().ddd,
        });
      });
        setAddress(oldData => [...oldData, ...data]);
        setLoading(false);
    });
  }

  React.useEffect (() => {
    getAddress();
    setLoading(true);
  }, []);

  const renderItem = ({item}) => (
      <View style={styles.itemList}>
        <TouchableOpacity onPress={ null }>
          <Text style={styles.textList}>CEP: {item.cep}</Text>
          <Text style={styles.textList}>Rua: 
            {
              item.logradouro ?  item.logradouro : 
              <Text style={styles.textList}> Não consta </Text>
            }
          </Text>
          <Text style={styles.textList}>Complemento: 
            {
              item.complemento ?  item.complemento : 
              <Text style={styles.textList}> Não consta </Text>
            }
          </Text>
          <Text style={styles.textList}>Bairro: {item.bairro}</Text>
          <Text style={styles.textList}>Cidade: {item.localidade}</Text>
          <Text style={styles.textList}>Estado: {item.uf}</Text>
          <Text style={styles.textList}>IBGE: {item.ibge}</Text>
          <Text style={styles.textList}>DDD: {item.ddd}</Text>
        </TouchableOpacity>
      </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={address}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        refreshControl = {
          <RefreshControl
            refreshing={loading}
            onRefresh={refresh}
          />
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  text: {
    fontSize: 25,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemList: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 50,
    marginTop: 5,
    marginBottom: 5,
    color: '#000',
    backgroundColor: "#EEEDFF",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#999FEC",
    width: '98%'
  },
  textList: {
    fontSize: 25,
    alignItems: 'center'
  },
  buttonForm: {
    width: 300,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 60
  },
  buttonLayout: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: "#999FEC",
    borderRadius: 10
  },
  textButton: {
    fontSize: 20,
    padding: 15,
    color: "#FFF"
  },
})

export default List;