import { ExternalLinkIcon } from '@radix-ui/react-icons';

import * as ExternalLinkButton from '../components/external-link-button';
import { LinkedInIcon } from '../components/network-icons/linkedin';
import { GithubIcon } from '../components/network-icons/github';
import { TwitterIcon } from '../components/network-icons/twitter';
import { InstagramIcon } from '../components/network-icons/instagram';

export function Networks() {
  return (
    <section className="w-full mt-6 mb-2 md:max-w-3xl md:mx-auto space-y-5">
      <div>
        <h2 className="text-lg font-nunito font-semibold">Social Networks</h2>
        <p className="text-sm font-nunito font-normal text-neutral-700">
          Follow me on social media and stay updated on my work in development,
          technology, and more!
        </p>
      </div>

      <ExternalLinkButton.Root href="https://www.linkedin.com/in/lucas-anselmo-desenvolvedor/">
        <ExternalLinkButton.Control>
          <LinkedInIcon />
          <span className="font-nunito font-semibold">Linkedin</span>
        </ExternalLinkButton.Control>
        <ExternalLinkIcon />
      </ExternalLinkButton.Root>

      <ExternalLinkButton.Root href="https://github.com/LucasAnselmoSilva12345">
        <ExternalLinkButton.Control>
          <GithubIcon />
          <span className="font-nunito font-semibold">GitHub</span>
        </ExternalLinkButton.Control>
        <ExternalLinkIcon />
      </ExternalLinkButton.Root>

      <ExternalLinkButton.Root href="https://x.com/LucasAnselmo202">
        <ExternalLinkButton.Control>
          <TwitterIcon />
          <span className="font-nunito font-semibold">X / Twitter</span>
        </ExternalLinkButton.Control>
        <ExternalLinkIcon />
      </ExternalLinkButton.Root>

      <ExternalLinkButton.Root href="https://www.instagram.com/lucas_anselmo2025/">
        <ExternalLinkButton.Control>
          <InstagramIcon />
          <span className="font-nunito font-semibold">Instagram</span>
        </ExternalLinkButton.Control>
        <ExternalLinkIcon />
      </ExternalLinkButton.Root>
    </section>
  );
}
