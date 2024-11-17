import { Link } from 'react-router-dom';

interface NavLink {
  to: string;
  label: string;
}

const navLinks: NavLink[] = [
  {
    to: '/projects',
    label: 'Projects',
  },
  {
    to: '/articles',
    label: 'Articles',
  },
  {
    to: '/social-networks',
    label: 'Networks',
  },
];

export function MainNav() {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        {navLinks.map((params, index) => (
          <li key={index}>
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
