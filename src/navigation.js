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
          text: 'Kois-trained',
          href: getPermalink('/Kois-trained'),
        },
        // {
        //   text: 'Our Team',
        //   href: getPermalink('/team'),
        // },
        {
          text: 'Why us?',
          href: getPermalink('/whyus'),
        },
        {
          text: 'Tour our office',
          href: getPermalink('/touroffice'),
        },
        // {
        //   text: 'Our technologies',
        //   href: getPermalink('/technologies'),
        // },
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
          text: 'Cosmetic Dentistry',
          href: getPermalink('/cosmetic'),
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
        {
          text: 'Dental Bonding',
          href: getPermalink('/bonding'),
        },
        {
          text: 'Dental Veneers',
          href: getPermalink('/veneers'),
        },
        {
          text: 'Teeth Whitening',
          href: getPermalink('/whitening'),
        },
      ],
    },
    {
      text: 'Patient info & Insurance',
      links: [
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


