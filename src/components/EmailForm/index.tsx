import { memo } from 'react';

import { useFormik } from 'formik';

import { Input, Button } from 'components';
import { ReturnComponentType } from 'types';
import { isEmailValid } from 'utils/validates';

/* type FormPropsType = WithChildrenType; */

export const EmailForm = memo((): ReturnComponentType => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: values => {
      const errors = {} as { email: string };

      if (!values.email) {
        errors.email = 'Required';
      }
      if (!isEmailValid(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        label="email"
        formikProps={formik.getFieldProps('email')}
        validationErr={(formik.touched.email && formik.errors.email) || ''}
      >
        <Button btnclassName={['navigation', 'secondary']} />
      </Input>
    </form>
  );
});
