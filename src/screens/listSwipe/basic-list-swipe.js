import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  SwipeRow,
  Text,
  Left,
  Right,
  Body,
  View
} from "native-base";
import styles from "./styles";

class BasicListSwipe extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>Single SwipeRow</Title>
          </Body>
          <Right />
        </Header>

        <Content scrollEnabled={false}>
          <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert("Add")}>
                <Icon active name="add" style={{ color: "#FFF" }} />
              </Button>
            }
            right={
              <Button danger onPress={() => alert("Trash")}>
                <Icon active name="trash" />
              </Button>
            }
            body={
              <View style={{ paddingLeft: 20 }}>
                <Text>Swipe me to left and right</Text>
              </View>
            }
          />
        </Content>
      </Container>
    );
  }
}

export default BasicListSwipe;
