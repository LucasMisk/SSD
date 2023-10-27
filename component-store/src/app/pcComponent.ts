export class PCComponent {
  id: number;
  componentType: string;
  brand: string;
  model: string;
  details: string;
  imageUrl: string;
  price: number;

  constructor(
    id: number,
    componentType: string,
    brand: string,
    model: string,
    details: string,
    imageUrl: string,
    price: number
  ) {
    this.id = id;
    this.componentType = componentType;
    this.brand = brand;
    this.model = model;
    this.details = details;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}
