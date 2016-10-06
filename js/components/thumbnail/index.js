
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Thumbnail, Text } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

const imgURI = 'http://www.onenov.in/users_content/users_images/images/f5f8d64aef421b809647a120ab133b7b.jpg';
const imgPath = require('../../../img/purple-flower.jpg');

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
          <Thumbnail source={{ uri: imgURI }} />
          <Thumbnail size={80} source={{ uri: imgURI }} />
          <Text>Using Url</Text>
          <Thumbnail square source={{ imgPath }} />
          <Thumbnail square size={80} source={{ imgPath }} />
          <Text>Relative Path</Text>
          <Thumbnail square source={require('../../../img/purple-flower.jpg')} />
          <Thumbnail square size={80} source={require('../../../img/purple-flower.jpg')} />
          <Text>Using require</Text>
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
