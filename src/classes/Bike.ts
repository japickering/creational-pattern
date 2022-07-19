// Creation design pattern in Typescript

const enum BikePrices {
  UsualPrice = 399,
  TownBikePrice = 299,
}

interface BikeModel {
  name: string;
  gears: number;
  price: number;
}

export default class Bike implements BikeModel {
  public name: string;
  public gears: number;
  public price: number;

  public usualPrice = BikePrices.UsualPrice;
  public townBikePrice = BikePrices.UsualPrice;
  private taxRate = 0.2; // 20% VAT

  constructor(name: string, gears: number, price: number) {
    this.name = name;
    this.gears = gears;
    this.price = price;
  }

  public getName() {
    return this.name;
  }

  public getGears() {
    return this.gears;
  }

  private calcPrice(val: number) {
    return Math.floor(val + val * this.taxRate);
  }

  public getPrice() {
    // to compare strings ensure bike name has matching case
    const name = this.name.toLowerCase();

    return name === 'town bike' ? this.calcPrice(this.townBikePrice) : this.calcPrice(this.usualPrice);
  }
}
