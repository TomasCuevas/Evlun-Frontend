/**
 * @hooks
 */
import { useForm } from '../../hooks/useForm';

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
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

/**
 * @styles
 */

export const SettingsUsernamePage = () => {
  const { username } = useContext(AuthContext);
  const { newUsername, onInputChange } = useForm({
    newUsername: username,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (username === newUsername || newUsername.length <= 2) return;
    console.log(newUsername);
  };

  return (
    <>
      <NavTopSettings navText="Cambiar nombre de usuario" />
      <Nav />
      <Main>
        <Container>
          <Form formSubmit={onSubmit}>
            <FormInputPrimary
              inputName="newUsername"
              label="Nombre de usuario"
              inputChange={onInputChange}
              inputType="text"
              inputValue={newUsername}
            />
            <FormButtonPrimary
              buttonSubmit={onSubmit}
              buttonText="Guardar"
              option={username === newUsername}
            />
          </Form>
        </Container>
      </Main>
    </>
  );
};
