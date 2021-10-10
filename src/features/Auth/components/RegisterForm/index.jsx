import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(4),
  },

  title: {
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: 'center',
  },

  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },

  progress: {
    position: 'absolute',
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Vui lòng nhập họ tên.')
      .test('abc', 'Họ tên phải có nhiều hơn 2 từ.', (value) => {
        return value.split(' ').length >= 2;
      }),

    email: yup.string().required('Vui lòng nhập email.').email('Email không hợp lệ.'),
    password: yup
      .string()
      .required('Vui lòng nhập mật khẩu.')
      .min(6, 'Mật khẩu phải có ít nhất 6 kí tự.'),
    retypePassword: yup
      .string()
      .required('Vui lòng nhập lại mật khẩu.')
      .oneOf([yup.ref('password')], 'Mật khẩu không khớp.'),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Họ và tên" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Mật khẩu" form={form} />
        <PasswordField name="retypePassword" label="Nhập lại mật khẩu" form={form} />
        <Button
          disabled={isSubmitting}
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Create An Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
