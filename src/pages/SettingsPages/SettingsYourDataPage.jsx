import moment from 'moment';

/**
 * @components
 */
import { NavTopSettings } from '../../layouts/NavTopSettings/NavTopSettings';
import { SettingOption } from '../../components/Settings/SettingOption';

/**
 * @layouts
 */
import { Main } from '../../components/Main/Main';
import { Nav } from '../../layouts/Nav/Nav';
import { useContext } from 'react';

/**
 * @context
 */
import { AuthContext } from '../../context/AuthContext/AuthContext';

export const SettingsYourDataPage = () => {
  const { username, phone, email, date, country, gender } = useContext(AuthContext);

  const transformDate = moment(date).format('D/MM/YYYY H:MM:SS');

  return (
    <>
      <NavTopSettings navText="Información de la cuenta" />
      <Nav />
      <Main>
        <SettingOption optionTitle="Nombre de usuario" optionText={username} />
        <SettingOption optionTitle="Teléfono" optionText={`${phone}` || null} />
        <SettingOption optionTitle="Correo electrónico" optionText={email} />
        <SettingOption
          optionTitle="Creación de la cuenta"
          optionText={transformDate}
          arrow="none"
        />
        <SettingOption optionTitle="País" optionText={country} />
        <SettingOption optionTitle="Género" optionText={gender} />
      </Main>
    </>
  );
};