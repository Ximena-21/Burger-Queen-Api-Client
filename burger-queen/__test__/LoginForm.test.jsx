import {screen, render} from '@testing-library/react';
import jestConfig from '../jest.config.cjs';
import { LoginForm } from '../src/components/Login/LoginForm';
 
jest.mock('../components/')
describe('LoginForm component ', () => {

    test('Render a button of login', () => {
        render( <LoginForm /> )
        const btnLogin = screen.getByRole('button', {name: 'Iniciar Sesión'});
        expect(btnLogin).toBeInTheDocument();
    })
})
