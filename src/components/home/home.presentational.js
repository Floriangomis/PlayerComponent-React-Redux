import React from 'react';
import Track from '../track';

const HomePresentational = (props) => {
        const { listTrack } = props;
        return (
            <React.Fragment>
                <div className="tracks-container">
                    {
                        Object.keys(listTrack).map( (key) => 
                            <Track key={key} track={listTrack[key]} />
                        )
                    }
                </div>
            </React.Fragment>
        )
}

export default HomePresentational;