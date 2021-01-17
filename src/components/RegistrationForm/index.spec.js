import React from 'react'
import RegistrationForm from './'
import { render } from '@testing-library/react'

describe("RegistrationForm", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<RegistrationForm />);

    expect(getByLabelText('Email*')).toHaveAttribute('name', 'email');
    expect(getByLabelText('Как вас зовут?*')).toHaveAttribute('name', 'fullName');
    expect(getByLabelText('Придумайте пароль*')).toHaveAttribute('name', 'password');
  })
})
