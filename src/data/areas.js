import areaOneImage from "../assets/founty.jpg";
import areaTwoImage from "../assets/area_2.jpg";
import areaThreeImage from "../assets/marina.png";
import areaFourImage from "../assets/area_4.jpg";
import areaFiveImage from "../assets/taghazout.png";
import areaSixImage from "../assets/tamraght.png";

export const navItems = [
  { label: "Categories", href: "#categories" },
  { label: "Proprietes", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Quartiers", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { title: "Depuis 2003", subtitle: "Notre experience" },
  { title: "Agadir & regions", subtitle: "Notre territoire" },
  { title: "Achat - Vente - Location", subtitle: "Nos services" },
  { title: "Accompagnement personnalise", subtitle: "Notre engagement" },
];

export const areas = [
  {
    id: "founty",
    title: "Founty",
    hint: "Biens disponibles",
    image: areaOneImage,
  },
  {
    id: "sonaba",
    title: "Sonaba",
    hint: "Biens disponibles",
    image: areaTwoImage,
  },
  {
    id: "marina",
    title: "Marina",
    hint: "Biens disponibles",
    image: areaThreeImage,
  },
  {
    id: "centre",
    title: "Centre Ville",
    hint: "Biens disponibles",
    image: areaFourImage,
  },
  {
    id: "taghazout",
    title: "Taghazout",
    hint: "Biens disponibles",
    image: areaFiveImage,
  },
  {
    id: "tamraght",
    title: "Tamraght",
    hint: "Biens disponibles",
    image: areaSixImage,
  },
];
