export class Information {
  name: string;
  age: number;
  address: string;

  getInfo() {
    return `${this.name} ${this.age} ${this.address}`;
  }
}
