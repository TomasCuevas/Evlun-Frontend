/**
 * @components
 */
import { Container } from '../../components/Container/Container';
import { Form, FormButtonPrimary } from '../../components/Form';
import { FormCheck } from '../../components/Form/FormCheck';
import { Main } from '../../components/Main/Main';
import { useForm } from '../../hooks/useForm';

/**
 * @layouts
 */
import { Nav } from '../../layouts/Nav/Nav';
import { NavTopSettings } from '../../layouts/NavTopSettings/NavTopSettings';

export const SettingsGenderPage = () => {
  const {
    famele = false,
    male = false,
    checkOneOnly,
  } = useForm({
    famele: false,
    male: false,
  });

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <NavTopSettings navText="Género" />
      <Nav />
      <Main>
        <Container>
          <Form formSubmit={onSubmit}>
            <FormCheck
              checked={famele}
              inputName="famele"
              label="Femenino"
              onCheckChange={checkOneOnly}
            />
            <FormCheck
              checked={male}
              inputName="male"
              label="Masculino"
              onCheckChange={checkOneOnly}
            />
            <FormButtonPrimary
              buttonSubmit={onSubmit}
              buttonText="Guardar"
              option={famele === false && male === false}
            />
          </Form>
        </Container>
      </Main>
    </>
  );
};
