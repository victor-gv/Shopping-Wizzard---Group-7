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
          "https://static-assets.tesla.com/configurator/compositor?&options=$WTAS,$PPSW,$MTS07&view=STUD_3QTR_V2&model=ms&size=1442&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3P,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3W,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3C,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://motor.elpais.com/wp-content/uploads/2020/09/Tesla-Model-S-2-1800x728.jpg",
        ],
      },
      {
        id: "black",
        hex: "#1d1d1d",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$WTAS,$PBSB,$MTS07&view=STUD_3QTR_V2&model=ms&size=1442&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3P,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3W,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3C,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/35d15221-0a5f-4dce-b484-a4db67b81dd2/bvlatuR/std/0x0/model-s@2x",
        ],
      },
      {
        id: "grey",
        hex: "#5e626e",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$WTAS,$PMNG,$MTS07&view=STUD_3QTR_V2&model=ms&size=1442&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3P,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3W,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3C,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://cdn.shopify.com/s/files/1/0043/8471/8938/products/157660142016119757.jpg?v=1581118422",
        ],
      },
      {
        id: "blue",
        hex: "#1d3189",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$WTAS,$PPSB,$MTS07&view=STUD_3QTR_V2&model=ms&size=1442&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3P,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3W,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3C,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://cdn.motor1.com/images/mgl/lVwvM/s1/dream-giveaway-tesla-model-s-p100d.jpg",
        ],
      },
      {
        id: "red",
        hex: "#b3141c",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$WTAS,$PPMR,$MTS07&view=STUD_3QTR_V2&model=ms&size=1442&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3P,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3W,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3C,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/c566e836-ea95-462a-99c0-cb8af3553a30/bvlatuR/std/0x0/model-s-performance",
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
          "https://static-assets.tesla.com/configurator/compositor?&options=$MT320,$PPSW,$W40B,$IBB0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$IBB0,$PPSW,$MT320&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$IBW0,$PPSW,$MT320&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://www.adslzone.net/app/uploads-adslzone.net/2020/07/tesla-model-3-blanco.jpg",
        ],
      },
      {
        id: "black",
        hex: "#1d1d1d",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$MT320,$PBSB,$W40B,$IBW0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$IBB0,$PBSB,$MT320&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$IBW0,$PBSB,$MT320&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://d500.epimg.net/cincodias/imagenes/2018/05/18/motor/1526649630_930114_1526649853_noticia_normal.jpg",
        ],
      },
      {
        id: "grey",
        hex: "#5e626e",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$MT320,$PMNG,$W40B,$IBW0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$IBB0,$PMNG,$MT320&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$IBW0,$PMNG,$MT320&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/01/28/15802223326244.jpg",
        ],
      },
      {
        id: "blue",
        hex: "#1d3189",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$MT320,$PPSB,$W40B,$IBW0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$IBB0,$PPSB,$MT320&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$IBW0,$PPSB,$MT320&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://www.euribor.com.es/wp-content/uploads/2019/01/tesla-model-3.jpg",
        ],
      },
      {
        id: "red",
        hex: "#b3141c",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$MT320,$PPMR,$W40B,$IBW0&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$IBB0,$PPMR,$MT320&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$IBW0,$PPMR,$MT320&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://www.autopista.es/uploads/s1/77/57/82/7/el-tesla-model-3-aumenta-su-autonomia-pero-no-su-precio.jpeg",
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
          "https://static-assets.tesla.com/configurator/compositor?&options=$WT20,$PPSW,$MTX07&view=STUD_3QTR_V2&model=mx&size=1442&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3P,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3W,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3C,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/efbb6471-e1b8-4533-b41a-6df9d50c0a42/bvlatuR/std/0x0/performance-hero@2",
        ],
      },
      {
        id: "black",
        hex: "#1d1d1d",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$WT20,$PBSB,$MTX07&view=STUD_3QTR_V2&model=mx&size=1442&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3P,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3W,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3C,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://imagenes.km77.com/fotos/bbtcontent/clipping/KM7KPH20170615_0020/3.jpg",
        ],
      },
      {
        id: "grey",
        hex: "#5e626e",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$WT20,$PMNG,$MTX07&view=STUD_3QTR_V2&model=mx&size=1442&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3P,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3W,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3C,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://car-images.bauersecure.com/pagefiles/92539/01tesla-model-x.jpg",
        ],
      },
      {
        id: "blue",
        hex: "#1d3189",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$WT20,$PPSB,$MTX07&view=STUD_3QTR_V2&model=mx&size=1442&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3P,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3W,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3C,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://i1.wp.com/www.insidehr.com.au/wp-content/uploads/2019/04/Tesla-Model-X-100D.jpg?fit=1000%2C500&ssl=1",
        ],
      },
      {
        id: "red",
        hex: "#b3141c",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$WT20,$PPMR,$MTX07&view=STUD_3QTR_V2&model=mx&size=1442&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3P,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3W,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INB3C,$PPSW,$CC01&view=STUD_SEAT_V2&model=mx&size=1441&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://i.gaw.to/vehicles/photos/09/31/093199_2019_tesla_Model_X.jpg?1024x640",
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
          "https://static-assets.tesla.com/configurator/compositor?&options=$WY19B,$PPSW,$DV4W,$MTY03,$INYPB&view=STUD_3QTR&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INYPB,$PPSW,$DV4W&view=STUD_SEAT&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INYPW,$PPSW,$DV4W&view=STUD_SEAT&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://www.hibridosyelectricos.com/media/hibridos/images/2020/02/25/2020022519435898451.jpg",
        ],
      },
      {
        id: "black",
        hex: "#1d1d1d",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$WY19B,$PBSB,$DV4W,$MTY03,$INYPB&view=STUD_3QTR&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INYPB,$PPSW,$DV4W&view=STUD_SEAT&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INYPW,$PPSW,$DV4W&view=STUD_SEAT&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://s1.eestatic.com/2020/01/22/omicrono/Omicrono_461715346_143046758_1024x576.jpg",
        ],
      },
      {
        id: "grey",
        hex: "#5e626e",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$WY19B,$PMNG,$DV4W,$MTY03,$INYPB&view=STUD_3QTR&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INYPB,$PPSW,$DV4W&view=STUD_SEAT&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INYPW,$PPSW,$DV4W&view=STUD_SEAT&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-tesla-model-y-long-range-102-1592842278.jpg?crop=0.612xw:0.459xh;0.146xw,0.454xh&resize=640:*",
        ],
      },
      {
        id: "blue",
        hex: "#1d3189",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$WY19B,$PPSB,$DV4W,$MTY03,$INYPB&view=STUD_3QTR&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INYPB,$PPSW,$DV4W&view=STUD_SEAT&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INYPW,$PPSW,$DV4W&view=STUD_SEAT&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/03/15/15526726421267.jpg",
        ],
      },
      {
        id: "red",
        hex: "#b3141c",
        img: [
          "https://static-assets.tesla.com/configurator/compositor?&options=$WY19B,$PPMR,$DV4W,$MTY03,$INYPB&view=STUD_3QTR&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INYPB,$PPSW,$DV4W&view=STUD_SEAT&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://static-assets.tesla.com/configurator/compositor?&options=$INYPW,$PPSW,$DV4W&view=STUD_SEAT&model=my&size=1441&bkba_opt=1&version=v0028d202011130359&crop=0,0,0,0&version=v0028d202011130359",
          "https://s1.eestatic.com/2020/01/08/omicrono/Omicrono_458215436_141987361_1024x576.jpg",
        ],
      },
    ],
  },
];
