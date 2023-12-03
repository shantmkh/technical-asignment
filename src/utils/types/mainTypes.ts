export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>
}

export interface IAddress {
  address: string;
  city: string;
  postalCode: string;
  state: string;
}

export interface IUser {
  id: number,
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  image: string;
  address: IAddress,
  action: string;
}