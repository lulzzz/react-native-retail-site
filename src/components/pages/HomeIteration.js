import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Navigator, TouchableHighlight } from 'react-native';
import styles from '../../../styles.js';

class HomeIteration extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <View style={styles.liContainer}>
            <Image source={{uri: this.props.image}} style={styles.liImage}>
            <Text style={styles.liTextName}>{this.props.name}</Text>
            <Text style={styles.liTextCost}>${this.props.cost}</Text>
            </Image>
        </View>
      </TouchableHighlight>
    )
  }
}

export default HomeIteration;
