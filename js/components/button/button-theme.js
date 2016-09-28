
import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';

import styles from './styles';

export default class ButtonTheme extends Component { // eslint-disable-line

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Container>
        <Content padder>
          <Button primary style={styles.margin}>Primary</Button>
          <Button success style={styles.margin}>Success</Button>
          <Button info style={styles.margin}>Info</Button>
          <Button warning style={styles.margin}>Warning</Button>
          <Button danger style={styles.margin}>Danger</Button>
          <Button disabled style={styles.margin}>Disabled</Button>
        </Content>
      </Container>
    );
  }
}
