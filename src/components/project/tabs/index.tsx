import { useTranslation } from 'react-i18next';
import { CookieIcon, RocketIcon } from '@radix-ui/react-icons';
import { Button } from './button';

type ITabs = {
  selected: 'production' | 'personal';
  onChange: (type: 'production' | 'personal') => void;
};

export function Tabs({ selected, onChange }: ITabs) {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center gap-4 mb-3">
      <Button
        isActive={selected === 'production'}
        onClick={() => onChange('production')}
      >
        <RocketIcon />
        {t('projects.professional')}
      </Button>
      <Button
        isActive={selected === 'personal'}
        onClick={() => onChange('personal')}
      >
        <CookieIcon />
        {t('projects.personal')}
      </Button>
    </div>
  );
}
