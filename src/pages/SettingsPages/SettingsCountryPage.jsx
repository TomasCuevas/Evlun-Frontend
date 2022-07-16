import { useEffect } from 'react';
import { countries } from 'countries-list';

/**
 * @hooks
 */
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../hooks/useAuthStore';

/**
 * components
 */
import { Container } from '../../components/Container/Container';
import { Form, FormButtonPrimary } from '../../components/Form';
import { FormSelectOption } from '../../components/Form/FormSelectOption';
import { Main } from '../../components/Main/Main';

/**
 * @layouts
 */
import { Nav } from '../../layouts/Nav/Nav';
import { NavTopSettings } from '../../layouts/NavTopSettings/NavTopSettings';

export const SettingsCountryPage = () => {
  const { country = '' } = useAuthStore();
  const { newCountry, onInputChange } = useForm({
    newCountry: country,
  });

  const allCountries = [];
  for (const country in countries) {
    allCountries.push(countries[country].name);
  }

  const onSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (country === '') {
      onInputChange({ target: { name: 'newCountry', value: 'Andorra' } });
    }
  }, [country]);

  return (
    <>
      <NavTopSettings navText="Cambiar país" />
      <Nav />
      <Main>
        <Container>
          <Form formSubmit={onSubmit}>
            <FormSelectOption
              inputValue={newCountry}
              inputName="newCountry"
              optionValues={allCountries}
              onInputChange={onInputChange}
              label="País"
            />
            <FormButtonPrimary
              buttonSubmit={onSubmit}
              buttonText="Guardar"
              option={country === newCountry}
            />
          </Form>
        </Container>
      </Main>
    </>
  );
};
