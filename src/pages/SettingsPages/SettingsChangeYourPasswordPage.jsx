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

export const SettingsChangeYourPasswordPage = () => {
  const { oldPassword, newPassword, confirm, onInputChange } = useForm({
    oldPassword: '',
    newPassword: '',
    confirm: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <NavTopSettings navText="Cambia tu contraseña" />
      <Nav />
      <Main>
        <Container>
          <Form formSubmit={onSubmit}>
            <FormInputPrimary
              inputChange={onInputChange}
              inputName="oldPassword"
              inputType="password"
              inputValue={oldPassword}
              label="Contraseña actual"
            />
            <FormInputPrimary
              inputChange={onInputChange}
              inputName="newPassword"
              inputType="password"
              inputValue={newPassword}
              label="Nueva contraseña"
            />
            <FormInputPrimary
              inputChange={onInputChange}
              inputName="confirm"
              inputType="password"
              inputValue={confirm}
              label="Confirmar contraseña"
            />
            <FormButtonPrimary
              buttonSubmit={onSubmit}
              buttonText="Guardar"
              option={oldPassword.length < 8 || newPassword.length < 8 || confirm.length < 8}
            />
          </Form>
        </Container>
      </Main>
    </>
  );
};
