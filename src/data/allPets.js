import budgie from "../assets/birds/budgie1.jpg"
import budgie2 from "../assets/birds/budgie2.jpg"
import budgie3 from "../assets/birds/budgie3.jpg"
import budgie4 from "../assets/birds/budgie4.jpg"
import budgie5 from "../assets/birds/budgie5.jpg"


const allPets = [
  {
    id: 1,
    name: "Budgie",
    otherNames: "Parakeet",
    img: budgie,
    category: "Birds",
    shortDes: "Lovely and chaotic.",
    int: "Very intelligent",
    trainingLevel: "5/5",
    noiseLevel: "",
    messLevel: "",
    housing: {
      indoors: "Wide cage",
      outdoors: "Big wooden house",
    },
    dietTxt: "",
    dietFoods: ["seeds", "millets", "fruits"],
    lifespan: "up to 15 years if kept in a healthy life",
    illnessSigns: ["being sleepy", " plucking feathers"],
    imgs: [budgie, budgie2, budgie3, budgie4, budgie5],
    warnings: "",
    sound: "",
    monthlyCostTxt: "",
    monthlyCostNums: {
        vet: 200,
        food: 100
    },

  },
  {
    id: 2,
    name: "Cockatiel",
    otherNames: "Parakeet",
    img: budgie3,
    category: "Birds",
    shortDes: "Super lovely and cuddely.",
    int: "Very intelligent",
    trainingLevel: "5/5",
    noiseLevel: "",
    messLevel: "",
    housing: {
      indoors: "Wide cage",
      outdoors: "Big wooden house",
    },
    dietTxt: "",
    dietFoods: ["seeds", "millets", "fruits"],
    lifespan: "up to 15 years if kept in a healthy life",
    illnessSigns: ["being sleepy", " plucking feathers"],
    imgs: [budgie, budgie2, budgie3, budgie4, budgie5],
    warnings: "",
    sound: "",
    monthlyCostTxt: "",
    monthlyCostNums: {
        vet: 200,
        food: 100
    },

  },
];
export default allPets;
