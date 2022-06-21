import { useEffect, useContext } from "react"

/**
 * @components
 */
import { Main } from "../../components/Main/Main"

/**
 * layouts
 */
import { Nav } from "../../layouts/Nav/Nav"
import { NavSwitch } from "../../layouts/NavSwitch/NavSwitch"
import { NavTopHome } from "../../layouts/NavTopHome/NavTopHome"

/**
 * @provider
 */
import { MainProvider } from "../../context/MainContext/MainContext"

/**
 * @context
 */
import { AuthContext } from "../../context/AuthContext/AuthContext"

/**
 * @fixtureData
 */
import { user } from "../../fixtures/user"

export const MainPage = () => {
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const onLogin = async() => {
      login('abc123', user);
    }
    
    onLogin();
      
  }, [])

  return (
    <MainProvider>
      <Main>
        <NavTopHome />
        <Nav />
        <NavSwitch />
      </Main>
    </MainProvider>
  )
}