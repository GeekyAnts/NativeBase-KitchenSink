
import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';

import styles from './styles';

export default class ButtonSize extends Component { // eslint-disable-line

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Container>
        <Content padder>
          <Button small style={styles.margin}>Small</Button>
          <Button success style={styles.margin}>Regular</Button>
          <Button warning large style={styles.margin}>Large</Button>
        </Content>
      </Container>
    );
  }
}
