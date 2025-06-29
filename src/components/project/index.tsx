import { useState } from 'react';
import { projectProduction, projectPersonal } from '../../data/projectsData';
import { Card } from './card';
import { Tabs } from './tabs';

export function List() {
  const [selectedTab, setSelectedTab] = useState<'production' | 'personal'>(
    'production'
  );

  const projects =
    selectedTab === 'production' ? projectProduction : projectPersonal;
  return (
    <div>
      <Tabs selected={selectedTab} onChange={setSelectedTab} />
      <div className="grid lg:grid-cols-2 gap-2 lg:gap-3">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
