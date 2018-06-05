import React, { Component } from "react";
import { FlatList } from "react-native";
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

const icons = [{ family: "Ionicons", type: "Ionicons", name: "home", color: "#663399", },
{ family: "Entypo", type: "Entypo", name: "home", color: "#ffc125" },
{ family: "Feather", type: "Feather", name: "home", color: "#387ef5" },
{ family: "FontAwesome", type: "FontAwesome", name: "home", color: "#000" },
{ family: "Foundation", type: "Foundation", name: "home", color: "orange" },
{ family: "Material Icons", type: "MaterialIcons", name: "home", color: "#32db64" },
{ family: "Material Community Icons", type: "MaterialCommunityIcons", name: "home", color: "#27a" },
{ family: "Octicons", type: "Octicons", name: "home", color: "#fac125" },
{ family: "Zocial", type: "Zocial", name: "dropbox", color: "blue" },
{ family: "Simple Line Icons", type: "SimpleLineIcons", name: "home", color: "green" },
{ family: "Evil Icons", type: "EvilIcons", name: "trophy", color: "brown" },
]
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
          <FlatList
            data={icons}
            keyExtractor={(item) => item.type}
            initialNumToRender={11}
            renderItem={({ item }) => (<ListItem>
              <Text style={{ width: 220 }}>{item.family}</Text>
              <Icon type={item.type} name={item.name} style={{ color: item.color }} />
            </ListItem>)}
          />
        </Content>
      </Container>
    );
  }
}

export default IconFamily;
