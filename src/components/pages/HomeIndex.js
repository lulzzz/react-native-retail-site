import React  from 'react';
import { Text, View } from 'react-native';
import HomeIteration from './HomeIteration';

const HomeIndex = props => {
  let allProducts = props.allProducts;

  return (
    <View>
      <Text>New Arrivals</Text>
          {allProducts.map(function(object) {
            return (
              <HomeIteration
                key={object.id}
                id={object.id}
                name={object.name}
                cost={object.cost}
              />
            )
          })}
    </View>
  )
}

export default HomeIndex;
