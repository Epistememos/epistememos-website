import { Category, Item } from "./interfaces";

export const media: Category = {
  category: 'Media',
  link: '#media',
  items: [{
    title: 'Various Poems & Thoughts 2024',
    img: '/assets/img-poems2024.jpg',
    path: 'articles/free-will', 
    time: '04/2024',
    description: "Free will is what should matter the most to us and we should not only believe in it but also implement the assumption of its existence in our lives."
  },
  {
    title: 'Free Will',
    img: '/assets/img-freewill.jpg',
    path: '#articles/#free-will', 
    time: '04/2024',
    description: "TLDR: Free will is what should matter the most to us and we should not only believe in it but also implement the assumption of its existence in our lives."
  },
  {
    title: 'Bénévolat : Offrir et recevoir en même temps',
    img: '/assets/img-freewill.jpg',
    path: 'https://ciusss-centresudmtl.gouv.qc.ca/actualite/benevolat-offrir-et-recevoir-en-meme-temps', 
    time: '03/2024',
    description: "Youdas Yessad a débuté le bénévolat tôt à l’adolescence. Il y a un peu plus de 3 ans, il a offert ses services au sein du CIUSSS du Centre-Sud-de-l'Île-de-Montréal dans l’objectif de s’impliquer auprès des personnes en fin de vie. Toutefois, le Service du bénévolat avait un plus grand besoin ..."
  },
  {
    title: 'Misunderstood Nietzsche (Soon)',
    img: '/assets/img-nietzsche.jpg',
    time: '',
  },
  {
    title: 'Option Trading (Soon)', 
    img: '/assets/img-options.jpg',
    time: ''
  }
]};

export const involvements: Category = {
  category: 'Involvements',
  link: '#involvements',

  items: [
  {
    title: 'VP Finance - MPMA',
    time: '10/2024-Present',
    img: '/assets/img-mpma.jpg',
    path: 'https://www.linkedin.com/company/mpma-mcgill/'
  },
  {
    title: 'VP Finance - MSFC', 
    time: '10/2024-Present',
    img: '/assets/img-msfc.jpg',
    path: 'https://www.instagram.com/mcgillflyingclub/?hl=en'
  },
  {
    title: 'Coach - McGill Boxing Club', 
    time: '09/2024-Present',
    img: '/assets/img-boxing.jpg',
    path: 'https://mcgillstudentboxingclub.ca/'
  },
  {
    title: 'Volunteer - Notre-Dame Hospital', 
    time: '11/2020-Present',
    img: '/assets/img-volunteer.jpg',
    path: 'https://ciusss-centresudmtl.gouv.qc.ca/actualite/benevolat-offrir-et-recevoir-en-meme-temps'
  },
  {
    title: 'VP Skydiving - MSFC', 
    time: '10/2023-06/2024',
    img: '/assets/img-msfc.jpg',
    path: 'https://www.instagram.com/mcgillflyingclub/?hl=en'
  },
  {
    title: 'Member - Boxing Club', 
    time: '02/2024-05/2024',
    img: '/assets/img-boxing.jpg',
    path: 'https://mcgillstudentboxingclub.ca/'
  },
  {
    title: 'Junior Consultant - ConnectUs',
    time: '10/2023-05/2024',
    img: '/assets/img-connectus.jpg',
    path: 'https://www.instagram.com/mcgill.cu/?hl=en'
  },
  {
    title: 'Many Roles - Royal Air Cadets', 
    time: '2016-2023',
    img: '/assets/img-cadet.jpg',
    path: ''
  },
  {
    title: 'President - CIUSSS Volunteers', 
    time: '08/2022-06/2023',
    img: '/assets/img-boxing.jpg',
    path: 'https://www.instagram.com/ciusss.mari/?hl=en'
  },
  {
    title: 'President - Philosophy Club', 
    time: '08/2021-06/2023',
    img: '/assets/img-philo.jpg',
    path: ''
  }
]};

export const projects: Category = {
  category: 'Projects/Technical Work',
  link: '#projects',
  items: [
  {
    title: 'Reeva Tech Solutions - Dental Implant ',
    time: 'May-September 2024',
    img: '/assets/img-neuralcar.jpg',
    description: "Designed and built a dental implant tracking device based on feedback from dentists. The backend uses SQLite for local data storage, while the frontend is built with React.js and packaged as a desktop application using Bun.js and Electron.js. Managed all stages of the project, from design to deployment and minor testing",
    path: '',
  },
  {
    title: 'Personal Website',
    time: 'Ongoing',
    img: '/assets/img-personalwebsite.jpg',
    description: "All built using Next.js... you got the results in front of you haha. Deployed on github pages.",
    path: 'https://github.com/Epistememos/TaskMaster',
  },
]};

export const achievements: Category = {
  category: 'Achievements',
  link: '#achievements',
  items: [
  {
    title: 'Climbing Mount Washington, NH',
    time: 'October 18th 2024',
    img: '/assets/img-mtwashington.jpg',
    description: "First time climbing, so I settled on the tallest mountain in North-East America, Mount Washington in New Hampshire. My 2 friends and I started our hike at 6AM and took the Tuckerman ravine route to reach the top. Then we went for Mount Eisenhower to finally go back down the Tuckerman Route. If you're in decent shape and ready for a challenge, I heavily suggest you climb this mountain, the views were magistral and the air, so pure. This experience definitely convinced me to hike more often!"
  },
  {
    title: 'Boxing Tournament - QC Golden Gloves Novice',
    time: 'October 4-6th 2024',
    img: '/assets/img-goldengloves.jpg',
    description: "After 5 months of training at the best boxing gym in Quebec, Pound 4 Pound, I won the gold medal for Quebec's novice Golden Gloves tournament. I fought against two strong opponents and was able to secure myself the victory for those two fights. Those results again showed me the importance of consistency and passion for what you do."
  },
  {
    title: 'Motorcycle License',
    time: 'September 24th 2024',
    img: '/assets/img-moto.jpg',
    description: "After one month of classes, I obtained my motorcycle 6A license. Now, I own a Ninja 650 which, despite it's high cubic capacity, makes for a great beginner bike. Ride safe!"
  },
  {
    title: 'Marathon - Course des Pompiers',
    time: 'June 2nd 2024 7AM',
    img: '/assets/img-marathon.jpg',
    description: "After three weeks of preperation, I completed my first marathon in 3h 27 minutes and 9 seconds. The last 9 kilometers were arduous, my legs felt heavy and my pace dropped by 2 minutes per km for a while. Still completed the race and beat my objective of a sub 4h marathon by a large margin. The link leads you to my race score.",
    path: 'https://rtrt.me/ulink/SSA/SS-COURSEDESPOMPIERS24/tracker/RX62WPDH/focus'
  },
  {
    title: 'Private Pilot License',
    time: 'August 15th 2024',
    img: '/assets/img-pilot.jpg',
    description: "Thanks to the cadet program, I was able to complete my private pilot license in 7 weeks. It was a long journey of hard labor due to the cancellation of cadet activities during the pandemic, but I kept my grit and managed to obtain that license after 50.2H of flight time. This camp also gave me my foundations in learning to learn fast, because I managed to do in 7 weeks what usually takes 4months-3years.",
    path: ''
  }
  
]};