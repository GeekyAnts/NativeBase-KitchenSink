import React, { Component } from 'react';

import { Container, Content, Card, CardItem, Text, Body } from 'native-base';

import styles from './styles';

export default class TabTwo extends Component {
	// eslint-disable-line

	render() {
		// eslint-disable-line
		return (
			<Content padder style={{ marginTop: 0 }}>
				<Card style={{ flex: 0 }}>
					<CardItem>
						<Body>
							<Text>
								NativeBase builds a layer on top of React Native that provides you with basic set of
								components for mobile application development. This helps you to build world-class
								application experiences on native platforms.
							</Text>
						</Body>
					</CardItem>
				</Card>
			</Content>
		);
	}
}
