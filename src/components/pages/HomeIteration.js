import React  from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import styles from '../../../styles.js';

const HomeIteration = props => {

  return (
    <View style={styles.liContainer}>
        <Image source={{uri: props.image}} style={styles.liImage}>
        <Text style={styles.liTextName}>{props.name}</Text>
        <Text style={styles.liTextCost}>${props.cost}</Text>
        </Image>
    </View>
  )
}

export default HomeIteration;
