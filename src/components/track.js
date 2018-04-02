import React from 'react';
import { selectTrack } from './actions/action-creator';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
      selectTrack: track => dispatch(selectTrack(track))
    };
  };

class ConnectedTrack extends React.Component {
    render() {
        const { track } = this.props;
        const { selectTrack } = this.props;
        return (
            <React.Fragment>
                <div className="track" onClick={ () => selectTrack(track) }>
                    <div className="track-cover">
                        <img alt="Album Cover" src={ track.cover } />
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

const Track = connect(null, mapDispatchToProps)(ConnectedTrack);

export default Track;