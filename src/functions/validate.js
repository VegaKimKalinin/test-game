export const required = (value) =>
  value ? undefined : 'Поле обязательно для заполнения';
export const requiredNumber = (value) =>
  value === 0 || value > 0
    ? undefined
    : 'Введите числовое значение для данного поля';
