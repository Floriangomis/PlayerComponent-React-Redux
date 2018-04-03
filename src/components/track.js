import React from 'react';
import { selectTrack } from './actions/action-creator';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
      selectTrack: track => dispatch(selectTrack(track))
    };
  };

const ConnectedTrack = (props) => {
    const { track } = props;
    const { selectTrack } = props;
    return (
        <div className="track" onClick={ () => selectTrack(track) }>
            <div className="track-cover">
                <img alt="Album Cover" src={ track.cover } />
            </div>
        </div>
    )
};

const Track = connect(null, mapDispatchToProps)(ConnectedTrack);

export default Track;