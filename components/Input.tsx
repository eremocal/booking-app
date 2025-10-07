import { ForwardedRef, forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

export const Input = forwardRef(
  (
    { className, error, errorMessage, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className="w-full">
        <input
          className={cn(
            'w-full rounded-lg border-2 bg-[#F3F4F6] px-4 py-3 text-[#1F2A37] transition-colors placeholder:text-[#6B7280] hover:bg-[#E5E7EB] focus:text-[#6B7280] focus:outline-none',
            error
              ? 'border-[#EF4444] focus:border-[#EF4444]'
              : 'border-transparent focus:border-focus-purple',
            className,
          )}
          ref={ref}
          {...props}
        />
        {errorMessage && (
          <p className="mt-1 text-sm text-[#EF4444]">{errorMessage}</p>
        )}
      </div>
    );
  },
);
