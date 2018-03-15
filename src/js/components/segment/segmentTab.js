import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Text,
  H3,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Segment
} from "native-base";

import styles from "./styles";

class SegmentNB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seg: 2
    };
  }

  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Segments</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Segment>
          <Button
            first
            active={this.state.seg === 1 ? true : false}
            onPress={() => this.setState({ seg: 1 })}
          >
            <Text>Puppies</Text>
          </Button>
          <Button
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.setState({ seg: 2 })}
          >
            <Text>Kittens</Text>
          </Button>
          <Button
            last
            active={this.state.seg === 3 ? true : false}
            onPress={() => this.setState({ seg: 3 })}
          >
            <Text>Cubs</Text>
          </Button>
        </Segment>

        <Content padder>
          {this.state.seg === 1 &&
            <Text>
              Puppies Selected
            </Text>}
          {this.state.seg === 2 &&
            <Text>
              Kittens Selected
            </Text>}
          {this.state.seg === 3 &&
            <Text>
              Cubs Selected
            </Text>}
        </Content>
      </Container>
    );
  }
}

export default SegmentNB;
