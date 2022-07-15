/**
 * @hooks
 */
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../hooks/useAuthStore';

/**
 * @components
 */
import { Main } from '../../components/Main/Main';
import { Container } from '../../components/Container/Container';
import { Form } from '../../components/Form/Form';
import { FormInputPrimary } from '../../components/Form/FormInputPrimary';
import { FormButtonPrimary } from '../../components/Form/FormButtonPrimary';
import { FormQuestion } from '../../components/Form/FormQuestion';

/**
 * @styles
 */
import styles from './signupPage.module.scss';

export const SignupPage = () => {
  const { startSignup } = useAuthStore();
  const { name, username, email, password, onInputChange } = useForm({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();

    startSignup(name, username, email, password);
  };

  return (
    <Main>
      <Container>
        <p className={styles.form__legend}>
          Únete a <span>Evlun</span> hoy mismo
        </p>

        <Form autocomplete="off" formSubmit={onSubmit}>
          <FormInputPrimary
            inputName="name"
            label="Nombre completo"
            inputValue={name}
            inputChange={onInputChange}
            inputType="text"
          />
          <FormInputPrimary
            inputName="username"
            label="Nombre de usuario"
            inputValue={username}
            inputChange={onInputChange}
            inputType="text"
          />
          <FormInputPrimary
            inputName="email"
            label="Correo electronico"
            inputValue={email}
            inputChange={onInputChange}
            inputType="email"
          />
          <FormInputPrimary
            inputName="password"
            label="Contraseña"
            inputValue={password}
            inputChange={onInputChange}
            inputType="password"
          />
          <FormButtonPrimary buttonText="Registrarme" buttonSubmit={onSubmit} />
        </Form>

        <FormQuestion
          question="¿Ya tienes una cuenta?"
          linkQuestion="Iniciar sesión"
          link="/auth/login"
        />
      </Container>
    </Main>
  );
};
