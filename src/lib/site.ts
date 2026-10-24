export const site = {
  name: "Psych Experiment California",
  shortName: "Psych Ex Cali",
  year: 2024,
  tagline: "A student-run psychology club in Mountain House, California.",
  address: "Mountain House, CA 95391",
  emails: ["1081196@lammersvilleusd.net", "1076725@lammersvilleusd.net"],
  instagram: {
    handle: "@psychex_cali",
    url: "https://www.instagram.com/psychex_cali/",
  },
} as const;

export const navLinks = [
  { href: "/#mission", label: "Mission" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
] as const;
