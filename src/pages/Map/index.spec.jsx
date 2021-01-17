import React from 'react'
import Map from './'
import { render } from '@testing-library/react'

describe("Profile", () => {
  it("renders correctly", () => {
    const { container } = render(<Map />);
    expect(container.innerHTML).toMatch("Map page");
  })
})