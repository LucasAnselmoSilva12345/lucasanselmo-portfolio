import { MainNav } from './main-nav';

export function Header() {
  return (
    <header className="w-full md:max-w-3xl md:my-0 md:mx-auto flex items-center justify-between">
      <div className="flex items-start gap-x-2">
        <img
          className="object-cover w-12 h-12 rounded-lg"
          src="https://github.com/LucasAnselmoSilva12345.png"
          alt=""
        />
        <div>
          <h1 className="text-base font-nunito font-bold">
            <a href="/">Lucas Anselmo</a>
          </h1>

          <p className="text-sm text-neutral-700 font-nunito font-medium">
            Desenvolvedor Front-end
          </p>
        </div>
      </div>

      <MainNav />
    </header>
  );
}
