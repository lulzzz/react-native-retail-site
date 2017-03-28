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

  navigate(routeName){
    this.props.navigator.pop({
      name: routeName
    })
  }

  render() {
    let _this = this;
    return (
      <View>
        <Image
          source={{uri: this.state.image}}
          style={{width: 50, height: 50}}
        />
        <Text>{this.state.name} - ${this.state.cost}</Text>
        <TouchableHighlight onPress={ () => _this.navigate('home') }>
          <Text>Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ShowPage;
