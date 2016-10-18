
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Badge } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

class NHBadge extends Component {

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
          <Title>Badge</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <Badge style={styles.mb}>2</Badge>
          <Badge primary style={styles.mb}>2</Badge>
          <Badge success style={styles.mb}>2</Badge>
          <Badge info style={styles.mb}>2</Badge>
          <Badge warning style={styles.mb}>2</Badge>
          <Badge danger style={styles.mb}>2</Badge>
          <Badge
            primary
            style={styles.mb}
          >
            <Icon name="ios-star" style={{ fontSize: 12, color: '#fff', lineHeight: 19 }} />
          </Badge>
          <Badge
            style={{ backgroundColor: 'black' }}
            textStyle={{ color: 'white' }}
          >
            1866
          </Badge>
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

export default connect(null, bindAction)(NHBadge);
