import React  from 'react';
import { StyleSheet, View, Image, Text, Navigator, TouchableHighlight } from 'react-native';
import styles from '../../../styles.js';

const HomeIteration = props => {

  return (
    <TouchableHighlight onPress={this._onPressButton}>
      <View style={styles.liContainer}>
          <Image source={{uri: props.image}} style={styles.liImage}>
          <Text style={styles.liTextName}>{props.name}</Text>
          <Text style={styles.liTextCost}>${props.cost}</Text>
          </Image>
      </View>
    </TouchableHighlight>
  )
}

export default HomeIteration;
