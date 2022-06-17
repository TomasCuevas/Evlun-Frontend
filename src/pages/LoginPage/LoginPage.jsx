/**
 * @hooks
 */
 import { useForm } from '../../hooks/useForm'

 /**
  * @components
  */
 import { Main } from '../../components/Main/Main'
 import { Container } from '../../components/Container/Container'
 import { Form, FormInputPrimary, FormButtonPrimary, FormQuestion } from '../../components/Form'
 
 /**
  * @styles
  */
 import styles from './loginPage.module.scss';
 
 export const LoginPage = () => {
   const [ { email, password }, handleInputChange ] = useForm({
     email: '',
     password: ''
   });
 
   const onSubmit = ( event ) => {
     event.preventDefault();
   }
 
   return (
     <Main>
       <Container>
 
         <p className={styles.form__legend}>
           Iniciar sesión en <span>Evlun</span>
         </p>
 
         <Form
           autocomplete='off'
           formSubmit={onSubmit}
         >
           <FormInputPrimary 
             inputName='email'
             label='Correo electronico'
             inputValue={email}
             inputChange={handleInputChange}
             inputType='email'
           />
           <FormInputPrimary 
             inputName='password'
             label='Contraseña'
             inputValue={password}
             inputChange={handleInputChange}
             inputType='password'
           />
           <FormButtonPrimary 
             buttonText='Iniciar Sesión'
             buttonSubmit={onSubmit}
           />
         </Form>
 
         <FormQuestion 
           question='¿No tienes una cuenta?'
           linkQuestion='Regístrate'
           link='/signup'
         />
         
       </Container>
     </Main>
   )
 }