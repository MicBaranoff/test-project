import { extend, localize, setInteractionMode } from 'vee-validate';

import { required, email, max, min, length } from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/ru';

extend('required', required);
extend('email', email);
extend('max', max);
extend('min', min);
extend('length', length);

extend('name', (value) => {
  return /^[а-яёА-ЯЁa-zA-Z]([а-яёА-ЯЁa-zA-Z ,.'-]+)?[а-яёА-ЯЁa-zA-Z]$/i.test(
    value
  );
});

localize({
  en: {
    messages: {
      ...messages,
      required: 'This field is required',
      max: 'Field value exceeds maximum allowed',
      numeric: 'The field can only contain numbers',
      password: 'Password is incorrect, try again',
      is: 'The field value must match the test value',
      name: 'The field contains invalid characters or is less than two characters long',
    },
  },
});

setInteractionMode('lazy');

export default function () {
  localize('en');
}
