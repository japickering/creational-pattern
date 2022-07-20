// Creation design pattern in Typescript
import { BikeModel } from '../models/BikeModel';

const enum BikePrices {
  TownBikePrice = 299,
  UsualPrice = 399,
}

export default class Bike implements BikeModel {
  public name: string;
  public gears: number;

  private usualPrice = BikePrices.UsualPrice;
  private townBikePrice = BikePrices.UsualPrice;
  private taxRate = 0.2; // 20% VAT

  constructor(name: string, gears: number) {
    this.name = name;
    this.gears = gears;
  }

  public getName(): string {
    return this.name;
  }

  public getGears(): number {
    return this.gears;
  }

  private calcPrice(val: number): number {
    return Math.floor(val + val * this.taxRate);
  }

  public getPrice(): number {
    // to compare strings ensure bike name has matching case
    const name = this.name.toLowerCase();

    return name === 'town bike' ? this.calcPrice(this.townBikePrice) : this.calcPrice(this.usualPrice);
  }
}
