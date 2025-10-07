'use client';

import { useRouter } from 'next/navigation';

import { format } from 'date-fns';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { Select } from '@/components/Select';
import { MAX_ADULTS, MAX_CHILDREN } from '@/lib/constants';
import { SearchFormData } from '@/lib/types';
import { createSearchParams } from '@/lib/utils';
import { searchFormSchema } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      location: '',
      fromDate: '',
      toDate: '',
      adults: 1,
      children: 0,
    },
  });

  const today = format(new Date(), 'yyyy-MM-dd');

  const onSubmit = (data: SearchFormData) => {
    console.log('Search data:', data);
    // Redirect to placeholder URL with search params
    const params = createSearchParams(data);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F7F4FF]">
      <div className="relative mx-auto h-screen max-w-[1440px]">
        <div className="min-h-screen pt-16 sm:pt-0">
          <div className="relative z-10 mx-auto flex h-auto w-full max-w-[358px] flex-col gap-6 rounded-xl bg-white px-4 py-6 sm:absolute sm:top-1/2 sm:left-8 sm:mx-0 sm:max-w-[438px] sm:-translate-y-1/2 sm:p-8 lg:left-[10%] lg:max-w-[442px]">
            <h1 className="text-3xl font-bold text-[#7749EF]">
              <span className="font-extrabold">HomeGlobe</span>
            </h1>
            <div>
              <h2 className="mb-3 text-xl font-bold text-[#111928]">
                Find places to stay anywhere
              </h2>
              <p className="text-[#4B5563]">
                Discover entire homes and rooms perfect for any trip or special
                occasion.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="Anywhere"
                  error={!!errors.location}
                  errorMessage={errors.location?.message}
                  {...register('location')}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fromDate">From</Label>
                  <Input
                    id="fromDate"
                    type="date"
                    min={today}
                    error={!!errors.fromDate}
                    errorMessage={errors.fromDate?.message}
                    {...register('fromDate')}
                  />
                </div>
                <div>
                  <Label htmlFor="toDate">To</Label>
                  <Input
                    id="toDate"
                    type="date"
                    min={today}
                    error={!!errors.toDate}
                    errorMessage={errors.toDate?.message}
                    {...register('toDate')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="adults">Adults</Label>
                  <Select
                    id="adults"
                    error={!!errors.adults}
                    errorMessage={errors.adults?.message}
                    {...register('adults', {
                      valueAsNumber: true,
                    })}
                  >
                    {Array.from({ length: MAX_ADULTS }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </Select>
                </div>
                <div>
                  <Label htmlFor="children">Children</Label>
                  <Select
                    id="children"
                    error={!!errors.children}
                    errorMessage={errors.children?.message}
                    {...register('children', {
                      valueAsNumber: true,
                    })}
                  >
                    {Array.from({ length: MAX_CHILDREN + 1 }, (_, i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-md bg-[#7749EF] px-6 py-3 font-medium text-white transition-colors hover:bg-[#5C27E5] focus:ring-2 focus:ring-[#AF72FF] focus:outline-none"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
