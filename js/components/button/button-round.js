
import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';

import styles from './styles';

export default class ButtonRound extends Component { // eslint-disable-line

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Container>
        <Content padder>
          <Button rounded primary style={styles.margin}>Primary</Button>
          <Button rounded success style={styles.margin}>Success</Button>
          <Button rounded info style={styles.margin}>Info</Button>
          <Button rounded warning style={styles.margin}>Warning</Button>
          <Button rounded danger style={styles.margin}>Danger</Button>
          <Button rounded disabled style={styles.margin}>Disabled</Button>
        </Content>
      </Container>
    );
  }
}
