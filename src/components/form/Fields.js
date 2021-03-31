import renderField from './renderField';
import { required } from './../../functions/validate';
import { positiveNumbers } from './../../functions/parse';
const Fields = {
  userName: {
    name: 'userName',
    type: 'text',
    component: renderField,
    label: 'Имя пользователя',
    validate: [required],
    inputMode: 'text',
  },
  force: {
    name: 'force',
    type: 'text',
    component: renderField,
    label: 'Сила',
    maxLength: 2,
    inputMode: 'numeric',
  },
  agility: {
    name: 'agility',
    type: 'text',
    component: renderField,
    label: 'Ловкость',
    parse: positiveNumbers,
    maxLength: 2,
    inputMode: 'numeric',
  },
  intelligence: {
    name: 'intelligence',
    type: 'text',
    component: renderField,
    label: 'Интелект',
    parse: positiveNumbers,
    maxLength: 2,
    inputMode: 'numeric',
  },
  charisma: {
    name: 'charisma',
    type: 'text',
    component: renderField,
    label: 'Харизма',
    parse: positiveNumbers,
    maxLength: 2,
    inputMode: 'numeric',
  },
};

export default Fields;
