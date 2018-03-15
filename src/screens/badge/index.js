import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Badge,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

class NHBadge extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Badge</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Badge style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge primary style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge success style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge info style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge warning style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge danger style={styles.mb}>
            <Text>2</Text>
          </Badge>
          <Badge primary style={styles.mb}>
            <Icon
              name="star"
              style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}
            />
          </Badge>
          <Badge
            style={{ backgroundColor: "black" }}
            textStyle={{ color: "white" }}
          >
            <Text>1866</Text>
          </Badge>
        </Content>
      </Container>
    );
  }
}

export default NHBadge;
