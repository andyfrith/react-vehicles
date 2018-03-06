import VehiclesAPI from './VehiclesAPI';

describe( 'Vehicles API', () => {
  it( 'should load acceptable vehicles data', async () => {
    const data = await VehiclesAPI.getAllVehicles();
    expect( data ).toBeDefined();

    for ( let n = 0; n < data.length; n += 1 ) {
      expect( data[ n ].make ).toBeDefined();
      expect( data[ n ].model ).toBeDefined();
      expect( data[ n ].year ).toBeDefined();
      expect( data[ n ].mileage ).toBeDefined();
      expect( data[ n ].image_url ).toBeDefined();
      expect( data[ n ].created_at ).toBeDefined();
    }
  } );
} );
