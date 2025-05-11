import { NavLink } from 'react-router-dom';
export function Navbar() {
  const navItems = [{
    name: 'Trang Chủ',
    path: '/'
  }, {
    name: 'Nhóm',
    path: '/team'
  }, {
    name: 'Quy Trình',
    path: '/process'
  }, {
    name: 'Thiết Kế',
    path: '/design'
  }, {
    name: 'Công Nghệ',
    path: '/tech'
  }, {
    name: 'Biên Bản',
    path: '/minutes'
  }];
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <span className="text-xl font-bold">🚗</span>
          </div>
          <span>Dashspace</span>
        </NavLink>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(item => <NavLink key={item.path} to={item.path} className={({
          isActive
        }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
              {item.name}
            </NavLink>)}
        </nav>
        <button className="md:hidden">
          <span className="sr-only">Mở menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>;
}