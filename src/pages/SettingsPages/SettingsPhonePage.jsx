import { useContext } from 'react';

/**
 * @hooks
 */
import { useForm } from '../../hooks/useForm';

/**
 * @components
 */
import { Form, FormButtonPrimary, FormInputPrimary } from '../../components/Form';
import { Main } from '../../components/Main/Main';

/**
 * layouts
 */
import { Nav } from '../../layouts/Nav/Nav';
import { NavTopSettings } from '../../layouts/NavTopSettings/NavTopSettings';

/**
 * @context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Container } from '../../components/Container/Container';

export const SettingsPhonePage = () => {
  const { phone } = useContext(AuthContext);
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
