
import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Left, Body, Right } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const androidText = 'Capitalize Primary';
const iosText = 'Primary';

class NHButton extends Component {  //eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Button</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb20}>
            <CardItem header>
              <Text>Block Button</Text>
            </CardItem>
            <CardItem style={{ flexDirection: 'column' }}>
              <Button block capitalize primary style={styles.mb15}>
                <Text>{(Platform.OS === 'android') ? androidText : iosText}</Text>
              </Button>
              <Button block success style={styles.mb15}><Text>Success</Text></Button>
              <Button block info style={styles.mb15}><Text>Info</Text></Button>
              <Button block warning style={styles.mb15}><Text>Warning</Text></Button>
              <Button block danger style={styles.mb15}><Text>Danger</Text></Button>
              <Button block disabled style={styles.mb15}><Text>Disabled</Text></Button>
            </CardItem>
          </Card>

          <Card style={styles.mb20}>
            <CardItem header>
              <Text>Button Theme</Text>
            </CardItem>
            <CardItem style={{ flexDirection: 'column' }}>
              <Button info style={styles.mb15}><Text>Info</Text></Button>
              <Button danger style={styles.mb15}><Text>Danger</Text></Button>
              <Button primary style={styles.mb15}><Text>Primary</Text></Button>
              <Button warning style={styles.mb15}><Text>Warning</Text></Button>
              <Button success style={styles.mb15}><Text>Success</Text></Button>
              <Button disabled style={styles.mb15}><Text>Disabled</Text></Button>
            </CardItem>
          </Card>

          <Card style={styles.mb20}>
            <CardItem header>
              <Text>Round Button</Text>
            </CardItem>
            <CardItem style={{ flexDirection: 'column' }}>
              <Button rounded info style={styles.mb15}><Text>Info</Text></Button>
              <Button rounded danger style={styles.mb15}><Text>Danger</Text></Button>
              <Button rounded primary style={styles.mb15}><Text>Primary</Text></Button>
              <Button rounded warning style={styles.mb15}><Text>Warning</Text></Button>
              <Button rounded success style={styles.mb15}><Text>Success</Text></Button>
              <Button rounded disabled style={styles.mb15}><Text>Disabled</Text></Button>
            </CardItem>
          </Card>

          <Card style={styles.mb20, { flex: 0 }}>
            <CardItem header>
              <Text>Outline Button</Text>
            </CardItem>
            <CardItem style={{ flexDirection: 'column' }}>
              <Button bordered info style={styles.mb15}><Text>Info</Text></Button>
              <Button bordered danger style={styles.mb15}><Text>Danger</Text></Button>
              <Button bordered style={styles.mb15}><Text>Primary</Text></Button>
              <Button bordered warning style={styles.mb15}><Text>Warning</Text></Button>
              <Button bordered success style={styles.mb15}><Text>Success</Text></Button>
            </CardItem>
          </Card>

          <Card style={styles.mb20, { flex: 0 }}>
            <CardItem header>
              <Text>Button Size</Text>
            </CardItem>
            <CardItem style={{ flexDirection: 'column' }}>
              <Button small style={styles.mb15}><Text>Small</Text></Button>
              <Button success style={styles.mb15}><Text>Regular</Text></Button>
              <Button warning large style={styles.mb15}><Text>Large</Text></Button>
            </CardItem>
          </Card>

          <Card style={styles.mb20, { flex: 0 }}>
            <CardItem header>
              <Text>Icon Button</Text>
            </CardItem>
            <CardItem style={{ flexDirection: 'column' }}>
              <View style={styles.buttonContainer}>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-arrow-back" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-arrow-down" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-arrow-up" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-arrow-forward" style={styles.iconButton} />
                </Button>
              </View>
              <View style={styles.buttonContainer}>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-undo-outline" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-refresh-circle-outline" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-share-outline" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-close-circle-outline" style={styles.iconButton} />
                </Button>
              </View>
              <View style={styles.buttonContainer}>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-fastforward-outline" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-play" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-pause" style={styles.iconButton} />
                </Button>
                <Button transparent style={styles.margin}>
                  <Icon name="ios-rewind-outline" style={styles.iconButton} />
                </Button>
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.mf}>
                  <Button style={{ alignSelf: 'center' }}>
                    <Icon name="ios-bluetooth" />
                  </Button>
                </View>
                <View style={styles.mf}>
                  <Button style={{ alignSelf: 'center' }}>
                    <Icon name="ios-wifi" />
                  </Button>
                </View>
                <View style={styles.mf}>
                  <Button style={{ alignSelf: 'center' }}>
                    <Icon name="md-plane" />
                  </Button>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <Button bordered style={styles.margin}>
                  <Icon name="ios-thumbs-up" />
                  <Text>Like</Text>
                </Button>
                <Button bordered style={styles.margin}>
                  <Icon name="ios-chatboxes" />
                  <Text>Comment</Text>
                </Button>
                <Button bordered style={styles.margin}>
                  <Icon name="ios-share-alt" />
                  <Text>Share</Text>
                </Button>
              </View>
              <View style={styles.buttonContainer}>
                <Button bordered style={styles.margin}>
                  <Icon name="ios-create-outline" />
                  <Text>Status</Text>
                </Button>
                <Button bordered style={styles.margin}>
                  <Icon name="ios-camera" />
                  <Text>Photo</Text>
                </Button>
                <Button bordered style={styles.margin}>
                  <Icon name="ios-pin" />
                  <Text>Check In</Text>
                </Button>
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
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHButton);
