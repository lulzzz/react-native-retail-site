import React, { Component } from 'react';
import { RNRSData } from '../../config/FirebaseConstants';
import { StyleSheet, Text, View, TouchableHighlight, Image, Navigator } from 'react-native';
import styles from '../../../styles.js';

class HomeIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      allProducts: [],
    }
  }

  componentWillMount() {
    let _this = this;
    let products = {};

    RNRSData.ref('products/').once('value', function(data) {
      data.forEach(function(productNode) {
        let name = productNode.val().name;
        let cost = productNode.val().cost;
        let image = productNode.val().image;
        let idNumber = productNode.key;
        products[name] = {name: name, cost: cost, image: image, id: idNumber}
      })
    }).then(function(product) {
      let keys = Object.keys(products).sort();
      let sortedHash = {};
      let sortedArray = [];

      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        sortedArray.push(sortedHash[key] = products[key]);
      }

      _this.setState({allProducts: sortedArray}, function afterProductSet() {

      });
    })
  }


  render () {
    let allProducts = this.state.allProducts;
    console.log(allProducts);

    return (
      <View>
        <Text style={styles.homeHeader}>New Arrivals</Text>
        <View style={styles.homeIndexContainer}>
            {allProducts.map(function(object) {
              return (
                <View style={styles.liContainer} key={object.id}>
                    <Image source={{uri: object.image}} style={styles.liImage}>
                    <Text style={styles.liTextName}>{object.name}</Text>
                    <Text style={styles.liTextCost}>${object.cost}</Text>
                    </Image>
                </View>
              )
            })}
        </View>
      </View>
    )
  }
}

export default HomeIndex;
