import renderField from './renderField';
import { required, requiredNumber } from './../../functions/validate';
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
    parse: positiveNumbers,
    inputMode: 'numeric',
    validate: [requiredNumber],
  },
  agility: {
    name: 'agility',
    type: 'text',
    component: renderField,
    label: 'Ловкость',
    parse: positiveNumbers,
    maxLength: 2,
    inputMode: 'numeric',
    validate: [requiredNumber],
  },
  intelligence: {
    name: 'intelligence',
    type: 'text',
    component: renderField,
    label: 'Интелект',
    parse: positiveNumbers,
    maxLength: 2,
    inputMode: 'numeric',
    validate: [requiredNumber],
  },
  charisma: {
    name: 'charisma',
    type: 'text',
    component: renderField,
    label: 'Харизма',
    parse: positiveNumbers,
    maxLength: 2,
    inputMode: 'numeric',
    validate: [requiredNumber],
  },
};

export default Fields;
