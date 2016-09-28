
import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';

import styles from './styles';

export default class ButtonBlock extends Component { // eslint-disable-line

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Container>
        <Content padder>
          <Button block capitalize primary style={styles.margin}>Capitalize Primary</Button>
          <Button block success style={styles.margin}>Success</Button>
          <Button block info style={styles.margin}>Info</Button>
          <Button block warning style={styles.margin}>Warning</Button>
          <Button block danger style={styles.margin}>Danger</Button>
          <Button block disabled style={styles.margin}>Disabled</Button>
        </Content>
      </Container>
    );
  }
}
