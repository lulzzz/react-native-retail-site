import React, { Component } from 'react';
import { RNRSData } from '../../config/FirebaseConstants';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from '../../../styles.js';

class ShowPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id
    }
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>{this.state.id}</Text>
      </View>
    );
  }
}

export default ShowPage;
