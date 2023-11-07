export class PCComponent {
  id: number;
  type: string;
  brand: string;
  model: string;
  details: string;
  imageUrl: string;
  price: number;

  constructor(
    id: number,
    type: string,
    brand: string,
    model: string,
    details: string,
    imageUrl: string,
    price: number
  ) {
    this.id = id;
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.details = details;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}
