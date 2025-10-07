'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { formatGuestCount } from '@/lib/utils';

export default function SearchPage() {
  const searchParams = useSearchParams();

  const location = searchParams.get('location');
  const fromDate = searchParams.get('fromDate');
  const toDate = searchParams.get('toDate');
  const adults = searchParams.get('adults');
  const children = searchParams.get('children');

  return (
    <div className="min-h-screen bg-[#F7F4FF] p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8">
        <h1 className="mb-6 text-3xl font-bold text-[#7749EF]">
          <span className="font-extrabold">Home</span>Globe - Search Results
        </h1>

        <div className="mb-8 space-y-4 rounded-lg bg-[#F3F4F6] p-6">
          <h2 className="text-xl font-semibold text-[#111928]">
            Your Search Criteria
          </h2>
          <div className="grid gap-3 text-[#4B5563]">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#111928]">Location:</span>
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#111928]">Check-in:</span>
              <span>{fromDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#111928]">Check-out:</span>
              <span>{toDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#111928]">Guests:</span>
              <span>{formatGuestCount(Number(adults), Number(children))}</span>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-lg border-2 border-[#E5E7EB] p-6 text-center">
          <p className="text-lg text-[#6B7280]">
            This is a placeholder search results page. Property listings would
            appear here.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block rounded-md bg-[#7749EF] px-6 py-3 font-medium text-white transition-colors hover:bg-[#5C27E5] focus:ring-2 focus:ring-[#AF72FF] focus:outline-none"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
