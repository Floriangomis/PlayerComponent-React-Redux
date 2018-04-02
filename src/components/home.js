import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Track from './track';

const mapStateToProps = state => {
    return { 
        data: state.data 
    };
};

class ConnectedHome extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <React.Fragment>
                <div className="tracks-container">
                    {
                        Object.keys(data).map( (key) => 
                            (
                                <Track key={key} track={data[key]} />
                            )
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}

ConnectedHome.propTypes = {
    data: PropTypes.array
  };

const Home = connect(mapStateToProps)(ConnectedHome);

export default Home;