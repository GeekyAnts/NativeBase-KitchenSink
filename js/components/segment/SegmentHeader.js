
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body, Segment } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class SegmentNB extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      seg: 2,
    };
  }

  render() {
    return (
      <Container style={styles.container}>
      <Header hasTabs>
              <Left>
                  <Button transparent onPress={() => Actions.pop()}>
                      <Icon name="arrow-back" />
                  </Button>
              </Left>
              <Body>
                  <Segment>
                      <Button first active={(this.state.seg === 1) ? true : false} onPress={() => this.setState({seg: 1})}><Text>Puppies</Text></Button>
                      <Button last active={(this.state.seg === 2) ? true : false} onPress={() => this.setState({seg: 2})}><Text>Cubs</Text></Button>
                  </Segment>
              </Body>
              <Right>
                  <Button transparent>
                      <Icon name="search" />
                  </Button>
              </Right>
          </Header>


        <Content padder>
          {(this.state.seg === 1) &&
          <Text>
            Puppies Selected
          </Text>
          }
          {(this.state.seg === 2) &&
          <Text>
            Cubs Selected
          </Text>
          }
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

export default connect(mapStateToProps, bindAction)(SegmentNB);
