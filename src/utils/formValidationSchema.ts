import * as yup from 'yup';

const formValidateSchema = yup.object({
  name: yup.string().required('Укажите имя').trim(),
  username: yup.string().required('Укажите имя пользователя').trim(),
  email: yup.string().required('Укажите почту').email().trim(),
  city: yup.string().required('Укажите город').trim(),
  phone: yup.string().required('Укажите телефон').trim(),
  company: yup.string().required('Укажите название компании').trim(),
});

export { formValidateSchema };
