
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Button, Icon, InputGroup, Input, Content } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class NHSearchbar extends Component { // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar rounded>
          <InputGroup>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </InputGroup>
          <Button transparent>
            Search
          </Button>
        </Header>

        <Content padder>
          <Button block rounded onPress={this.props.openDrawer}>Back</Button>
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
});

export default connect(mapStateToProps, bindAction)(NHSearchbar);
