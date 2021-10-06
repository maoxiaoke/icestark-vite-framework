const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: 'Home',
    path: '/',
    icon: 'chart-pie',
  },
  {
    name: 'About',
    path: '/about',
    icon: 'chart-pie',
  },
  {
    name: 'Login',
    path: '/login',
    icon: 'account',
  },
  {
    name: 'Vue + Vite',
    icon: 'atm',
    children: [
      {
        path: '/seller',
        name: 'Vue Home',
      },
      {
        path: '/seller/list',
        name: 'Vue List',
      },
    ],
  },
  {
    name: 'React + Vite',
    icon: 'account',
    children: [
      {
        path: '/waiter',
        name: 'React Home',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
