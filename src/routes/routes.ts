type Menu = {
  label: string;
  path: string;
};

type Menus = {
  label: string;
  path?: string;
  children?: Menu[];
};

export const routes: Menus[] = [
  {
    label: "Layanan",
    path: "#services",
  },
  {
    label: "Keunggulan",
    path: "#features",
  },
  {
    label: "Portfolio",
    path: "#portfolio",
  },
  {
    label: "Tentang Kami",
    path: "#about",
  },
];
