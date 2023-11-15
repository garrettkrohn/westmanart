export const ROUTES = [
  {
    href: "/",
    label: "Art",
  },
  {
    href: "/about",
    label: "About",
  },
] as const;

// Icons from https://icon-sets.iconify.design
export const SOCIAL = [
  {
    label: "Twitter",
    href: "https://twitter.com/",
    icon: "mdi:twitter",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "mdi:linkedin",
  },
] as const;

export const PERSONAL_INFO = {
  name: "Rachel Westman",
  title: "Alpenglow Artistry",
  subtitle: "Paintings by Rachel Westman",
  role: "Painter",
  contact: "mailto:rachel.westman22@gmail.com",
  avatar:
    "https://cdn.discordapp.com/attachments/1023544104698773564/1049350422290251847/Ema_portrait_of_a_young_man_with_background_of_snow_mountains_i_f1762cd5-f4f3-4107-839c-194dab4dffa7.png",
  about:
    "My artwork allows me to express myself and share with others appreciation for God’s creation, especially mountains and oceans. I grew up in Illinois, but frequently visited Colorado with my family. Rocky Mountain scenes are especially close to my heart, but Florida beaches and midwest landscapes are also special to me. I want people who see my artwork to have a sense of calm and contentment when they see my paintings.",
} as const;

export const SEO_INFO = [
  {
    name: "description",
    content: "Art portfolio made by Rachel Westman",
  },
  { name: "keywords", content: "Art portfolio, Digital art, gallery" },
  { name: "author", content: PERSONAL_INFO.name },
];
