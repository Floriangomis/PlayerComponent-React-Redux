export const selectTrack = (track) => {
    return { 
        type: 'SELECT_TRACK',
        payload: track
    }
}