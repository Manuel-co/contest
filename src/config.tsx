// import { usePathname } from 'next/navigation';

// import { Bell, Briefcase, Home, Settings, User } from 'lucide-react';

// export const NavItems = () => {
//   const pathname = usePathname();

//   function isNavItemActive(pathname: string, nav: string) {
//     return pathname.includes(nav);
//   }

//   return [
//     {
//       name: 'Home',
//       href: '/',
//       icon: <Home size={20} />,
//       active: pathname === '/',
//       position: 'top',
//     },
//     {
//       name: 'Profile',
//       href: '/profile',
//       icon: <User size={20} />,
//       active: isNavItemActive(pathname, '/profile'),
//       position: 'top',
//     },
//     {
//       name: 'Notifications',
//       href: '/notifications',
//       icon: <Bell size={20} />,
//       active: isNavItemActive(pathname, '/notifications'),
//       position: 'top',
//     },
//     {
//       name: 'Projects',
//       href: '/projects',
//       icon: <Briefcase size={20} />,
//       active: isNavItemActive(pathname, '/projects'),
//       position: 'top',
//     },
//     {
//       name: 'Settings',
//       href: '/settings',
//       icon: <Settings size={20} />,
//       active: isNavItemActive(pathname, '/settings'),
//       position: 'bottom',
//     },
//   ];
// };

import { usePathname } from 'next/navigation';

import { Bot, Kanban, Gamepad2, Home,  Plus, Check  } from 'lucide-react';
import { Activity, Additem, HomeTrendUp, LampCharge } from 'iconsax-react';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Home',
      href: '/',
      icon: <HomeTrendUp size={20} />,
      active: pathname === '/',
      position: 'top',
    },
    {
      name: 'Contest',
      href: '/contest',
      icon: <Bot size={20} />,
      active: isNavItemActive(pathname, '/contest'),
      position: 'top',
    },
    {
      name: 'New-contest',
      href: '/new-contest',
      icon: < Additem  size={20} />,
      active: isNavItemActive(pathname, '/new-contest'),
      position: 'top',
    },
    {
      name: 'Active-contest',
      href: '/active-contest',
      icon: <LampCharge  size={20} />,
      active: isNavItemActive(pathname, '/active-contest'),
      position: 'top',
    },
    {
      name: 'All-contest',
      href: '/all-contest',
      icon: <Gamepad2 size={20} />,
      active: isNavItemActive(pathname, '/all-contest'),
      position: 'top',
    },
      {
      name: 'Analytics',
      href: '/analytics',
      icon: <Activity size={20} />,
      active: isNavItemActive(pathname, '/analytics'),
      position: 'top',
    },
  ];
};