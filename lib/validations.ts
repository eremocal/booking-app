import { isAfter, isSameDay, parseISO, startOfDay } from 'date-fns';
import { z } from 'zod';

export const searchFormSchema = z
  .object({
    location: z.string().min(1, 'Location is required'),
    fromDate: z
      .string()
      .min(1, 'Check-in date is required')
      .refine(
        (date) => {
          const selectedDate = startOfDay(parseISO(date));
          const today = startOfDay(new Date());
          return isAfter(selectedDate, today) || isSameDay(selectedDate, today);
        },
        {
          message: 'Check-in date must be today or in the future',
        },
      ),
    toDate: z
      .string()
      .min(1, 'Check-out date is required')
      .refine(
        (date) => {
          const selectedDate = startOfDay(parseISO(date));
          const today = startOfDay(new Date());
          return isAfter(selectedDate, today) || isSameDay(selectedDate, today);
        },
        {
          message: 'Check-out date must be today or in the future',
        },
      ),
    adults: z
      .number()
      .int('Number of adults must be a whole number')
      .min(1, 'At least 1 adult is required')
      .max(16, 'Maximum 16 adults allowed'),
    children: z
      .number()
      .int('Number of children must be a whole number')
      .min(0, 'Number of children cannot be negative')
      .max(10, 'Maximum 10 children allowed'),
  })
  .refine(
    (data) => {
      const fromDate = parseISO(data.fromDate);
      const toDate = parseISO(data.toDate);
      return isAfter(toDate, fromDate);
    },
    {
      message: 'Check-out date must be after check-in date',
      path: ['toDate'],
    },
  );
