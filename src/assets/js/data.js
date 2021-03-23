let person = {
  username: "",
  email: "",
  pass: "",
  firstName: "",
  lastName: "",
  birthday: "",
  address1: "",
  address2: "",
  postalCode: "",
  country: "",
  phoneCode: "",
  phone: "",
  regularAddress: "",
};
let personCar = {
  productId: "",
  color: "",
  extras: [],
  price: "",
  type: "",
  date: "",
  gift: false,
  shipping: "",
  total: "",
};
let userFormIsValid = {
  username: false,
  email: false,
  pass: false,
  confPass: false,
};
let addressFormIsValid = {
  firstName: false,
  lastName: false,
  birthday: false,
  address: false,
  postalCode: false,
  country: false,
  phoneCode: false,
  phone: false,
};

const cars = [
  {
    id: "model-s",
    name: "Model S",
    price: "79990",
    specs: [
      { name: "Autonomy", value: "652km" },
      { name: "Maximum speed", value: "250km/h" },
      { name: "0-100 km/h", value: "3,8s" },
    ],
    color: [
      {
        id: "white",
        hex: "#f2f2f2",
        img: [
          "assets/img/1-model-s/1-white/model-s-white-1.png",
          "assets/img/1-model-s/1-white/model-s-white-2.jpg",
          "assets/img/1-model-s/1-white/model-s-white-3.jpg",
          "assets/img/1-model-s/1-white/model-s-white-4.jpg",
          "assets/img/1-model-s/1-white/model-s-white-5.jpg",
        ],
      },
      {
        id: "black",
        hex: "#1d1d1d",
        img: [
          "assets/img/1-model-s/2-black/model-s-black-1.png",
          "assets/img/1-model-s/2-black/model-s-black-2.jpg",
          "assets/img/1-model-s/2-black/model-s-black-3.jpg",
          "assets/img/1-model-s/2-black/model-s-black-4.jpg",
          "assets/img/1-model-s/2-black/model-s-black-5.jpg",
        ],
      },
      {
        id: "grey",
        hex: "#5e626e",
        img: [
          "assets/img/1-model-s/3-grey/model-s-grey-1.png",
          "assets/img/1-model-s/3-grey/model-s-grey-2.jpg",
          "assets/img/1-model-s/3-grey/model-s-grey-3.jpg",
          "assets/img/1-model-s/3-grey/model-s-grey-4.jpg",
          "assets/img/1-model-s/3-grey/model-s-grey-5.jpg",
        ],
      },
      {
        id: "blue",
        hex: "#1d3189",
        img: [
          "assets/img/1-model-s/4-blue/model-s-blue-1.png",
          "assets/img/1-model-s/4-blue/model-s-blue-2.jpg",
          "assets/img/1-model-s/4-blue/model-s-blue-3.jpg",
          "assets/img/1-model-s/4-blue/model-s-blue-4.jpg",
          "assets/img/1-model-s/4-blue/model-s-blue-5.jpg",
        ],
      },
      {
        id: "red",
        hex: "#b3141c",
        img: [
          "assets/img/1-model-s/5-red/model-s-red-1.png",
          "assets/img/1-model-s/5-red/model-s-red-2.jpg",
          "assets/img/1-model-s/5-red/model-s-red-3.jpg",
          "assets/img/1-model-s/5-red/model-s-red-4.jpg",
          "assets/img/1-model-s/5-red/model-s-red-5.jpg",
        ],
      },
    ],
    extras: [
      { name: "Autopilot", price: 7500 },
      { name: "Performance", price: 17000 },
    ],
  },
  {
    id: "model-3",
    name: "Model 3",
    price: "49000",
    specs: [
      { name: "Autonomy", value: "430km" },
      { name: "Maximum speed", value: "225km/h" },
      { name: "0-100 km/h", value: "5,6s" },
    ],
    color: [
      {
        id: "white",
        hex: "#f2f2f2",
        img: [
          "assets/img/2-model-3/1-white/model-3-white-1.jpg",
          "assets/img/2-model-3/1-white/model-3-white-2.jpg",
          "assets/img/2-model-3/1-white/model-3-white-3.jpg",
          "assets/img/2-model-3/1-white/model-3-white-4.jpg",
        ],
      },
      {
        id: "black",
        hex: "#1d1d1d",
        img: [
          "assets/img/2-model-3/2-black/model-3-black-1.jpg",
          "assets/img/2-model-3/2-black/model-3-black-2.jpg",
          "assets/img/2-model-3/2-black/model-3-black-3.jpg",
          "assets/img/2-model-3/2-black/model-3-black-4.jpg",
        ],
      },
      {
        id: "grey",
        hex: "#5e626e",
        img: [
          "assets/img/2-model-3/3-grey/model-3-grey-1.jpg",
          "assets/img/2-model-3/3-grey/model-3-grey-2.jpg",
          "assets/img/2-model-3/3-grey/model-3-grey-3.jpg",
          "assets/img/2-model-3/3-grey/model-3-grey-4.jpg",
        ],
      },
      {
        id: "blue",
        hex: "#1d3189",
        img: [
          "assets/img/2-model-3/4-blue/model-3-blue-1.jpg",
          "assets/img/2-model-3/4-blue/model-3-blue-2.jpg",
          "assets/img/2-model-3/4-blue/model-3-blue-3.jpg",
          "assets/img/2-model-3/4-blue/model-3-blue-4.jpg",
        ],
      },
      {
        id: "red",
        hex: "#b3141c",
        img: [
          "assets/img/2-model-3/5-red/model-3-red-1.jpg",
          "assets/img/2-model-3/5-red/model-3-red-2.jpg",
          "assets/img/2-model-3/5-red/model-3-red-3.jpg",
          "assets/img/2-model-3/5-red/model-3-red-4.jpeg",
        ],
      },
    ],
    extras: [
      { name: "Autopilot", price: 7500 },
      { name: "Performance", price: 16990 },
    ],
  },
  {
    id: "model-x",
    name: "Model X",
    price: "88990",
    specs: [
      { name: "Autonomy", value: "561km" },
      { name: "Maximum speed", value: "250km/h" },
      { name: "0-100 km/h", value: "3,8s" },
    ],
    extras: [
      { name: "Autopilot", price: 7500 },
      { name: "Performance", price: 17000 },
    ],
    color: [
      {
        id: "white",
        hex: "#f2f2f2",
        img: [
          "assets/img/3-model-x/1-white/model-x-white-1.png",
          "assets/img/3-model-x/1-white/model-x-white-2.jpg",
          "assets/img/3-model-x/1-white/model-x-white-3.jpg",
          "assets/img/3-model-x/1-white/model-x-white-4.jpg",
          "assets/img/3-model-x/1-white/model-x-white-5.jpg",
        ],
      },
      {
        id: "black",
        hex: "#1d1d1d",
        img: [
          "assets/img/3-model-x/2-black/model-x-black-1.png",
          "assets/img/3-model-x/2-black/model-x-black-2.jpg",
          "assets/img/3-model-x/2-black/model-x-black-3.jpg",
          "assets/img/3-model-x/2-black/model-x-black-4.jpg",
          "assets/img/3-model-x/2-black/model-x-black-5.jpg",
        ],
      },
      {
        id: "grey",
        hex: "#5e626e",
        img: [
          "assets/img/3-model-x/3-grey/model-x-grey-1.png",
          "assets/img/3-model-x/3-grey/model-x-grey-2.jpg",
          "assets/img/3-model-x/3-grey/model-x-grey-3.jpg",
          "assets/img/3-model-x/3-grey/model-x-grey-4.jpg",
          "assets/img/3-model-x/3-grey/model-x-grey-5.jpg",
        ],
      },
      {
        id: "blue",
        hex: "#1d3189",
        img: [
          "assets/img/3-model-x/4-blue/model-x-blue-1.png",
          "assets/img/3-model-x/4-blue/model-x-blue-2.jpg",
          "assets/img/3-model-x/4-blue/model-x-blue-3.jpg",
          "assets/img/3-model-x/4-blue/model-x-blue-4.jpg",
          "assets/img/3-model-x/4-blue/model-x-blue-5.jpg",
        ],
      },
      {
        id: "red",
        hex: "#b3141c",
        img: [
          "assets/img/3-model-x/5-red/model-x-red-1.png",
          "assets/img/3-model-x/5-red/model-x-red-2.jpg",
          "assets/img/3-model-x/5-red/model-x-red-3.jpg",
          "assets/img/3-model-x/5-red/model-x-red-4.jpg",
          "assets/img/3-model-x/5-red/model-x-red-5.jpg",
        ],
      },
    ],
  },
  {
    id: "model-y",
    name: "Model Y",
    price: "64000",
    specs: [
      { name: "Autonomy", value: "505km" },
      { name: "Maximum speed", value: "217km/h" },
      { name: "0-100 km/h", value: "5,1s" },
    ],
    extras: [
      { name: "Autopilot", price: 7500 },
      { name: "Performance", price: 16000 },
    ],
    color: [
      {
        id: "white",
        hex: "#f2f2f2",
        img: [
          "assets/img/4-model-y/1-white/model-y-white-1.png",
          "assets/img/4-model-y/1-white/model-y-white-2.png",
          "assets/img/4-model-y/1-white/model-y-white-3.png",
          "assets/img/4-model-y/1-white/model-y-white-4.jpg",
        ],
      },
      {
        id: "black",
        hex: "#1d1d1d",
        img: [
          "assets/img/4-model-y/2-black/model-y-black-1.png",
          "assets/img/4-model-y/2-black/model-y-black-2.jpg",
          "assets/img/4-model-y/2-black/model-y-black-3.jpg",
          "assets/img/4-model-y/2-black/model-y-black-4.jpg",
        ],
      },
      {
        id: "grey",
        hex: "#5e626e",
        img: [
          "assets/img/4-model-y/3-grey/model-y-grey-1.png",
          "assets/img/4-model-y/3-grey/model-y-grey-2.jpg",
          "assets/img/4-model-y/3-grey/model-y-grey-3.jpg",
          "assets/img/4-model-y/3-grey/model-y-grey-4.jpg",
        ],
      },
      {
        id: "blue",
        hex: "#1d3189",
        img: [
          "assets/img/4-model-y/4-blue/model-y-blue-1.png",
          "assets/img/4-model-y/4-blue/model-y-blue-2.jpg",
          "assets/img/4-model-y/4-blue/model-y-blue-3.jpg",
          "assets/img/4-model-y/4-blue/model-y-blue-4.jpg",
        ],
      },
      {
        id: "red",
        hex: "#b3141c",
        img: [
          "assets/img/4-model-y/5-red/model-y-red-1.png",
          "assets/img/4-model-y/5-red/model-y-red-2.jpg",
          "assets/img/4-model-y/5-red/model-y-red-3.jpg",
          "assets/img/4-model-y/5-red/model-y-red-4.jpg",
        ],
      },
    ],
  },
];
