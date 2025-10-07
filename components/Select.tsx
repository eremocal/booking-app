import {
  ForwardedRef,
  ReactNode,
  SelectHTMLAttributes,
  forwardRef,
} from 'react';

import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  errorMessage?: string;
  children: ReactNode;
}

export const Select = forwardRef(
  (
    { className, error, errorMessage, children, ...props }: SelectProps,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    return (
      <div className="w-full">
        <div className="relative">
          <select
            className={cn(
              'w-full cursor-pointer appearance-none rounded-lg border-2 bg-[#F3F4F6] px-4 py-3 text-[#1F2A37] transition-colors hover:bg-[#E5E7EB] focus:text-[#6B7280] focus:outline-none',
              error
                ? 'border-[#EF4444] focus:border-[#EF4444]'
                : 'border-transparent focus:border-[#AF72FF]',
              className,
            )}
            ref={ref}
            {...props}
          >
            {children}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown className="h-5 w-5 text-[#111928]" />
          </div>
        </div>
        {errorMessage && (
          <p className="mt-1 text-sm text-[#EF4444]">{errorMessage}</p>
        )}
      </div>
    );
  },
);
