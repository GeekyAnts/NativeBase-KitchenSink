import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

class NHListHeader extends Component {
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
            <Title>List Header</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem itemHeader first>
            <Text>COMEDY</Text>
          </ListItem>
          <ListItem>
            <Text>Hangover</Text>
          </ListItem>
          <ListItem>
            <Text>Horrible Bosses</Text>
          </ListItem>
          <ListItem>
            <Text>Wedding Crashers</Text>
          </ListItem>
          <ListItem last>
            <Text>Cop Out</Text>
          </ListItem>

          <ListItem itemHeader>
            <Text>HORROR</Text>
          </ListItem>
          <ListItem>
            <Text>The Evil Dead</Text>
          </ListItem>
          <ListItem>
            <Text>Residential Evil</Text>
          </ListItem>
          <ListItem last>
            <Text>Conjuring</Text>
          </ListItem>

          <ListItem itemHeader>
            <Text>ACTION</Text>
          </ListItem>
          <ListItem>
            <Text>Terminator Genesis</Text>
          </ListItem>
          <ListItem>
            <Text>Fast And Furious</Text>
          </ListItem>
          <ListItem last>
            <Text>Top Gun</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default NHListHeader;
