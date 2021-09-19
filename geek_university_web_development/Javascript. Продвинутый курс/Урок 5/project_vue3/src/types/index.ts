export interface IProduct {
  id: number,
  price: number,
  name: string,
}

export interface IServerProduct {
  id_product: number,
  price: number,
  product_name: string,
}

export interface ICartItem {
  id: number,
  price: number,
  name: string,
  quantity: number,
}
