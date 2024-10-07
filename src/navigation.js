import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About US',
      links: [
        {
          text: 'Dr. Ketan Ginoya',
          href: getPermalink('/dr-Ketan'),
        },
        {
          text: 'Our Team',
          href: getPermalink('/team'),
        },
        {
          text: 'Why us?',
          href: getPermalink('/whyus'),
        },
        {
          text: 'Tour our office',
          href: getPermalink('/touroffice'),
        },
        {
          text: 'Our technologies',
          href: getPermalink('/technologies'),
        },
      ],
    },
    { text: 'Emergency', href: getPermalink('/emergency'), },

    {
      text: 'Services',
      links: [
        {
          text: 'Dental Cleaning',
          href: getPermalink('/cleaning'),
        },
        {
          text: 'Deep Cleaning',
          href: getPermalink('/deepcleaning'),
        },
        {
          text: 'Root Canal Treatment',
          href: getPermalink('/rct'),
        },
        {
          text: 'Dental Crown',
          href: getPermalink('/crown'),
        },
        {
          text: 'Allonx',
          href: getPermalink('/allonx'),
        },
        {
          text: 'Bridge',
          href: getPermalink('/bridge'),
        },
        {
          text: 'Implant',
          href: getPermalink('/implant'),
        },
        {
          text: 'Implant Crown and Bridge',
          href: getPermalink('/implantcrown'),
        },
        {
          text: 'Extraction',
          href: getPermalink('/extraction'),
        },
        {
          text: 'Dentures',
          href: getPermalink('/denture'),
        },
        {
          text: 'Invisalign',
          href: getPermalink('/invisalign'),
        },
      ],
    },
    {
      text: 'Patient info & Insurance',
      links: [
        {
          text: 'New Patient Forms',
          href: getPermalink('/forms'),
        },
        {
          text: 'Payment Informations',
          href: getPermalink('/payment'),
        },
        {
          text: 'Dental Blog',
          href: getPermalink('/blog'),
        }
      ],
    },
    {
      text: 'Smile Gallery',
          href: getPermalink('/smilegallery'),
      
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/contact'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" ></img>
    Made by Life.Dental . All rights reserved.
  `,
};
