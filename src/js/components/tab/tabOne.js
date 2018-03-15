import React, { Component } from 'react';

import { Container, Content, Card, CardItem, Text, View, Body } from 'native-base';

import styles from './styles';

export default class TabOne extends Component {
	// eslint-disable-line

	render() {
		// eslint-disable-line
		return (
			<Content padder>
				<Card>
					<CardItem>
						<Body>
							<Text>NativeBase is open source and free.</Text>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Text>Platform specific codebase for components.</Text>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Text>Any native third-party libraries can be included.</Text>
						</Body>
					</CardItem>
				</Card>
			</Content>
		);
	}
}
