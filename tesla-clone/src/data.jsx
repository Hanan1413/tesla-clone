import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCar,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
  FaBatteryHalf,
  FaShoppingCart,
  FaCcDiscover,
  FaBabyCarriage,
  FaBatteryFull,

} from "react-icons/fa";
import { nanoid } from "nanoid";

const sublinks = [
  {
    pageId: nanoid(),
    page: "Vehicle",
    links: [
      {
        id: nanoid(),
        label: "Model S",
        icon: <FaCar />,
        url: "/product/community",
      },
      {
        id: nanoid(),
        label: "Model 3",
        icon: <FaCar />,
        url: "/product/content",
      },
      {
        id: nanoid(),
        label: "Model X",
        icon: <FaCar />,
        url: "/product/roles",
      },
      {
        id: nanoid(),
        label: "Model Y",
        icon: <FaCar />,
        url: "/product/roles",
      },
      {
        id: nanoid(),
        label: " Cybertruck",
        icon: <FaCar />,
        url: "/product/roles",
      },

      {
        id: nanoid(),
        label: " Help Me Choose",
        icon: <FaCar />,
        url: "/product/roles",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "Energy",
    links: [
      {
        id: nanoid(),
        label: "Solar Panels",
        icon: <FaBatteryFull />,
        url: "/solutions/developers",
      },
      {
        id: nanoid(),
        label: "Solar Roof",
        icon: <FaBatteryFull />,
        url: "/solutions/content-managers",
      },
      {
        id: nanoid(),
        label: "Powerwall",
        icon: <FaBatteryFull />,
        url: "/solutions/business teams",
      },
      {
        id: nanoid(),
        label: "Megapack",
        icon: <FaBatteryFull />,
        url: "/solutions/ecommerce",
      },
    ],
  },
  {
    page: "Discover",
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: "starters",
        icon: <FaCcDiscover />,
        url: "/resources/starters",
      },
      {
        id: nanoid(),
        label: "showcase",
        icon: <FaCcDiscover />,
        url: "/resources/showcase",
      },
    ],
  },
  {
    page: "charging",
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: "Charging",
        icon: <FaBatteryHalf />,
        url: "/resources/starters",
      },
      {
        id: nanoid(),
        label: "Home Charging",
        icon: <FaBatteryHalf />,
        url: "/resources/showcase",
      },
      {
        id: nanoid(),
        label: "Home Charging",
        icon: <FaBatteryHalf />,
        url: "/resources/showcase",
      },

      {
        id: nanoid(),
        label: " Supercharging",
        icon: <FaBatteryHalf />,
        url: "/resources/showcase",
      },
    ],
  },
  {
    page: "shop",
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: "Apparel",
        icon: <FaShoppingCart />,
        url: "/resources/showcase",
      },
      {
        id: nanoid(),
        label: "Lifestyle",
        icon: <FaShoppingCart />,
        url: "/resources/showcase",
      },

      {
        id: nanoid(),
        label: " Vehicle Accessories",
        icon: <FaShoppingCart />,
        url: "/resources/showcase",
      },
    ],
  },
];

export default sublinks;
