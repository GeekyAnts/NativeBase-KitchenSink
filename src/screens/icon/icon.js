import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  Grid,
  Col,
  Row
} from "native-base";
import styles from "./styles";

class Icons extends Component {
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
                <Icon name="logo-apple" style={{ color: "#999" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-apple
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="pizza" style={{ color: "#ffc125" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  pizza
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="person" style={{ color: "#387ef5" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  person
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="beer" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  beer
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="bicycle" style={{ color: "#663399" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  bicycle
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="navigate" style={{ color: "#32db64" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  navigate
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="cloud-circle" style={{ color: "#27a" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  cloud-circle
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="pie" style={{ color: "#fac125" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  pie
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="bookmarks" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  bookmarks
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="pulse" style={{ color: "green" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  pulse
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon active name="camera" style={{ color: "#aaa" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  camera
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="mic-off" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  mic-off
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="film" style={{ color: "brown" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  film
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="flame" style={{ color: "orange" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  flame
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="paper" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  paper
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="paper-plane" style={{ color: "#387ef5" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  paper-plane
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="cart" style={{ color: "red" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  cart
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="flask" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  flask
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="paw" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  paw
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="rose" style={{ color: "pink" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  rose
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="pint" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  pint
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="shuffle" style={{ color: "green" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  shuffle
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="keypad" style={{ color: "#387ef5" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  keypad
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="eye" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  eye
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="glasses" style={{ color: "#aaa" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  glasses
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="microphone" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  microphone
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="color-filter" style={{ color: "purple" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  color-filter
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="alarm" style={{ color: "green" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  alarm
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="medkit" style={{ color: "red" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  medkit
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="ionic" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  ionic
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="refresh" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  refresh
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="star-half" style={{ color: "gold" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  star-half
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="train" style={{ color: "#E14343" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  train
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="wine" style={{ color: "brown" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  wine
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="partly-sunny" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  partly-sunny
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon active name="nutrition" style={{ color: "red" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  nutrition
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="grid" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  grid
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="settings" style={{ color: "#555" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  settings
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="chatbubbles" style={{ color: "#27a" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  chatbubbles
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="speedometer" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  speedometer
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon active name="chatboxes" style={{ color: "green" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  chatboxes
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="cog" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  cog
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="baseball" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  baseball
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="bulb" style={{ color: "gold" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  bulb
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="calculator" style={{ color: "#889" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  calculator
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="rainy" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  rainy
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="videocam" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  videocam
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="play" style={{ color: "#f53d3d" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  play
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="disc" style={{ color: "#c76" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  disc
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="body" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  body
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="lock" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  lock
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="key" style={{ color: "gold" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  key
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="flag" style={{ color: "green" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  flag
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="skip-forward" style={{ color: "#999" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  skip-forward
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-github" style={{ color: "brown" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-github
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="barcode" style={{ color: "#387ef5" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  barcode
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-tux" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-tux
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="copy" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  copy
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="stopwatch" style={{ color: "#1df" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  stopwatch
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="medical" style={{ color: "red" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  medical
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="archive" style={{ color: "brown" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  archive
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="bookmark" style={{ color: "green" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  bookmark
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="clipboard" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  clipboard
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="happy" style={{ color: "#ffc125" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  happy
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="share" style={{ color: "#387ef5" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  share
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="bluetooth" style={{ color: "#387ef5" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  bluetooth
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="search" style={{ color: "#777" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  search
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="wifi" style={{ color: "blue" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  wifi
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon active name="hand" style={{ color: "#EBAB7F" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  hand
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="trash" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  trash
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="images" style={{ color: "red" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  images
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="attach" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  attach
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-facebook" style={{ color: "#46639E" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-facebook
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-googleplus" style={{ color: "#DC4A38" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-googleplus
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-twitter" style={{ color: "#1DA1F2" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-twitter
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Icon name="logo-github" style={{ color: "red" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-github
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-whatsapp" style={{ color: "#000" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-whatsapp
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-wordpress" style={{ color: "#46639E" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-wordpress
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="logo-youtube" style={{ color: "#DC4A38" }} />
                <Text numberOfLines={1} style={styles.iconText}>
                  logo-youtube
                </Text>
              </Col>
              <Col style={styles.col}>
                <Icon name="mail" style={{ color: "#1DA1F2" }} />
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

export default Icons;
