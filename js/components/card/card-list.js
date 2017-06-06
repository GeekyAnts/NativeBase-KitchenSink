import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  IconNB,
  Card,
  CardItem,
  Text,
  Left,
  Right,
  Body
} from "native-base";

import styles from "./styles";

class NHCardList extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Card List</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem header bordered>
              <Text>
                Social Applications
              </Text>
            </CardItem>
            <CardItem>
              <Icon
                active
                name="logo-googleplus"
                style={{ color: "#DD5044" }}
              />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="logo-facebook" style={{ color: "#3B579D" }} />
              <Text>facebook</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="logo-twitter" style={{ color: "#55ACEE" }} />
              <Text>Twitter</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="logo-reddit" style={{ color: "#FF4500" }} />
              <Text>Reddit</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="logo-linkedin" style={{ color: "#007BB6" }} />
              <Text>LinkedIn</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="logo-youtube" style={{ color: "#D62727" }} />
              <Text>YouTube</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default NHCardList;
