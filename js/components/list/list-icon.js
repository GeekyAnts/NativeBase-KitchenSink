
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, IconNB, Icon, List, ListItem, Text, Badge, Left, Right, Body, Switch, Seperator, Radio } from 'native-base';

import styles from './styles';

const {
  popRoute,
} = actions;

class NHListIcon extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>List Icon</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem first itemHeader>
            <Text>CLASSES</Text>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon active name="planet" />
            </Left>
            <Body>
              <Text>Astronomy</Text>
            </Body>
            <Right>
              <Text>To The Moon</Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon active name="body" />
            </Left>
            <Body>
              <Text>Muggle Studies</Text>
            </Body>
            <Right>
              <Radio selected={true} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon active name="leaf" />
            </Left>
            <Body>
              <Text>Herbology</Text>
            </Body>
            <Right>
              <Icon active name="rose" style={{color: '#50B948'}} />
            </Right>
          </ListItem>
          <ListItem icon last>
            <Left>
              <Icon active name="flask" />
            </Left>
            <Body>
              <Text>Potions</Text>
            </Body>
            <Right>
              <Text>Poisonous</Text>
            </Right>
          </ListItem>
          <ListItem itemHeader>
            <Text>ACTIVITIES</Text>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon active name="color-wand" />
            </Left>
            <Body>
              <Text>Incantation</Text>
            </Body>
            <Right>
              <Text>Crucio!</Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon active name="brush" />
            </Left>
            <Body>
              <Text>Quidditch Practice</Text>
            </Body>
            <Right>
              <Switch value={true} onTintColor="#007aff" />
            </Right>
          </ListItem>
          <ListItem icon last>
            <Left>
              <Icon active name="wine" />
            </Left>
            <Body>
              <Text>Mead Drinking</Text>
            </Body>
            <Right>
              <Text>Yes Please</Text>
            </Right>
          </ListItem>
          <ListItem itemHeader>
            <Text>OTHERS</Text>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor: '#007aff'}}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Wi-Fi</Text>
            </Body>
            <Right>
              <Text>GeekyAnts</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem last icon>
            <Left>
              <Button style={{backgroundColor: '#777'}}>
                <Icon active name="cog" />
              </Button>
            </Left>
            <Body>
              <Text>Software Update</Text>
            </Body>
            <Right>
              <Badge style={{ backgroundColor: '#8C97B5' }}><Text>2</Text></Badge>
            </Right>
          </ListItem>

        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHListIcon);
