import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import HomeIteration from './HomeIteration';
import styles from '../../../styles.js';

class HomeIndex extends Component {
  constructor(props){
    super(props);
  }


  render () {
    let allProducts = this.props.allProducts;

    return (
      <View>
        <Text style={styles.homeHeader}>New Arrivals</Text>
        <View style={styles.homeIndexContainer}>
            {allProducts.map(function(object) {
              return (
                <TouchableHighlight onPress={this._onPressButton}>
                  <View style={styles.liContainer}>
                      <Image source={{uri: object.image}} style={styles.liImage}>
                      <Text style={styles.liTextName}>{object.name}</Text>
                      <Text style={styles.liTextCost}>${object.cost}</Text>
                      </Image>
                  </View>
                </TouchableHighlight>
              )
            })}
        </View>
      </View>
    )
  }
}

export default HomeIndex;
