import { ProfileOverview } from '../components/profile-overview';
import { TechStack } from '../components/tech-stack';

export function Home() {
  return (
    <section className="w-full mt-6 mb-2 md:max-w-3xl md:mx-auto">
      <ProfileOverview />
      <TechStack />
    </section>
  );
}
