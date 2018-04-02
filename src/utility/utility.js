import moment  from 'moment';

export let formatDate = ( timestamp ) => {
    return moment(timestamp).format("MMM Do YY");  
};