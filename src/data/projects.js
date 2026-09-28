// Central project data. Each project has a `layout` key that controls which
// visual composition ProjectCard renders — see components/ProjectCard.jsx.
// `gradient` is a placeholder image stand-in ([from, to] CSS colors); swap
// for a real `image` URL later and ProjectCard will use it instead.

export const projects = [
  {
    id: '01',
    layout: 'horizontal',
    title: 'SWIPE DEALS',
    category: 'Market Platform',
    year: '2026',
    description: 'SwipeDeals is a vehicle buy-and-sell marketplace where individual users and dealers can list their vehicles for sale, while buyers can browse, search, filter, and explore available vehicles based on their requirements.',
    tech: ['React', 'Node', 'PostgreSQL'],
    gradient: ['#d8d5cc', '#a9a59a'],
    image: 'https://images.unsplash.com/photo-1571247303899-8cb7b20388db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '#',
  },
  {
    id: '02',
    layout: 'overlap',
    title: 'SREEMR HOMES',
    category: 'Digital Marketing',
    year: '2026',
    description: 'Sreemr Homes is a real-estate platform focused on digitally promoting rental houses and residential properties to help property owners and potential tenants connect online.',
    tech: ['Next.js', 'Sanity', 'Framer Motion'],
    gradient: ['#c7cdd1', '#8f99a3'],
    image: 'https://images.unsplash.com/photo-1737480830377-c89acab4d3f1?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '#',
  },
  {
    id: '03',
    layout: 'split',
    title: 'VYNTRA LMS',
    category: 'Learning Management System',
    year: '2025',
    description: 'Vyntra LMS is a mobile learning platform designed to deliver educational content, courses, and learning materials to users through an engaging and user-friendly app interface.',
    tech: ['React Native', 'Firebase'],
    gradient: ['#ddd0c8', '#b39d8c'],
    image: 'https://images.unsplash.com/photo-1544531697-1f006636476d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '#',
  },
  {
    id: '04',
    layout: 'fullwidth',
    title: 'SWIPE AUCTIONS',
    category: 'AUCTIONS PLATFORM',
    year: '2026',
    description: 'SwipeAuctions is a dynamic auction platform designed to facilitate real-time bidding and the sale of vehicles and other items through an engaging auction-style interface.',
    tech: ['React', 'Node', 'PostgreSQL'],
    gradient: ['#cfd3c9', '#96a08b'],
    image: 'https://media.istockphoto.com/id/2209203527/photo/hand-holding-a-paper-card-with-the-word-auction.webp?a=1&b=1&s=612x612&w=0&k=20&c=oDRoV3vuctuWtiRTY7k5xWotv5oVSxYXAZ9tz876YAY=',
    href: '#',
  },
]
