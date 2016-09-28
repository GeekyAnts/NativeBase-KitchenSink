
import React, { Component } from 'react';
import { Container, Content, Button, Icon, View } from 'native-base';

import styles from './styles';

export default class ButtonIcon extends Component { // eslint-disable-line

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Container>
        <Content padder>
          <View style={styles.buttonContainer}>
            <Button transparent>
              <Icon name="ios-arrow-back" style={styles.iconButton} />
            </Button>
            <Button transparent>
              <Icon name="ios-arrow-down" style={styles.iconButton} />
            </Button>
            <Button transparent>
              <Icon name="ios-arrow-up" style={styles.iconButton} />
            </Button>
            <Button transparent>
              <Icon name="ios-arrow-forward" style={styles.iconButton} />
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button transparent style={styles.margin}>
              <Icon name="ios-undo-outline" style={styles.iconButton} />
            </Button>
            <Button transparent style={styles.margin}>
              <Icon name="ios-refresh-circle" style={styles.iconButton} />
            </Button>
            <Button transparent style={styles.margin}>
              <Icon name="ios-cloud-upload-outline" style={styles.iconButton} />
            </Button>
            <Button transparent style={styles.margin}>
              <Icon name="ios-close-circle" style={styles.iconButton} />
            </Button>
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
            <Button style={styles.margin}>
              <Icon name="ios-bluetooth" />
            </Button>
            <Button style={styles.margin}>
              <Icon name="ios-wifi" />
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button bordered style={styles.margin}>
              <Icon name="ios-book" />
            </Button>
            <Button warning style={styles.margin}>
              <Icon name="ios-star" />
            </Button>
            <Button danger style={styles.margin}>
              <Icon name="ios-close-circle" />
            </Button>
            <Button style={{ backgroundColor: '#384850' }}>
              <Icon name="ios-search" style={{ color: '#00c497' }} />
            </Button>
          </View>
          <Button primary style={styles.margin}>
            <Icon name="ios-home" />
            Home
          </Button>
        </Content>
      </Container>
    );
  }
}
