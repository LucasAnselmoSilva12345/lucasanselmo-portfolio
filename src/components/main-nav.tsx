import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

interface NavLink {
  id: string;
  to: string;
  label: string;
}

const navLinks: NavLink[] = [
  {
    id: uuidv4(),
    to: '/projects',
    label: 'Projects',
  },
  {
    id: uuidv4(),
    to: '/articles',
    label: 'Articles',
  },
  {
    id: uuidv4(),
    to: '/social-networks',
    label: 'Networks',
  },
];

export function MainNav() {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        {navLinks.map((params) => (
          <li key={params.id}>
            <Link
              to={params.to}
              className="text-base font-nunito font-light underline decoration-sky-700 decoration-1 underline-offset-1"
            >
              {params.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
