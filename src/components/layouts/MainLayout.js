import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import HomeIndexLogic from '../logic/HomeIndexLogic';

class MainLayout extends Component {
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
          <HomeIndexLogic />
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

export default MainLayout;
