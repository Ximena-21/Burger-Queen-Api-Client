// export const LoginForm =  jest.fn(
// //   () => Promise.resolve(
// //     () => {
// //     return (
// //         <form className="loginPage_form">
// //           <input type="email" name="email" className="loginPage_input" placeholder="Correo" />
// //           <input type="password" name="password" className="loginPage_input" placeholder="Contraseña" />
// //           <button className="loginPage_btn">Iniciar Sesión</button>
// //         </form>
// //       );
// // }
// // )
// ) 

export const LoginForm = jest.fn (() => {
  return (
            <form className="loginPage_form">
              <input type="email" name="email" className="loginPage_input" placeholder="Correo" />
              <input type="password" name="password" className="loginPage_input" placeholder="Contraseña" />
              <button className="loginPage_btn">Iniciar Sesión</button>
            </form>
          );
})
    