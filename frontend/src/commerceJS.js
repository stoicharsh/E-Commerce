import Commerce from '@chec/commerce.js';
import { COMMERCEJS_PUBLIC_KEY } from './config/config';

export const commerce = new Commerce(COMMERCEJS_PUBLIC_KEY);