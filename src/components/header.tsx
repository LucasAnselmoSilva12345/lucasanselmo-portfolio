import { MainNav } from './main-nav';

export function Header() {
  return (
    <header className="w-full md:max-w-3xl md:my-0 md:mx-auto flex items-center justify-between">
      <div>
        <h1 className="text-base font-nunito font-bold">Lucas Anselmo</h1>
        <p className="text-sm text-neutral-700 font-nunito font-medium">
          Front-end Software Developer
        </p>
      </div>

      <MainNav />
    </header>
  );
}
