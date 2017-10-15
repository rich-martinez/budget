import 'whatwg-fetch';

export default function getAverageCostOfGasForRegion(regionId, countryId, requestOptions = {}) {
    const url = `http://fuelinsights.gasbuddy.com/api/LiveAvg/?id=${regionId}&countryID=${countryId}`;

    return fetch(url, requestOptions).then(function(response) {
    // response.status     //=> number 100–599
    // response.statusText //=> String
    // response.headers    //=> Headers
    // response.url        //=> String
    return response.text()
    }, function(error) {
        console.error(error.message);
    });
}