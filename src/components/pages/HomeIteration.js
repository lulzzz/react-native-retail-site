import React  from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from '../../../styles.js';

const HomeIteration = props => {

  return (
    <View key={props.id} style={styles.liContainer}>
      <Text style={styles.liText}>{props.name}</Text>
      <Text>${props.cost}</Text>
    </View>
  )
}

export default HomeIteration;
