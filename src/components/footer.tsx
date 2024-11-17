import { Link } from 'react-router-dom';
import cvPdfFile from '../assets/files/CV_Lucas_Anselmo_Silva.pdf';

interface FooterLink {
  to: string;
  label: string;
}

const footerLink: FooterLink[] = [
  {
    to: '/projects',
    label: 'Explore my projects',
  },
  {
    to: '/articles',
    label: 'Read my articles',
  },
  {
    to: '/social-networks',
    label: 'My Social Networks',
  },
];

export function Footer() {
  return (
    <footer className="w-full mt-6 mb-0 md:max-w-3xl md:mx-auto flex justify-between">
      <div>
        <ul className="space-y-3">
          {footerLink.map((params, index) => (
            <li key={index} className="flex items-center gap-1">
              <Link
                to={params.to}
                className="text-base font-nunito font-light transition-all duration-200 ease-in-out hover:underline hover:decoration-sky-700 hover:decoration-1 hover:underline-offset-1"
              >
                {params.label}
              </Link>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738"
                  fill="currentColor"
                ></path>
              </svg>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <a
          href={cvPdfFile}
          download="CV_Lucas_Anselmo"
          className="w-full p-4 flex items-center justify-between gap-3 text-base font-nunito font-bold rounded bg-neutral-900 text-neutral-200 transition-all duration-200 ease-in-out hover:opacity-75"
        >
          Download my CV
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <span className="block mt-3 text-sm font-nunito font-light italic text-center text-neutral-500">
          It's only one page.
        </span>
      </div>
    </footer>
  );
}
