import { ExternalLinkIcon } from '@radix-ui/react-icons';

import * as ExternalLinkButton from '../components/external-link-button';
import { LinkedInIcon } from '../components/network-icons/linkedin';
import { GithubIcon } from '../components/network-icons/github';
import { TwitterIcon } from '../components/network-icons/twitter';
import { InstagramIcon } from '../components/network-icons/instagram';

export function Home() {
  return (
    <section className="w-full mt-6 mb-2 md:max-w-3xl md:mx-auto space-y-5">
      <ExternalLinkButton.Root href="https://www.linkedin.com/in/lucas-anselmo-543636161/">
        <ExternalLinkButton.Control>
          <LinkedInIcon />
          Linkedin
        </ExternalLinkButton.Control>
        <ExternalLinkIcon />
      </ExternalLinkButton.Root>

      <ExternalLinkButton.Root href="https://github.com/LucasAnselmoSilva12345">
        <ExternalLinkButton.Control>
          <GithubIcon />
          GitHub
        </ExternalLinkButton.Control>
        <ExternalLinkIcon />
      </ExternalLinkButton.Root>

      <ExternalLinkButton.Root href="https://x.com/LucasAnselmo202">
        <ExternalLinkButton.Control>
          <TwitterIcon />X / Twitter
        </ExternalLinkButton.Control>
        <ExternalLinkIcon />
      </ExternalLinkButton.Root>

      <ExternalLinkButton.Root href="https://www.instagram.com/lucas_anselmo2025/">
        <ExternalLinkButton.Control>
          <InstagramIcon />
          Instagram
        </ExternalLinkButton.Control>
        <ExternalLinkIcon />
      </ExternalLinkButton.Root>
    </section>
  );
}
