/**
 * @hooks
 */
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../hooks/useAuthStore';

/**
 * @components
 */
import { Form, FormButtonPrimary, FormInputPrimary } from '../../components/Form';
import { Main } from '../../components/Main/Main';
import { Container } from '../../components/Container/Container';

/**
 * layouts
 */
import { Nav } from '../../layouts/Nav/Nav';
import { NavTopSettings } from '../../layouts/NavTopSettings/NavTopSettings';

export const SettingsPhonePage = () => {
  const { phone } = useAuthStore();
  const { newPhone, onInputChange } = useForm({
    newPhone: phone,
  });

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <NavTopSettings navText="Cambiar teléfono" />
      <Nav />
      <Main>
        <Container>
          <Form formSubmit={onSubmit}>
            <FormInputPrimary
              inputChange={onInputChange}
              inputName="newPhone"
              inputValue={newPhone}
              label="Numero de teléfono"
              inputType="number"
            />
            <FormButtonPrimary
              buttonSubmit={onSubmit}
              buttonText="Guardar"
              option={phone === newPhone || newPhone.length < 8}
            />
          </Form>
        </Container>
      </Main>
    </>
  );
};
