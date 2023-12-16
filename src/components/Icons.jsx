/* eslint-disable react/prop-types */

import { Icon } from "@iconify/react";

export function Notification({ classes }) {
  return <Icon icon="mi:notification" className={classes} />;
}
export function Menu({ classes }) {
  return <Icon icon="uiw:menu" className={classes} />;
}
export function Pin({ classes }) {
  return <Icon icon="iconoir:pin" className={classes} />;
}
export function Home({ classes }) {
  return <Icon icon="jam:home" className={classes} />;
}
export function SearchActive({ classes }) {
  return <Icon icon="mingcute:search-fill" className={classes} />;
}
export function SearchDefault({ classes }) {
  return <Icon icon="mingcute:search-line" className={classes} />;
}
export function Download({ classes }) {
  return <Icon icon="streamline:download-circle" className={classes} />;
}
export function Library({ classes }) {
  return <Icon icon="lucide:library" className={classes} />;
}
export function Plus({ classes }) {
  return <Icon icon="tabler:plus" className={classes} />;
}
export function Play({ classes }) {
  return <Icon icon="ic:round-play-arrow" className={classes} />;
}
export function ArrowRight({ classes }) {
  return <Icon icon="majesticons:arrow-right-line" className={classes} />;
}
export function SimpleArrowLeft({ classes }) {
  return <Icon icon="ep:arrow-left-bold" className={classes} />;
}
export function SimpleArrowRight({ classes }) {
  return <Icon icon="ep:arrow-right-bold" className={classes} />;
}
export function SimpleArrowUp({ classes }) {
  return <Icon icon="ep:arrow-up-bold" className={classes} />;
}


export default {
  Notification,
  Menu,
  Pin,
  Home,
  SearchActive,
  SearchDefault,
  Download,
  Library,
  Plus,
  Play,
  ArrowRight,
  SimpleArrowLeft,
  SimpleArrowRight,
  SimpleArrowUp,
};
