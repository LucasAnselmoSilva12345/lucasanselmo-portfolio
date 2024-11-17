export function ProfileOverview() {
  return (
    <div className="w-full mt-6 mb-2 md:max-w-3xl md:mx-auto">
      <h2 className="mb-2 text-lg font-nunito font-bold">About Me</h2>
      <p className="mb-2 text-base font-nunito font-normal text-neutral-700">
        I am a Tech Lead with solid experience in front-end software
        development, specializing in JavaScript and TypeScript, using frameworks
        like React and Next.js. Over the past three years, I have worked at
        startups across different industries, building responsive and accessible
        web applications, always integrating unit and integration tests to
        ensure high-quality projects.
      </p>
      <p className="mb-2 text-base font-nunito font-normal text-neutral-700">
        My education includes a Bachelor's degree in Computer Science from IFSP
        Campus Salto and a technical degree in IT from Etec Martinho Di Ciero.
        Currently, I am a Tech Lead and Software Developer at a startup, where I
        lead the development and documentation of a front-end e-commerce
        project. In addition to my technical skills, I have experience leading
        teams, applying agile methodologies to optimize processes and deliver
        effective results.
      </p>

      <p className="text-base font-nunito font-normal text-neutral-700">
        I am committed to open-source principles and maintain personal and
        open-source projects on my{' '}
        <a
          href="https://github.com/LucasAnselmoSilva12345/"
          className="font-semibold text-sky-700 underline decoration-sky-700 decoration-1 underline-offset-1"
        >
          GitHub profile.
        </a>
      </p>
    </div>
  );
}
