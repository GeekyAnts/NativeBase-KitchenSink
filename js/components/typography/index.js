
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, H1, H2, H3, Text, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class NHTypography extends Component {  // eslint-disable-line

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
            <Title>Typography</Title>
          </Body>
          <Right />

        </Header>

        <Content padder>
          <H1 style={styles.mb10}>Header One</H1>
          <H2 style={styles.mb10}>Header Two</H2>
          <H3 style={styles.mb10}>Header Three</H3>
          <Text>Default</Text>
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

export default connect(mapStateToProps, bindAction)(NHTypography);
