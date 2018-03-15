import React, { Component } from "react";
import { Image, View } from "react-native";

import {
	Container,
	Header,
	Title,
	Button,
	IconNB,
	DeckSwiper,
	Card,
	CardItem,
	Icon,
	Thumbnail,
	Text,
	Left,
	Right,
	Body,
	Content,
	List,
	ListItem,
} from "native-base";

import styles from "./styles";

const datas = [
	{
		route: "SimpleDeck",
		text: "Simple DeckSwiper",
	},
	{
		route: "AdvancedDeck",
		text: "Advanced DeckSwiper",
	},
];
class NHDeckSwiper extends Component {
	// eslint-disable-line

	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title>Deck Swiper</Title>
					</Body>
					<Right />
				</Header>

				<Content>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button onPress={() => this.props.navigation.navigate(data.route)}>
								<Text>
									{data.text}
								</Text>
								<Right>
									<Icon name="arrow-forward" style={{ color: "#999" }} />
								</Right>
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default NHDeckSwiper;
