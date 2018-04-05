import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AudioPlayer from './audio-player';
import { updateCurrentTime } from '../actions/action-creator'; 

const mapStateToProps = state => {
    return { 
        currentTrack: state.currentTrack,
        playerState: state.playerState
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateCurrentTime: currentTime => dispatch(updateCurrentTime(currentTime))
    };
};

class PlayerContainer extends Component {
    constructor() {
        super();
        this.audioPlayer = new AudioPlayer();
        this.bindEventToAudioPlayer();
    };

    componentDidUpdate() {
        const { currentTrack, playerState } = this.props;
        this.playCurrentTrack(currentTrack);
    };

    bindEventToAudioPlayer = () => {
        // this.audioPlayer.on('playing', this.onAudioStarted);
        this.audioPlayer.on('timeupdate', this.getCurrentTime);
        // this.audioPlayer.on('loadedmetadata', this.getDuration);
        // this.audioPlayer.on('seeking', this.onSeekingTrack);
        // this.audioPlayer.on('seeked', this.onSeekedTrack);
        // this.audioPlayer.on('pause', this.onAudioPaused);
        // this.audioPlayer.on('ended', this.onAudioEnded);
        // this.audioPlayer.on('volumechange', this.onVolumeChange);
    };
    
    pausePlayer = () => {
        this.audioPlayer.pause();
    };

    playCurrentTrack = (currentrack) => {
        this.audioPlayer.play(currentrack)
            .then( () => { 
                console.log(`Song Launched ${JSON.stringify(currentrack)}`); 
            })
            .catch( err => { 
                return; 
            });
    };

    // Event handler for audio player
    getCurrentTime = event => {
        this.props.updateCurrentTime(Math.floor(event.target.currentTime));
    };



    render() {
        return (
            <div>
                <div onClick={ () => this.pausePlayer() }>
                    <h1> Pause </h1>
                </div>
            </div>
        )
    }
};

PlayerContainer.propTypes = {
    currentTrack: PropTypes.object,
    playerState: PropTypes.object
};

const Player = connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
export default Player;