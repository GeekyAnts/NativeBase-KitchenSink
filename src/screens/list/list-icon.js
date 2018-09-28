import React, { Component } from "react";
import { Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Badge,
  Left,
  Right,
  Body,
  Switch,
  Radio,
  Picker,
  Separator
} from "native-base";
import styles from "./styles";

const Item = Picker.Item;

class NHListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: "key1",
      results: {
        items: []
      }
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }
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
            <Title>List Icon</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Separator bordered noTopBorder />
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="plane" />
              </Button>
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
            <Right>
              <Switch value={false} trackColor="#50B948" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Wi-Fi</Text>
            </Body>
            <Right>
              <Text>GeekyAnts</Text>
              {Platform.OS === "ios" && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Text>On</Text>
              {Platform.OS === "ios" && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#4CDA64" }}>
                <Icon active name="phone-portrait" />
              </Button>
            </Left>
            <Body>
              <Text>Mobile Data</Text>
            </Body>
            <Right>
              <Radio selected />
            </Right>
          </ListItem>
          <ListItem icon last>
            <Left>
              <Button style={{ backgroundColor: "#4CDA64" }}>
                <Icon active name="link" />
              </Button>
            </Left>
            <Body>
              <Text>Personal Hotspot</Text>
            </Body>
            <Right>
              <Text>Off</Text>
              {Platform.OS === "ios" && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>

          <Separator bordered />

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FD3C2D" }}>
                <Icon active name="notifications" />
              </Button>
            </Left>
            <Body>
              <Text>Notifications</Text>
            </Body>
            <Right>
              {Platform.OS === "ios" && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#8F8E93" }}>
                <Icon active name="switch" />
              </Button>
            </Left>
            <Body>
              <Text>Control Center</Text>
            </Body>
            <Right>
              {Platform.OS === "ios" && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
          <ListItem icon last>
            <Left>
              <Button style={{ backgroundColor: "#5855D6" }}>
                <Icon active name="moon" />
              </Button>
            </Left>
            <Body>
              <Text>Do Not Disturb</Text>
            </Body>
            <Right>
              <Text>Yes</Text>
            </Right>
          </ListItem>
          <Separator bordered />
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#4CDA64" }}>
                <Icon name="arrow-dropdown" />
              </Button>
            </Left>
            <Body>
              <Text>Pick SIM</Text>
            </Body>
            <Right>
              <Picker
                note
                mode="dropdown"
                style={{ width: 120 }}
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Item label="TATA" value="key0" />
                <Item label="AIRTEL" value="key1" />
              </Picker>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#8F8E93" }}>
                <Icon active name="cog" />
              </Button>
            </Left>
            <Body>
              <Text>Software Update</Text>
            </Body>
            <Right>
              <Badge style={{ backgroundColor: "#FD3C2D" }}>
                <Text>2</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem last icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="hand" />
              </Button>
            </Left>
            <Body>
              <Text>Privacy</Text>
            </Body>
            <Right>
              {Platform.OS === "ios" && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default NHListIcon;
