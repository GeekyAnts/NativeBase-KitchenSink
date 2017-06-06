import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";

import styles from "./styles";

const sankhadeep = require("../../../img/contacts/sankhadeep.png");
const supriya = require("../../../img/contacts/supriya.png");
const himanshu = require("../../../img/contacts/himanshu.png");
const shweta = require("../../../img/contacts/shweta.png");
const shruti = require("../../../img/contacts/shruti.png");
const shivraj = require("../../../img/contacts/shivraj.jpg");

const datas = [
  {
    img: sankhadeep,
    text: "Sankhadeep",
    note: "Its time to build a difference . ."
  },
  {
    img: supriya,
    text: "Supriya",
    note: "One needs courage to be happy and smiling all time . . "
  },
  {
    img: himanshu,
    text: "Himanshu",
    note: "Live a life style that matchs your vision"
  },
  {
    img: shweta,
    text: "Shweta",
    note: "Failure is temporary, giving up makes it permanent"
  },
  {
    img: shruti,
    text: "Shruti",
    note: "The biggest risk is a missed opportunity !!"
  },
  {
    img: shivraj,
    text: "Shivraj",
    note: "Time changes everything . ."
  }
];

class NHListThumbnail extends Component {
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
            <Title>List Thumbnail</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square size={55} source={data.img} />
                </Left>
                <Body>
                  <Text>{data.text}</Text>
                  <Text numberOfLines={1} note>{data.note}</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHListThumbnail;
