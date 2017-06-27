import React, { Component } from 'react';
import { Platform } from 'react-native';

import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	Text,
	Right,
	Body,
	Left,
	Picker,
	Form,
	View,
	H3,
	Item as FormItem,
} from 'native-base';

import styles from './styles';

const Item = Picker.Item;

class NHPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: undefined,
			selected1: 'key1',
			selected2: undefined,
			selected3: 'key3',
			selected4: 'key4',
			selected5: 'key2',
			results: {
				items: [],
			},
		};
	}

	onValueChange(value: string) {
		this.setState({
			selected1: value,
		});
	}
	onValueChange2(value: string) {
		this.setState({
			selected2: value,
		});
	}
	onValueChange3(value: string) {
		this.setState({
			selected3: value,
		});
	}
	onValueChange4(value: string) {
		this.setState({
			selected4: value,
		});
	}
	onValueChange5(value: string) {
		this.setState({
			selected5: value,
		});
	}

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
						<Title>Picker</Title>
					</Body>
					<Right />
				</Header>

				<Content>
					<Form>
						<Text style={{ margin: 10, color: '#553a91' }}>Regular</Text>
						<Picker
							iosHeader="Select one"
							mode="dropdown"
							style={{ width: Platform.OS === 'ios' ? undefined : 200 }}
							selectedValue={this.state.selected1}
							onValueChange={this.onValueChange.bind(this)}
						>
							<Item label="Wallet" value="key0" />
							<Item label="ATM Card" value="key1" />
							<Item label="Debit Card" value="key2" />
							<Item label="Credit Card" value="key3" />
							<Item label="Net Banking" value="key4" />
						</Picker>
						{Platform.OS === 'ios' &&
							<View>
								<Text style={{ margin: 10, color: '#553a91' }}>
									Placeholder
								</Text>
								<Picker
									mode="dropdown"
									style={{ width: Platform.OS === 'ios' ? undefined : 120 }}
									placeholder="Select One"
									selectedValue={this.state.selected2}
									onValueChange={this.onValueChange2.bind(this)}
								>
									<Item label="Wallet" value="key0" />
									<Item label="ATM Card" value="key1" />
									<Item label="Debit Card" value="key2" />
									<Item label="Credit Card" value="key3" />
									<Item label="Net Banking" value="key4" />
								</Picker>
								<Text style={{ margin: 10, color: '#553a91' }}>
									Placeholder (without note)
								</Text>
								<Picker
									mode="dropdown"
									style={{ width: Platform.OS === 'ios' ? undefined : 120 }}
									placeholder="Select One"
									note={false}
									selectedValue={this.state.selected2}
									onValueChange={this.onValueChange2.bind(this)}
								>
									<Item label="Wallet" value="key0" />
									<Item label="ATM Card" value="key1" />
									<Item label="Debit Card" value="key2" />
									<Item label="Credit Card" value="key3" />
									<Item label="Net Banking" value="key4" />
								</Picker>
								<Text style={{ margin: 10, color: '#553a91' }}>
									Custom Back Button
								</Text>
								<Picker
									mode="dropdown"
									headerBackButtonText="Baaack!"
									style={{ width: Platform.OS === 'ios' ? undefined : 120 }}
									selectedValue={this.state.selected3}
									onValueChange={this.onValueChange3.bind(this)}
								>
									<Item label="Wallet" value="key0" />
									<Item label="ATM Card" value="key1" />
									<Item label="Debit Card" value="key2" />
									<Item label="Credit Card" value="key3" />
									<Item label="Net Banking" value="key4" />
								</Picker>
								<Text style={{ margin: 10, color: '#553a91' }}>
									Custom Header Text
								</Text>
								<Picker
									mode="dropdown"
									iosHeader="Your Header"
									style={{ width: Platform.OS === 'ios' ? undefined : 120 }}
									selectedValue={this.state.selected4}
									onValueChange={this.onValueChange4.bind(this)}
								>
									<Item label="Wallet" value="key0" />
									<Item label="ATM Card" value="key1" />
									<Item label="Debit Card" value="key2" />
									<Item label="Credit Card" value="key3" />
									<Item label="Net Banking" value="key4" />
								</Picker>
								<Text style={{ margin: 10, color: '#553a91' }}>
									Custom Header Style
								</Text>
								<Picker
									mode="dropdown"
									headerStyle={{ backgroundColor: '#b95dd3' }}
									headerBackButtonTextStyle={{ color: '#fff' }}
									headerTitleStyle={{ color: '#fff' }}
									style={{ width: Platform.OS === 'ios' ? undefined : 120 }}
									selectedValue={this.state.selected5}
									onValueChange={this.onValueChange5.bind(this)}
								>
									<Item label="Wallet" value="key0" />
									<Item label="ATM Card" value="key1" />
									<Item label="Debit Card" value="key2" />
									<Item label="Credit Card" value="key3" />
									<Item label="Net Banking" value="key4" />
								</Picker>
							</View>}
					</Form>
				</Content>
			</Container>
		);
	}
}

export default NHPicker;
