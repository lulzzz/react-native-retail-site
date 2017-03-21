import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeIteration from './HomeIteration';
import styles from '../../../styles.js';

class HomeIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }


  render () {
    return (
      <View>
        <Text style={styles.homeHeader}>New Arrivals</Text>
        <View style={styles.homeIndexContainer}>
            {this.props.allProducts.map(function(props) {
              return (
                <HomeIteration
                  key={props.id}
                  id={props.id}
                  name={props.name}
                  cost={props.cost}
                  image={props.image}
                />
              )
            })}
        </View>
      </View>
    )
  }
}

export default HomeIndex;
