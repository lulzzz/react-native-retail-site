import React from 'react';

const HomeIndex = props => {
  let allProducts = props.allProducts;

  return (
    <View>
      <Text>New Arrivals</Text>
          {allSlaughters.map(function(object) {
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
