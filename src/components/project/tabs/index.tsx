import { CookieIcon, RocketIcon } from '@radix-ui/react-icons';
import { Button } from './button';

type ITabs = {
  selected: 'production' | 'personal';
  onChange: (type: 'production' | 'personal') => void;
};

export function Tabs({ selected, onChange }: ITabs) {
  return (
    <div className="flex items-center justify-center gap-4 mb-3">
      <Button
        isActive={selected === 'production'}
        onClick={() => onChange('production')}
      >
        <RocketIcon />
        Profissionais
      </Button>
      <Button
        isActive={selected === 'personal'}
        onClick={() => onChange('personal')}
      >
        <CookieIcon />
        Pessoais
      </Button>
    </div>
  );
}
