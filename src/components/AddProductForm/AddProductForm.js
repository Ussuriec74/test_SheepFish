import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addProduct } from 'redux/operations';
import { FormWrapper, FormItem, FormLabel, FormBtn } from './AddProductForm.styled';

const validationAddProductSchema = yup.object({
  title: yup
    .string()
    .min(5, 'Title must contain minimum 5 characters')
    .max(100, 'Title must contain maximum 100 characters')
    .required(),
  description: yup
    .string()
    .min(20, 'Title must contain minimum 20 characters')
    .max(500, 'Title must contain maximum 500 characters'),   
  price: yup
    .number()
    .positive()
    .required(),
  author: yup
    .string()
    .required(),
  year: yup
    .number()
    .positive()
    .integer()
    .required(),
  rating: yup
    .number(),
  stok: yup
    .number()
    .positive(),
  category: yup
    .string()
    .min(4, 'Title must contain minimum 4 characters')
    .required(),
});

export const AddProductForm = () => {

  const dispatch = useDispatch();
   
  const handleSubmit = (values, { resetForm }) => {

    dispatch(
      addProduct({
        values
      })
    );
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationAddProductSchema}
      initialValues={{
        title: '',
        description: '',
        price: '',
        author: '',
        year: '',
        rating: '',
        stok: '',
        category: ''
      }}>
      <FormWrapper>
        <FormLabel>Title</FormLabel>
        <FormItem
          type="text"
          name="title"
        />
        <FormLabel>Description</FormLabel>
        <FormItem
          type="text"
          name="description"
          component="textarea"
          rows="7"
        />
        <FormLabel>Price</FormLabel>
        <FormItem
          type="number"
          name="price"
        />
        <FormLabel>Author</FormLabel>
        <FormItem
          type="text"
          name="author"
        />
        <FormLabel>Year of publication</FormLabel>
        <FormItem
          type="number"
          name="year"
        />
        <FormLabel>Rating</FormLabel>
        <FormItem
          type="number"
          name="rating"
        />
        <FormLabel>Stock</FormLabel>
        <FormItem
          type="number"
          name="stock"
        />
        <FormLabel>Category</FormLabel>
        <FormItem
          type="text"
          name="category"
        />
        <FormBtn type="submit" disabled>Add product</FormBtn>
      </FormWrapper>
    </Formik>
  );
};
