import {screen, render} from '@testing-library/react';
import { LoginForm } from '../src/components/Login/LoginForm';

jest.mock('../src/components/Login/LoginForm')

describe('LoginForm component ', () => {

    test('Render a button of login', () => {
        render( <LoginForm /> )
        screen.debug()
        const btnLogin = screen.getByRole('button', {name: 'Iniciar Sesión'});
        expect(btnLogin).toBeInTheDocument();
    })
})
