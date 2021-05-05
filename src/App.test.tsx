import { render } from '@testing-library/react';
import App from './App';
describe("Home component", () => {
  let view: any;

  beforeEach(() => {
    view = render(<App />);
  });

  it("renders App correctly", () => {
    expect(view).toMatchSnapshot();
  });
});
