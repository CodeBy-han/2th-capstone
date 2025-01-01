import houseIcon from "./assets/icons/house-solid.png";
import houseIconCheck from "./assets/icons/house-solid-check.png";
import GlassIcon from "./assets/icons/magnifying-glass-solid.png";
import GlassIconCheck from "./assets/icons/magnifying-glass-solid-check.png";
import UserIcon from "./assets/icons/user-solid.png";
import UserIconCheck from "./assets/icons/user-solid-check.png";

const Icons = [
  {
    path: "/search",
    default: GlassIcon,
    active: GlassIconCheck,
    name: "검색",
  },
  {
    path: "/home",
    default: houseIcon,
    active: houseIconCheck,
    name: "홈",
  },
  {
    path: "/character",
    default: UserIcon,
    active: UserIconCheck,
    name: "캐릭터",
  },
];

export default Icons;
