import { useContext } from 'react';

/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { Form, FormButtonPrimary, FormInputPrimary } from '../../components/Form';
import { Main } from '../../components/Main/Main';

/**
 * @layouts
 */
import { Nav } from '../../layouts/Nav/Nav';
import { NavTopSettings } from '../../layouts/NavTopSettings/NavTopSettings';

/**
 * @context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useForm } from '../../hooks/useForm';

export const SettingsEmailPage = () => {
  const { email } = useContext(AuthContext);
  const { newEmail, onInputChange } = useForm({
    newEmail: email,
  });

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <NavTopSettings navText="Cambiar el correo electrónico" />
      <Nav />
      <Main>
        <Container>
          <Form formSubmit={onSubmit}>
            <FormInputPrimary
              inputName="newEmail"
              inputValue={newEmail}
              inputChange={onInputChange}
              label="Correo electrónico"
            />
            <FormButtonPrimary
              buttonSubmit={onSubmit}
              buttonText="Guardar"
              option={email === newEmail || newEmail.length < 8}
            />
          </Form>
        </Container>
      </Main>
    </>
  );
};
