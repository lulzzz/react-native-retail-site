import React  from 'react';
import { View, Text } from 'react-native';

const HomeIteration = props => {

  return (
    <View key={props.id}>
      <Text>{props.name}</Text>
    </View>
  )
}

export default HomeIteration;
