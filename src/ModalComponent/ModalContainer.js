import { StyleSheet, View, AppRegistry, Animated } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

let styles = StyleSheet.create({
    defaultModalStyle: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
});

class ModalContainer extends Component {
    static displayName = 'ModalContainer';

    static propTypes = {
        ...Animated.View.propTypes,
        visible: PropTypes.bool
    };

    static defaultProps = {
        visible: false
    };

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.props.visible) {
            this.setState({
                visible: nextProps.visible
            });
        }
    };

    shouldComponentUpdate(nextProps) {
        return nextProps.visible || nextProps.visible !== this.props.visible;
    };

    render() {
        let {props} = this;
        return this.state.visible ? <View
            {...props}
            style={[
                props.style[0] || styles.defaultModalStyle,
                props.style[1]
            ]}
        /> : null;
    }
}

export default ModalContainer;
export class AnimatedModalContainer extends ModalContainer {
    render() {
        let {props} = this;
        return this.state.visible ? <Animated.View
            {...props}
            style={[
                props.style[0] || styles.defaultModalStyle,
                props.style[1]
            ]}
        /> : null;
    }
}
