import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeIteration from './HomeIteration';
import styles from '../../../styles.js';

const HomeIndex = props => {
  let allProducts = props.allProducts;

  return (
    <View>
      <Text>New Arrivals</Text>
      <View style={styles.homeIndexContainer}>
          {allProducts.map(function(object) {
            return (
              <HomeIteration
                key={object.id}
                id={object.id}
                name={object.name}
                cost={object.cost}
                image={object.image}
              />
            )
          })}
        </View>
    </View>
  )
}

export default HomeIndex;
