export const playerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_TRACK':
            return {
                ...state,
                currentTrack: {
                    cover: action.payload.cover,
                    link: action.payload.link,
                    artist: action.payload.artist,
                    title: action.payload.title
                }
            };
        case 'UPDATE_CURRENT_TIME':
            return {
                ...state,
                playerState: {
                    ...state.playerState,
                    currentTime: action.payload.currentTime
                }
            };
        default:
            return state;
    }
};