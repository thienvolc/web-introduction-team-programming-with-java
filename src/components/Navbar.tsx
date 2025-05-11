import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  {
    name: 'Trang Chủ',
    path: '/',
  },
  {
    name: 'Nhóm',
    path: '/team',
  },
  {
    name: 'Quy Trình',
    path: '/process',
  },
  {
    name: 'Thiết Kế',
    path: '/design',
  },
  {
    name: 'Công Nghệ',
    path: '/tech',
  },
  {
    name: 'Biên Bản',
    path: '/minutes',
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur'>
      <div className='container flex h-16 items-center justify-between'>
        <NavLink to='/' className='flex items-center gap-2 font-bold text-xl text-primary'>
          <div className='bg-blue-600 text-white p-2 rounded-lg'>
            <span className='text-xl font-bold'>🚗</span>
          </div>
          <span>Dashspace</span>
        </NavLink>

        <nav className='hidden md:flex items-center gap-6'>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        {/* Mobile menu button */}
        <button
          className='md:hidden z-50'
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          aria-expanded={isOpen}
        >
          <span className='sr-only'>Toggle menu</span>
          {isOpen ? (
            // X icon for closing
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            // Hamburger icon for opening
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          )}
        </button>

        {/* Mobile sidebar */}
        {isOpen && (
          <div className='absolute top-16 left-0 w-full bg-white shadow-lg md:hidden'>
            <nav className='flex flex-col items-center'>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary p-2 ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`
                  }
                  onClick={toggleMenu} // Close menu on item click
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
