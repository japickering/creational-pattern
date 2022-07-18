// Use enum for fixed prices
const enum BikePrices {
  UsualPrice = 399,
  TownBikePrice = 299,
}

// Setup base model
interface BikeModel {
  name: string;
  gears: number;
  price: number;
  hasLock: boolean;
}

// Bike class
export default class Bike implements BikeModel {
  public name: string;
  public gears: number;
  public price: number;
  public hasLock: boolean;

  private usualPrice = BikePrices.UsualPrice;
  private townBikePrice = BikePrices.UsualPrice;
  private taxRate = 0.2; // 20% VAT

  constructor(name: string, gears: number, price: number, hasLock: boolean) {
    this.name = name;
    this.gears = gears;
    this.price = price;
    this.hasLock = hasLock;
  }

  public getName() {
    return this.name;
  }

  public getGears() {
    return this.gears;
  }

  public isLockFitted() {
    return this.hasLock ? 'YES' : 'NO';
  }

  // NOTE: Consider as separate module when price calcs become complex
  private calcPrice(val: number) {
    return Math.floor(val + val * this.taxRate);
  }

  public getPrice() {
    // ensure bike name has matching case
    const name = this.name.toLowerCase();

    return name === 'town bike' ? this.calcPrice(this.townBikePrice) : this.calcPrice(this.usualPrice);
  }
}
