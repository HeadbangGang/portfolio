interface SectionData {
  icon: string
  id: string
  title: SECTION_TITLE
}

export enum SECTION_TITLE {
  ABOUT = 'About',
  HOME = 'Home',
  RESUME = 'Resume',
  PROJECTS = 'Projects',
  CONTACT = 'Contact'
}

export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    title: 'github',
    icon: 'ion:logo-github',
    href: 'https://github.com/tayden-flitcroft'
  },
  {
    title: 'linkedin',
    icon: 'ion:logo-linkedin',
    href: 'https://linkedin.com/in/tayden-flitcroft'
  },
  {
    title: 'facebook',
    icon: 'ion:logo-facebook',
    href: 'https://facebook.com/tayden.flitcroftgoodeill'
  },
  {
    title: 'twitter',
    icon: 'ion:logo-twitter',
    href: 'https://twitter.com/TaydenPaul'
  },
  {
    title: 'mail',
    icon: 'ion:mail',
    href: 'mailto:contact@taydenflitcroft.com'
  }
]

export const SECTION: SectionData[] = [
  {
    icon: 'material-symbols:home-outline',
    id: 'home',
    title: SECTION_TITLE.HOME
  },
  {
    icon: 'material-symbols:person-outline',
    id: 'about',
    title: SECTION_TITLE.ABOUT
  },
  {
    icon: 'mdi:paper-outline',
    id: 'resume',
    title: SECTION_TITLE.RESUME
  },
  {
    icon: 'grommet-icons:projects',
    id: 'projects',
    title: SECTION_TITLE.PROJECTS
  },
  {
    icon: 'mdi:email-outline',
    id: 'contact',
    title: SECTION_TITLE.CONTACT
  }
]

export const I_AM_STRINGS = ['Software Engineer.', 'Developer.', 'Designer.', 'Computer Scientist.', 'Technology Enthusiast.']
export const MAX_MESSAGE_LENGTH = 1000
export const MAX_SUBJECT_LENGTH = 100
