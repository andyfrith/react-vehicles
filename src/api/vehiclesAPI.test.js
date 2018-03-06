import VehiclesAPI from './VehiclesAPI';

describe( 'Vehicles API', () => {
  it( 'should load acceptable vehicles data', async () => {
    const data = await VehiclesAPI.getAllVehicles();
    expect( data ).toBeDefined();

    data.forEach( ( element ) => {
      expect( element.make ).toBeDefined();
      expect( element.model ).toBeDefined();
      expect( element.year ).toBeDefined();
      expect( element.mileage ).toBeDefined();
      expect( element.image_url ).toBeDefined();
      expect( element.created_at ).toBeDefined();
    } );
  } );
} );
