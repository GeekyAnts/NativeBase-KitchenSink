
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, View } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

class NHButton extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Button</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <Card>
            <CardItem header>
              <Text>Button Theme</Text>
            </CardItem>
            <CardItem>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Button primary style={styles.mb}>Primary</Button>
                <Button success style={styles.mb}>Success</Button>
                <Button info style={styles.mb}>Info</Button>
                <Button warning style={styles.mb}>Warning</Button>
                <Button danger style={styles.mb}>Danger</Button>
                <Button disabled style={styles.mb}>Disabled</Button>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

export default connect(null, bindAction)(NHButton);
