interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'BentoBox Grid Generator',
    description: `2024 is the year of the BentoBox. This is a simple grid generator that will help you create
    your own BentoBox. Simply enter the number of rows and columns you want and click "Generate".`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'One Realty',
    description: `One Realty is a real estate company that helps people find their dream home. They are
    focused on providing the best service to their clients and helping them find the perfect home.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
