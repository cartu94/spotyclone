/* eslint-disable react/prop-types */

import { Icon } from "@iconify/react";

function Notification({ classes }) {
  return <Icon icon="mi:notification" className={classes} />;
}
function Menu({ classes }) {
  return <Icon icon="uiw:menu" className={classes} />;
}
function Pin({ classes }) {
  return <Icon icon="iconoir:pin" className={classes} />;
}
function Home({ classes }) {
  return <Icon icon="jam:home" className={classes} />;
}
function SearchActive({ classes }) {
  return <Icon icon="mingcute:search-fill" className={classes} />;
}
function SearchDefault({ classes }) {
  return <Icon icon="mingcute:search-line" className={classes} />;
}
function Download({ classes }) {
  return <Icon icon="streamline:download-circle" className={classes} />;
}
function Library({ classes }) {
  return <Icon icon="lucide:library" className={classes} />;
}
function Plus({ classes }) {
  return <Icon icon="tabler:plus" className={classes} />;
}
function Play({ classes }) {
  return <Icon icon="ic:round-play-arrow" className={classes} />;
}
function ArrowRight({ classes }) {
  return <Icon icon="majesticons:arrow-right-line" className={classes} />;
}
function SimpleArrowLeft({ classes }) {
  return <Icon icon="ep:arrow-left-bold" className={classes} />;
}
function SimpleArrowRight({ classes }) {
  return <Icon icon="ep:arrow-right-bold" className={classes} />;
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
};
