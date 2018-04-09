import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Text,
  Body,
  Left,
  Right,
  Grid,
  Row,
  Col,
  Icon
} from "native-base";

import styles from "./styles";

class StateIcon extends Component {
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
            <Title>Icons</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Grid>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="logo-apple" />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-apple
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="pizza" />
                <Text numberOfLines={1} style={styles.iconText}>
                  pizza
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="person" />
                <Text numberOfLines={1} style={styles.iconText}>
                  person
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="beer" />
                <Text numberOfLines={1} style={styles.iconText}>
                  beer
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="bicycle" />
                <Text numberOfLines={1} style={styles.iconText}>
                  bicycle
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="navigate" />
                <Text numberOfLines={1} style={styles.iconText}>
                  navigate
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="cloud-circle" />
                <Text numberOfLines={1} style={styles.iconText}>
                  cloud-circle
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="pie" />
                <Text numberOfLines={1} style={styles.iconText}>
                  pie
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="bookmarks" />
                <Text numberOfLines={1} style={styles.iconText}>
                  bookmarks
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="pulse" />
                <Text numberOfLines={1} style={styles.iconText}>
                  pulse
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="camera" />
                <Text numberOfLines={1} style={styles.iconText}>
                  camera
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="mic-off" />
                <Text numberOfLines={1} style={styles.iconText}>
                  mic-off
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="film" />
                <Text numberOfLines={1} style={styles.iconText}>
                  film
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="flame" />
                <Text numberOfLines={1} style={styles.iconText}>
                  flame
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="paper" />
                <Text numberOfLines={1} style={styles.iconText}>
                  paper
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="paper-plane" />
                <Text numberOfLines={1} style={styles.iconText}>
                  paper-plane
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="cart" />
                <Text numberOfLines={1} style={styles.iconText}>
                  cart
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="flask" />
                <Text numberOfLines={1} style={styles.iconText}>
                  flask
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="paw" />
                <Text numberOfLines={1} style={styles.iconText}>
                  paw
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="rose" />
                <Text numberOfLines={1} style={styles.iconText}>
                  rose
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="pint" />
                <Text numberOfLines={1} style={styles.iconText}>
                  pint
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="shuffle" />
                <Text numberOfLines={1} style={styles.iconText}>
                  shuffle
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="keypad" />
                <Text numberOfLines={1} style={styles.iconText}>
                  keypad
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="eye" />
                <Text numberOfLines={1} style={styles.iconText}>
                  eye
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="glasses" />
                <Text numberOfLines={1} style={styles.iconText}>
                  glasses
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="microphone" />
                <Text numberOfLines={1} style={styles.iconText}>
                  microphone
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="color-filter" />
                <Text numberOfLines={1} style={styles.iconText}>
                  color-filter
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="alarm" />
                <Text numberOfLines={1} style={styles.iconText}>
                  alarm
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="medkit" />
                <Text numberOfLines={1} style={styles.iconText}>
                  medkit
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="ionic" />
                <Text numberOfLines={1} style={styles.iconText}>
                  ionic
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="refresh" />
                <Text numberOfLines={1} style={styles.iconText}>
                  refresh
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="star-half" />
                <Text numberOfLines={1} style={styles.iconText}>
                  star-half
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="train" />
                <Text numberOfLines={1} style={styles.iconText}>
                  train
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="wine" />
                <Text numberOfLines={1} style={styles.iconText}>
                  wine
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="partly-sunny" />
                <Text numberOfLines={1} style={styles.iconText}>
                  partly-sunny
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="nutrition" />
                <Text numberOfLines={1} style={styles.iconText}>
                  nutrition
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="grid" />
                <Text numberOfLines={1} style={styles.iconText}>
                  grid
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="settings" />
                <Text numberOfLines={1} style={styles.iconText}>
                  settings
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="chatbubbles" />
                <Text numberOfLines={1} style={styles.iconText}>
                  chatbubbles
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="speedometer" />
                <Text numberOfLines={1} style={styles.iconText}>
                  speedometer
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="chatboxes" />
                <Text numberOfLines={1} style={styles.iconText}>
                  chatboxes
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="cog" />
                <Text numberOfLines={1} style={styles.iconText}>
                  cog
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="baseball" />
                <Text numberOfLines={1} style={styles.iconText}>
                  baseball
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="bulb" />
                <Text numberOfLines={1} style={styles.iconText}>
                  bulb
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="calculator" />
                <Text numberOfLines={1} style={styles.iconText}>
                  calculator
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="rainy" />
                <Text numberOfLines={1} style={styles.iconText}>
                  rainy
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="videocam" />
                <Text numberOfLines={1} style={styles.iconText}>
                  videocam
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="play" />
                <Text numberOfLines={1} style={styles.iconText}>
                  play
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="disc" />
                <Text numberOfLines={1} style={styles.iconText}>
                  disc
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="body" />
                <Text numberOfLines={1} style={styles.iconText}>
                  body
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="lock" />
                <Text numberOfLines={1} style={styles.iconText}>
                  lock
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="key" />
                <Text numberOfLines={1} style={styles.iconText}>
                  key
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="flag" />
                <Text numberOfLines={1} style={styles.iconText}>
                  flag
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="skip-forward" />
                <Text numberOfLines={1} style={styles.iconText}>
                  skip-forward
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-github" />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-github
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="barcode" />
                <Text numberOfLines={1} style={styles.iconText}>
                  barcode
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-tux" />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-tux
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="copy" />
                <Text numberOfLines={1} style={styles.iconText}>
                  copy
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="stopwatch" />
                <Text numberOfLines={1} style={styles.iconText}>
                  stopwatch
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="medical" />
                <Text numberOfLines={1} style={styles.iconText}>
                  medical
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="archive" />
                <Text numberOfLines={1} style={styles.iconText}>
                  archive
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="bookmark" />
                <Text numberOfLines={1} style={styles.iconText}>
                  bookmark
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="clipboard" />
                <Text numberOfLines={1} style={styles.iconText}>
                  clipboard
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="happy" />
                <Text numberOfLines={1} style={styles.iconText}>
                  happy
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="share" />
                <Text numberOfLines={1} style={styles.iconText}>
                  share
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="bluetooth" />
                <Text numberOfLines={1} style={styles.iconText}>
                  bluetooth
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="search" />
                <Text numberOfLines={1} style={styles.iconText}>
                  search
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="wifi" />
                <Text numberOfLines={1} style={styles.iconText}>
                  wifi
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="hand" />
                <Text numberOfLines={1} style={styles.iconText}>
                  hand
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="trash" />
                <Text numberOfLines={1} style={styles.iconText}>
                  trash
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="images" />
                <Text numberOfLines={1} style={styles.iconText}>
                  images
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="attach" />
                <Text numberOfLines={1} style={styles.iconText}>
                  attach
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-facebook" />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-facebook
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-googleplus" />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-googleplus
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-twitter" />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-twitter
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="logo-github" />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-github
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-whatsapp" />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-whatsapp
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-wordpress" />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-wordpress
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-youtube" />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-youtube
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="mail" />
                <Text numberOfLines={1} style={styles.iconText}>
                  mail
                </Text>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default StateIcon;
