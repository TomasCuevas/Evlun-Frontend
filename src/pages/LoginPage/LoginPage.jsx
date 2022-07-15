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
import { Form, FormInputPrimary, FormButtonPrimary, FormQuestion } from '../../components/Form';

/**
 * @styles
 */
import styles from './loginPage.module.scss';

export const LoginPage = () => {
  const { startLogin } = useAuthStore();
  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();

    startLogin(email, password);
  };

  return (
    <Main>
      <Container>
        <p className={styles.form__legend}>
          Iniciar sesión en <span>Evlun</span>
        </p>

        <Form formSubmit={onSubmit}>
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
          <FormButtonPrimary buttonText="Iniciar Sesión" buttonSubmit={onSubmit} />
        </Form>

        <FormQuestion
          question="¿No tienes una cuenta?"
          linkQuestion="Regístrate"
          link="/auth/signup"
        />
      </Container>
    </Main>
  );
};
