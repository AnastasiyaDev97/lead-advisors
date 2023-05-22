import { memo, useContext } from 'react';

import { useFormik } from 'formik';

import { sendMessage } from 'api';
import { Input, Button } from 'components';
import { ModalContext } from 'components/Modal/ModalProvider';
import { ReturnUseModalType } from 'hooks/useModal';
import { ReturnComponentType } from 'types';
import { isEmailValid } from 'utils/validates';

export const EmailForm = memo((): ReturnComponentType => {
  const { openModal } = useContext<ReturnUseModalType>(ModalContext);

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
    onSubmit: async values => {
      try {
        const result = await sendMessage({ email: values.email });

        if (result.status === 200) {
          openModal({
            title: 'success!',
            text: 'You have successfully subscribed to the email newsletter',
          });
        } else {
          openModal({
            text: 'Something went wrong :(',
          });
        }
      } catch (err) {
        openModal({
          text: 'Something went wrong :(',
        });
      } finally {
        formik.resetForm();
      }
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
