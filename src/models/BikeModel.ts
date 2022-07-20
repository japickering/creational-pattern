export interface BikeModel {
  name: string;
  gears: number;
  getName: () => string;
  getGears: () => number;
  getPrice: () => number;
}
