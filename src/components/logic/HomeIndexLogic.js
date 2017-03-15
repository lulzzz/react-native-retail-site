import React, { Component } from 'react';
import { RNRSData } from '../../config/FirebaseConstants';

class HomeIndexLogic extends Component {
  constructor(props){
    super(props);
    this.state = {
      allProducts: [],
    }
  }

  componentDidMount() {
    let _this = this;
    let slaughterhouses = {};

    PPCDashData.ref('users/').once('value', function(allData) {
      allData.forEach(function(data) {
        data.forEach(function(userNode) {
          if (userNode.val().type === 'slaughterhouse') {
            if (userNode.val().deletedAt !== true) {
              let companyName = userNode.val().companyName;
              let sifNumber = userNode.val().sif;
              let idNumber = data.key;
              slaughterhouses[companyName] = {name: companyName, sif: sifNumber, id: idNumber}
            }
          }
        })
      })
    }).then(function(user) {
      let keys = Object.keys(slaughterhouses).sort();
      let sortedHash = {};
      let sortedArray = [];

      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        sortedArray.push(sortedHash[key] = slaughterhouses[key]);
      }

      _this.setState({allSlaughters: sortedArray}, function afterSlaughterSet() {

      });
    })
  }

  render() {
    let allProducts = this.state.allProducts;

    return (
      <HomeIndex
        allProducts={allProducts}
      />
    )
  }
}

export default HomeIndexLogic;
