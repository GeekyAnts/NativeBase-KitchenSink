
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Button, Icon, Item, Input, Content,Text } from 'native-base';

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
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search" />
            <Icon active name="people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content padder>
          <Button block onPress={this.props.openDrawer}><Text>Back</Text></Button>
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

export default connect(mapStateToProps, bindAction)(NHSearchbar);
