import { CategoriesTypes } from "../types/pet";
import buttonIcon from "../assets/buttonIcon.png";

import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"

 export const categoriesData:CategoriesTypes[]=[
    {
        heading: "Pet Grooming",
        content:
          "Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nail",
        img: c1,
        iconImg:buttonIcon
      },
      {
        heading: "Pet Clinic",
        content:
          "The pet clinic offers comprehensive veterinary services, including medical consultations, vaccinations, and surgical procedures, ensuring the well-being of furry companions. The clinic provides compassionate care and support to pets and their owners.",
        img: c2,
        iconImg:buttonIcon
      
      },
      {
        heading: "Pet Daycare",
        content:
          "Pet daycare offers a safe and stimulating environment for pets while their owners are away, providing companionship, exercise, and socialization opportunities. Supervised by trained staff, pets engage",
        img: c3,
        iconImg:buttonIcon
      },
      {
        heading: "Pet Training",
        content:
          "Pet training encompasses teaching animals essential behaviors and commands, fostering obedience and good manners. Training sessions focus on positive reinforcement techniques, such as rewards and praise.",
        img:c4,
        iconImg:buttonIcon
      },
]