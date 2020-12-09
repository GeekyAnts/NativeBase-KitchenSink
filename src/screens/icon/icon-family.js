import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  ListItem,
  Text
} from "native-base";

class IconFamily extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#FFF" }}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Icon Family</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <ListItem>
            <Text style={{ width: 220 }}>Ionicons</Text>
            <Icon type="Ionicons" name="home" style={{ color: "#999" }} />
          </ListItem>
          <ListItem>
            <Text style={{ width: 220 }}>Entypo</Text>
            <Icon type="Entypo" name="home" style={{ color: "#999" }} />
          </ListItem>
          <ListItem>
            <Text style={{ width: 220 }}>Feather</Text>
            <Icon type="Feather" name="home" style={{ color: "#999" }} />
          </ListItem>
          <ListItem>
            <Text style={{ width: 220 }}>FontAwesome</Text>
            <Icon type="FontAwesome" name="home" style={{ color: "#999" }} />
          </ListItem>
          <ListItem>
            <Text style={{ width: 220 }}>Foundation</Text>
            <Icon type="Foundation" name="home" style={{ color: "#999" }} />
          </ListItem>
          <ListItem>
            <Text style={{ width: 220 }}>Material Icons</Text>
            <Icon type="MaterialIcons" name="home" style={{ color: "#999" }} />
          </ListItem>
          <ListItem>
            <Text style={{ width: 220 }}>Material Community Icons</Text>
            <Icon
              type="MaterialCommunityIcons"
              name="home"
              style={{ color: "#999" }}
            />
          </ListItem>
          <ListItem>
            <Text style={{ width: 220 }}>Octicons</Text>
            <Icon type="Octicons" name="home" style={{ color: "#999" }} />
          </ListItem>
          <ListItem>
            <Text style={{ width: 220 }}>Zocial</Text>
            <Icon type="Zocial" name="dropbox" style={{ color: "#999" }} />
          </ListItem>
          <ListItem>
            <Text style={{ width: 220 }}>Simple Line Icons</Text>
            <Icon
              type="SimpleLineIcons"
              name="home"
              style={{ color: "#999" }}
            />
          </ListItem>
          <ListItem>
            <Text style={{ width: 220 }}>Evil Icons</Text>
            <Icon type="EvilIcons" name="trophy" style={{ color: "#999" }} />
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default IconFamily;
