import React, { Component } from 'react';
import { RNRSData } from '../../config/FirebaseConstants';
import HomeIndex from '../pages/HomeIndex';

class HomeIndexLogic extends Component {
  constructor(props){
    super(props);
    this.state = {
      allProducts: [],
    }
  }

  componentDidMount() {
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
      console.log(product)
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

  render() {
    let allProducts = this.state.allProducts;
    console.log("hi");

    return (
      <HomeIndex
        allProducts={allProducts}
      />
    )
  }
}

export default HomeIndexLogic;
