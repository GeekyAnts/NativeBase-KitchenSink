
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Badge, Text, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class NHBadge extends Component { //eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Badge</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Badge style={styles.mb}><Text>2</Text></Badge>
          <Badge primary style={styles.mb}><Text>2</Text></Badge>
          <Badge success style={styles.mb}><Text>2</Text></Badge>
          <Badge info style={styles.mb}><Text>2</Text></Badge>
          <Badge warning style={styles.mb}><Text>2</Text></Badge>
          <Badge danger style={styles.mb}><Text>2</Text></Badge>
          <Badge
            primary
            style={styles.mb}
          >
            <Icon name="star" style={{ fontSize: 15, color: '#fff', lineHeight: 20 }} />
          </Badge>
          <Badge
            style={{ backgroundColor: 'black' }}
            textStyle={{ color: 'white' }}
          >
            <Text>1866</Text>
          </Badge>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(NHBadge);
