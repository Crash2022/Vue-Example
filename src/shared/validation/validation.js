import {string, object} from 'yup';

export const addPostFormSchema = object().shape({
    title: string().required('Поле обязательно для заполнения'),
    body: string().required('Поле обязательно для заполнения'),
})