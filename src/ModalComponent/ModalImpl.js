import { View, Animated } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RootSiblings from './SiblingsManager';

import ModalContainer, { AnimatedModalContainer } from './ModalContainer';

class Modal extends Component {
    static displayName = 'Modal';
    static propTypes = {
        visible: PropTypes.bool,
        ...Animated.View.propTypes
    };
    static defaultProps = {
        visible: false
    };

    componentWillMount() {
        this._modal = new RootSiblings(
            <ModalContainer
                {...this.props}
            />
        );
    };

    componentWillReceiveProps(nextProps) {
        this._modal.update(
            <ModalContainer
                {...nextProps}
            />
        );
    };

    componentWillUnmount() {
        this._modal.destroy();
    };

    render() {
        return null;
    }
}

class AnimatedModal extends Modal {
    componentWillMount() {
        this._modal = new RootSiblings(<AnimatedModalContainer
            {...this.props}
        />);
    };

    componentWillReceiveProps(nextProps)  {
        this._modal.update(<AnimatedModalContainer
            {...nextProps}
        />);
    };
}

if (!Animated.Modal) {
    Animated.Modal = AnimatedModal;
}

export {
    RootSiblings as Manager,
    AnimatedModal as Animated
}
export default Modal;
