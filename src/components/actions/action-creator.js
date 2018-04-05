export const selectTrack = (track) => {
    return { 
        type: 'SELECT_TRACK',
        payload: track
    }
};

export const updateCurrentTime = (currentTime) => {
    return {
        type: 'UPDATE_CURRENT_TIME',
        payload: { 
            currentTime: currentTime 
        }
    }
};