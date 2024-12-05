interface ISmartphone {
  maker: string;
  name: string;
  battery: number;
  created_at: Date;
  features: string[];
}

let iPhoneX: ISmartphone = {
  maker: "Apple",
  name: "iPhone X",
  battery: 65,
  created_at: new Date(2017),
  features: ["camera", "5G", "fingerprint"],
};

let galaxyS10: ISmartphone = {
  maker: "samsung",
  name: "Glaaxy S10",
  battery: 40,
  created_at: new Date(2019),
  features: ["camera", "5G", "fingerprint"],
};

console.log(iPhoneX);
console.log(galaxyS10);
