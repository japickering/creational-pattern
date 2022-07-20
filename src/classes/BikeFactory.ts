import Bike from '../classes/Bike';

export default class BikeFactory {
  public bikeType: string;

  constructor(bikeType: string) {
    this.bikeType = bikeType;
  }

  public setType(bikeType: string) {
    this.bikeType = bikeType;
  }

  public create(bikeType: string): Bike | undefined {
    this.setType(bikeType);

    switch (this.bikeType) {
      case 'town':
        return new Bike('town bike', 12);
      case 'mtb':
        return new Bike('mountain bike', 18);
      case 'hardtail':
        return new Bike('hardtail bike', 24);
      default:
        console.log('no matching bike');
        return undefined;
    }
  }
}
