import React, { Component } from 'react';

import { Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem } from 'native-base';

import styles from './styles';

const datas = [
	{
		route: 'NHBasicList',
		text: 'Basic List',
	},
	{
		route: 'NHListDivider',
		text: 'List Divider',
	},
	{
		route: 'NHListHeader',
		text: 'List Header',
	},
	{
		route: 'NHListIcon',
		text: 'List Icon',
	},
	{
		route: 'NHListAvatar',
		text: 'List Avatar',
	},
	{
		route: 'NHListThumbnail',
		text: 'List Thumbnail',
	},
	,
	{
		route: 'NHListSeparator',
		text: 'List Separator',
	},
];

class NHList extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title>List</Title>
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
									<Icon name="arrow-forward" />
								</Right>
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default NHList;
