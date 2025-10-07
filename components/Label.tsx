import {
  ForwardedRef,
  LabelHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';

import { cn } from '@/lib/utils';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export const Label = forwardRef(
  (
    { className, children, ...props }: LabelProps,
    ref: ForwardedRef<HTMLLabelElement>,
  ) => {
    return (
      <label
        ref={ref}
        className={cn(
          'mb-2 block text-sm font-medium text-[#111928]',
          className,
        )}
        {...props}
      >
        {children}
      </label>
    );
  },
);
