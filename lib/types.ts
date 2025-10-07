import { z } from 'zod';

import { searchFormSchema } from './validations';

export type SearchFormData = z.infer<typeof searchFormSchema>;
