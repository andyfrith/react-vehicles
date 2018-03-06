const API_ENDPOINT =
  'https://gist.githubusercontent.com/creatifyme/2a334c00a117097bfdb47f031edf292c/raw/efb52ecf1cf92e2261f504ec7639c68b5ff390bd/cars.json';

// const LOCAL_API_ENDPOINT = './data/vehicles.json';

class VehiclesAPI {
  static getAllVehicles = () =>
    fetch( API_ENDPOINT ).then( response => response.json() );
  // .catch( error => error );
}

export default VehiclesAPI;
