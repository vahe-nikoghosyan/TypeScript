console.log('sending ...');

// Parameter 'data' implicitly has an 'any' type.
function sendAnalytics(data: string) {
    console.log(data);
}

sendAnalytics('Get data');
