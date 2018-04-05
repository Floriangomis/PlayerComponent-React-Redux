import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomePresentational from './home.presentational';

const mapStateToProps = state => {
    return { 
        data: state.data 
    };
};

const HomeContainer = (props) => {
    const { data } = props;
    return (
        <HomePresentational listTrack={data}/>
    )
}

HomeContainer.propTypes = {
    data: PropTypes.array
};

const Home = connect(mapStateToProps)(HomeContainer);

export default Home;