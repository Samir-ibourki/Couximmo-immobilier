import areaOneImage from "../assets/founty.webp";
import areaTwoImage from "../assets/area_2.webp";
import areaThreeImage from "../assets/marina.webp";
import areaFourImage from "../assets/area_4.webp";
import areaFiveImage from "../assets/taghazout.webp";
import areaSixImage from "../assets/tamraght.webp";

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
