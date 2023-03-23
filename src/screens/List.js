import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function List() {
    return (
      <View style={styles.container}>
        <Text style={ styles.text }>CEP's buscados</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20
    }
  });

