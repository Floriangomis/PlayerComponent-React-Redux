import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const mapStateToProps = state => {
    return { 
        currentTrack: state.currentTrack 
    };
};

class ConnectedPlayer extends React.Component {

    player = React.createRef();

    componentWillMount() {
        this.playerStore = this.props.playerStore;
    };

    componentDidUpdate() {
        if(this.props.currentTrack) {
            this.selectSongHandler();
        }
    };

    updateAudioElementSrc = () => {
        this.player.current.src = this.props.currentTrack.link;
    };

    selectSongHandler = () => {
        this.updateAudioElementSrc();
        this.play();
    };

    play = () => {
        let playPromise = this.player.current.play();
        if( playPromise !== undefined ) {
            playPromise.then( () => { console.log('Song Launched'); })
            .catch( err => { return; });
        }
    };

    render() {
        const { currentTrack } = this.props;
        return (
            <div className={ 'player-container ' + (currentTrack ? 'show' : '') }>
                <audio controls="controls" ref={this.player}/>
                <div className='title-track'>
                    { currentTrack ?  currentTrack.artist + ' - ' + currentTrack.title  :  null }
                </div>
            </div>
        )
    }
};

ConnectedPlayer.propTypes = {
    data: PropTypes.object
};

const Player = connect(mapStateToProps)(ConnectedPlayer);

export default Player;