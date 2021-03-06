import React, { Component } from 'react';
import { RNRSData } from '../../config/FirebaseConstants';
import { StyleSheet, Text, View, TouchableHighlight, Image, Navigator } from 'react-native';
import styles from '../../../styles.js';

class HomeIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      allProducts: [],
    };
    this.navigate = this.navigate.bind(this);
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

  navigate(routeName, object){
    this.props.navigator.push({
      name: routeName,
      passProps: {
        id: object.id,
        name: object.name,
        cost: object.cost,
        image: object.image
      },
    })
  }


  render () {
    let allProducts = this.state.allProducts;
    let _this = this;

    return (
      <View>
        <Text style={styles.homeHeader}>New Arrivals</Text>
        <View style={styles.homeIndexContainer}>
            {allProducts.map(function(object) {
              return (
                <TouchableHighlight onPress={ () => _this.navigate('show', object) } key={object.id}>
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
