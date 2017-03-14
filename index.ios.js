import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import * as firebase from 'firebase';


class RetailSite extends Component {
  render() {
    return (
      <Container>
        <Header>
            <Left>
                <Button transparent>
                </Button>
            </Left>
            <Body>
                <Title>RetailSite</Title>
            </Body>
            <Right />
        </Header>

        <Content>
        </Content>

        <Footer>
            <FooterTab>
                <Button full>
                    <Text>Footer</Text>
                </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
  }
}

AppRegistry.registerComponent('RetailSite', () => RetailSite);

export default RetailSite;
