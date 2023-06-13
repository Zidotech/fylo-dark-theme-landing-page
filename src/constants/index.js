import images from "./image";

export const navLinks = [
  {
    id: "features",
    title: "Features",
  },
  {
    id: "team",
    title: "Team",
  },

  {
    id: "sign In",
    title: "Sign In",
  },
];

export const footerLinks = [
  {
    title: "About Us",
    links: [
      {
        name: " Jobs",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: " Press",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: " Blog",
        link: "https://www.hoobank.com/suggestions/",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        name: " Terms",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Privacy",
        link: "https://www.hoobank.com/partners/",
      },
    ],
  },
];

export const features = [
  {
    id: "1",
    title: "  Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    img: images.icaa,
  },
  {
    id: "2",
    title: " Security you can trust",
    description:
      "  2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    img: images.icse,
  },
  {
    id: "3",
    title: "  Real-time collaboration",
    description:
      " Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    img: images.icco,
  },
  {
    id: "4",
    title: "  Store any type of file",
    description:
      " Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    img: images.icaf,
  },
];

export const slides = [
  {
    id: "1",
    img: images.profile1,
    names: "Satish Patel",
    description:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    role: " Founder & CEO, Huddle",
  },
  {
    id: "2",
    img: images.profile2,
    names: " Bruce McKenzie",
    description:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    role: " Founder & CEO, Huddle",
  },
  {
    id: "3",
    img: images.profile3,
    names: "Iva Boyd",
    description:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    role: " Founder & CEO, Huddle",
  },
];

export { images };
