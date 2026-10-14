import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <nav>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.ABOUT}>About</Link>
      </nav>
    </header>
  );
};
