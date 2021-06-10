// @flow

import React, { Component } from 'react';
import { Slider, View } from 'react-native';
import { withTheme } from 'react-native-paper';

import { Icon, IconVolumeEmpty } from '../../../base/icons';
import { VOLUME_SLIDER_SCALE } from '../../constants';

import styles from './styles';

/**
 * The type of the React {@code Component} props of {@link VolumeSlider}.
 */
type Props = {

    /**
     * The value of the audio slider should display at when the component first
     * mounts. Changes will be stored in state. The value should be a number
     * between 0 and 1.
     */
    initialValue: number,

    /**
     * The callback to invoke when the audio slider value changes.
     */
    onChange: Function,

    /**
     * Theme used for styles.
     */
    theme: Object
};

/**
 * The type of the React {@code Component} state of {@link VolumeSlider}.
 */
type State = {

    /**
     * The volume of the participant's audio element. The value will
     * be represented by a slider.
     */
    volumeLevel: number
};

/**
 * Component that renders the volume slider.
 *
 * @returns {React$Element<any>}
 */
class VolumeSlider extends Component<Props, State> {

    /**
     * Initializes a new {@code VolumeSlider} instance.
     *
     * @param {Object} props - The read-only properties with which the new
     * instance is to be initialized.
     */
    constructor(props: Props) {
        super(props);

        this.state = {
            volumeLevel: (props.initialValue || 0) * VOLUME_SLIDER_SCALE
        };

        // Bind event handlers so they are only bound once for every instance.
        this._onVolumeChange = this._onVolumeChange.bind(this);
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { theme } = this.props;
        const { volumeLevel } = this.state;
        const { palette } = theme;

        return (
            <View style = { styles.volumeSliderContainer }>
                <Icon
                    size = { 24 }
                    src = { IconVolumeEmpty }
                    style = { styles.volumeIcon } />
                <Slider
                    maximumTrackTintColor = { palette.field02 }
                    maximumValue = { VOLUME_SLIDER_SCALE }
                    minimumTrackTintColor = { palette.action01 }
                    minimumValue = { 0 }
                    onValueChange = { this._onVolumeChange }
                    style = { styles.sliderContainer }
                    thumbTintColor = { palette.field02 }
                    value = { volumeLevel } />
            </View>

        );
    }

    _onVolumeChange: (Object) => void;

    /**
     * Sets the internal state of the volume level for the volume slider.
     * Invokes the prop onVolumeChange to notify of volume changes.
     *
     * @param {number} volumeLevel - Selected volume on slider.
     * @private
     * @returns {void}
     */
    _onVolumeChange(volumeLevel) {
        const { onChange } = this.props;

        onChange(volumeLevel / VOLUME_SLIDER_SCALE);
        this.setState({ volumeLevel });
    }
}

export default withTheme(VolumeSlider);

