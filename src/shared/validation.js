import {string, object} from 'yup';

const addPostFormSchema = object().shape({
    title: string().required('Поле обязательно для заполнения'),
    body: string().required('Поле обязательно для заполнения'),
})