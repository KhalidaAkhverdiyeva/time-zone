interface WatchCardProp {
  id: number;
  img: string;
  price: number;
  name: string;
  onAddToCart: (item: {
    id: number;
    img: string;
    price: number;
    name: string;
  }) => void;
  onRemoveFromCart: (id: number) => void;
}
