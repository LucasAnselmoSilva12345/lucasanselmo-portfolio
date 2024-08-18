import { ExternalLinkIcon } from '@radix-ui/react-icons';
import * as ExternalLinkButton from '../components/external-link-button';
import { ReaderIcon } from '../components/network-icons/reader';

export function Articles() {
  return (
    <section className="w-full mt-6 mb-2 md:max-w-3xl md:mx-auto">
      <h1 className="mb-4 text-lg font-nunito font-bold">Articles</h1>
      <div className="space-y-5">
        <ExternalLinkButton.Root href="https://ocs.ifsp.edu.br/conict/xivconict/paper/view/9702">
          <ExternalLinkButton.Control>
            <ReaderIcon />
            CONICT XIV - Scientific Article 2023
          </ExternalLinkButton.Control>
          <ExternalLinkIcon />
        </ExternalLinkButton.Root>

        <ExternalLinkButton.Root href="https://www.youtube.com/live/Hu8ViS9q8QU?si=-8jIAO1mSXR5Aiy5&t=5375">
          <ExternalLinkButton.Control>
            <ReaderIcon />
            FliSOL - IFSP 2022
          </ExternalLinkButton.Control>
          <ExternalLinkIcon />
        </ExternalLinkButton.Root>
      </div>
    </section>
  );
}
