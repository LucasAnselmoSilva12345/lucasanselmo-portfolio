import { List } from '../components/project';

export function Project() {
  return (
    <section className="w-full mt-6 mb-2 md:max-w-3xl md:mx-auto space-y-3">
      <div>
        <h2 className="text-lg font-nunito font-semibold">Projetos</h2>
        <p className="text-sm font-nunito font-normal text-neutral-700">
          Nesta seção, apresento quatro projetos profissionais que desenvolvi
          como Desenvolvedor Front-end e Tech Lead em ambientes de produção
          reais. Todos fazem parte do ecossistema de e-commerce e foram
          construídos com foco em performance, SEO, acessibilidade e experiência
          do usuário.
        </p>
      </div>
      <List />
    </section>
  );
}
