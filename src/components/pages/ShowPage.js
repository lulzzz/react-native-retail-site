import React, { Component } from 'react';
import { RNRSData } from '../../config/FirebaseConstants';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from '../../../styles.js';

class ShowPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      cost: this.props.cost,
      image: this.props.image
    }
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Image source={{uri: this.state.image}}></Image>
        <Text>{this.state.name} - ${this.state.cost}</Text>
      </View>
    );
  }
}

export default ShowPage;
