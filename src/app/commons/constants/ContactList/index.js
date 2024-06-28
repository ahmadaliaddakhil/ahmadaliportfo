import {
  SiGithub,
  SiInstagram,
  SiDiscord,
} from "react-icons/si";
import { TbBackground } from "react-icons/tb";

const iconSize = 45;

export const CONTACTLIST = [
  {
    href: "https://github.com/ahmadaliaddakhil",
    title: "Discover my Repository",
    description: "Connect with me on the world's leading developer platform.",
    buttonText: "Go To Github",
    color: "bg-gradient-to-r from-blue-900 to-blue-800",
    logo: <SiGithub size={iconSize} />
  },
  {
    href: "https://instagram.com/aliaddh_",
    title: "Start a Conversation",
    description: "Get inspired by my creativity and discover new things.",
    buttonText: "Go To Instagram",
    color: "bg-gradient-to-r from-pink-600 to-pink-500",
    logo: <SiInstagram size={iconSize} />
  },
  {
    href: "https://discord.gg/wvrBmnCF6h",
    title: "Chat with me, and hang out",
    description: "Discuss, collaborate, and hang out with like-minded people.",
    buttonText: "Go To Discord",
    color: "bg-gradient-to-r from-purple-700 to-purple-600",
    logo: <SiDiscord size={iconSize} />
  }
];
