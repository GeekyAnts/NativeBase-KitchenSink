
import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';

import styles from './styles';

export default class ButtonOutline extends Component { // eslint-disable-line

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Container>
        <Content padder>
          <Button bordered style={styles.margin}>Primary</Button>
          <Button bordered success style={styles.margin}>Success</Button>
          <Button bordered info style={styles.margin}>Info</Button>
          <Button bordered warning style={styles.margin}>Warning</Button>
          <Button bordered danger style={styles.margin}>Danger</Button>
        </Content>
      </Container>
    );
  }
}
