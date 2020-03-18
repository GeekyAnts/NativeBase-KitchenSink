import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
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
      <Container style={styles.container}>
        <Header hasSegment>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Segment>
              <Button
                active={this.state.seg === 1 ? true : false}
                first
                onPress={() => this.setState({ seg: 1 })}
              >
                <Text>Puppies</Text>
              </Button>
              <Button
                last
                active={this.state.seg === 2 ? true : false}
                onPress={() => this.setState({ seg: 2 })}
              >
                <Text>Cubs</Text>
              </Button>
            </Segment>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          {this.state.seg === 1 && <Text>Puppies Selected</Text>}
          {this.state.seg === 2 && <Text>Cubs Selected</Text>}
        </Content>
      </Container>
    );
  }
}

export default SegmentNB;
