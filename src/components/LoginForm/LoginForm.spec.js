import React from 'react'
import { LoginForm } from './'
import { render } from '@testing-library/react'

describe("LoginForm", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<LoginForm />);

    expect(getByLabelText('Email')).toHaveAttribute('name', 'email');
    expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password');
  })
})