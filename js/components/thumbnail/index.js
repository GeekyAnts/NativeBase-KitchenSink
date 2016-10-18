
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Thumbnail, Text, View } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

const imgOne = require('../../../img/swiper-1.png');
const imgTwo = require('../../../img/swiper-2.png');

class NHThumbnail extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Title>Thumbnail</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.mb10}>Square Thumbnail</Text>
            <Thumbnail square source={imgOne} style={styles.mb10} />
            <Thumbnail square size={80} source={imgOne} style={styles.mb35} />

            <Text style={styles.mb10}>Circular Thumbnail</Text>
            <Thumbnail source={imgTwo} style={{ marginBottom: 8 }} />
            <Thumbnail size={80} source={imgTwo} />
          </View>
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

export default connect(null, bindAction)(NHThumbnail);
