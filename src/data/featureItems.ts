type Items = Array<Item>;
export type Item = {
  id: string;
  text: string;
  url: string;
};

export const featuresItems: Items = [
  {
    id: "01",
    text: "Best Coffee Flavour",
    url: "/assets/img/feature-1.jpg",
  },
  {
    id: "02",
    text: "Place to get lost",
    url: "/assets/img/feature-2.jpg",
  },
  {
    id: "03",
    text: "Proper roesting",
    url: "/assets/img/feature-3.jpg",
  },
];
