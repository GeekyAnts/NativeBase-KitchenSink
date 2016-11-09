
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text } from 'native-base';

import styles from './styles';

const {
  replaceAt,
} = actions;

class NHListDivider extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('listDivider', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceAt('list')}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>List Divider</Title>
        </Header>

        <Content>
          <List>
            <ListItem itemDivider>
              <Text>A</Text>
            </ListItem>
            <ListItem>
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem>
              <Text>Allen Lee</Text>
            </ListItem>
            <ListItem>
              <Text>Andy Hertzfeld</Text>
            </ListItem>
            <ListItem>
              <Text>Angana Ghosh</Text>
            </ListItem>

            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
            <ListItem>
              <Text>Brian Swetland</Text>
            </ListItem>
            <ListItem>
              <Text>Brittany Kelso</Text>
            </ListItem>

            <ListItem itemDivider>
              <Text>C</Text>
            </ListItem>
            <ListItem>
              <Text>Caroline Aaron</Text>
            </ListItem>
            <ListItem>
              <Text>Cendre Urbino</Text>
            </ListItem>
            <ListItem>
              <Text>Claire Barclay</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHListDivider);
