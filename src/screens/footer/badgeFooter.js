import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
  Body,
  Left,
  Right,
  Icon,
  Badge
} from 'native-base';
import styles from './styles';

class BadgeFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Footer</Title>
          </Body>
          <Right />
        </Header>

        <Content padder />

        <Footer>
          <FooterTab>
            <Button
              active={this.state.tab1}
              onPress={() => this.toggleTab1()}
              vertical
              badge
            >
              <Badge>
                <Text>2</Text>
              </Badge>
              <Icon active={this.state.tab1} name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button
              active={this.state.tab3}
              onPress={() => this.toggleTab3()}
              vertical
              badge
            >
              <Badge style={{ backgroundColor: 'green' }}>
                <Text>51</Text>
              </Badge>
              <Icon active={this.state.tab3} name="compass" />
              <Text>Compass</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon active={this.state.tab4} name="contact" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default BadgeFooter;
