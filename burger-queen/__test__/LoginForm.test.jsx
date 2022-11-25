import {screen, render} from '@testing-library/react';
import { LoginForm } from '../src/components/Login/LoginForm';
import { BrowserRouter } from 'react-router-dom'
// jest.mock('../src/components/Login/LoginForm')

describe('LoginForm component ', () => {

    test('Render a button of login', () => {
        render( <LoginForm />, {wrapper: BrowserRouter}  )
        const btnLogin = screen.getByRole('button', {name: 'Iniciar Sesión'});
        expect(btnLogin).toBeInTheDocument();
    })
})
