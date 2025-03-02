import { ExternalLinkIcon } from '@radix-ui/react-icons';
import * as ExternalLinkButton from '../components/external-link-button';
import { ReaderIcon } from '../components/network-icons/reader';

export function Articles() {
  return (
    <section className="w-full mt-6 mb-2 md:max-w-3xl md:mx-auto space-y-5">
      <div>
        <h2 className="text-lg font-nunito font-bold">Articles</h2>
        <p className="text-sm font-nunito font-normal text-neutral-700">
          Check out my scientific initiation and thesis articles, featuring
          research and discoveries in development!
        </p>
      </div>
      <div className="space-y-5">
        <ExternalLinkButton.Root href="https://ocs.ifsp.edu.br/conict/xivconict/paper/view/9702">
          <ExternalLinkButton.Control>
            <ReaderIcon />
            XVI CONICT Scientific Congress 2023
          </ExternalLinkButton.Control>
          <ExternalLinkIcon />
        </ExternalLinkButton.Root>

        <ExternalLinkButton.Root href="https://www.youtube.com/live/Hu8ViS9q8QU?si=-8jIAO1mSXR5Aiy5&t=5375">
          <ExternalLinkButton.Control>
            <ReaderIcon />
            FliSOL 2022
          </ExternalLinkButton.Control>
          <ExternalLinkIcon />
        </ExternalLinkButton.Root>
      </div>
    </section>
  );
}
