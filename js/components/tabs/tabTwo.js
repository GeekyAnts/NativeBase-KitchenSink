
import React, { Component } from 'react';

import { Container, Content, Text } from 'native-base';

import styles from './styles';

export default class TabTwo extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Container style={styles.container}>
        <Content padder>
          <Text>
            Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
            sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
            luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
            Sed fringilla mauris sit amet nibh.
          </Text>
        </Content>
      </Container>
    );
  }
}
