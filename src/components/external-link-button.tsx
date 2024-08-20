import { ComponentProps } from 'react';

type SpanControlType = ComponentProps<'span'>;
export function Control(props: SpanControlType) {
  return (
    <span
      className="flex items-center gap-4 text-base font-nunito font-normal"
      {...props}
    />
  );
}

type ExternalLinkButtonType = ComponentProps<'a'>;
export function Root(props: ExternalLinkButtonType) {
  return (
    <h2>
      <a
        className="w-full p-3 flex items-center justify-between text-neutral-800 border rounded-sm border-neutral-400 transition-all duration-200 ease-in-out hover:bg-slate-100"
        target="_blank"
        {...props}
      />
    </h2>
  );
}
