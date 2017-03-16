import React  from 'react';
import { View } from 'react-native';

const HomeIteration = props => {

  return (
    <View key={props.id}>
      {props.name}
    </View>
  )
}

export default HomeIteration;
