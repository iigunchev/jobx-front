import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header', () => {
    const view = render(<App />);
    // const header = screen.getByText(/lista/i);
    expect(view.container).toHaveTextContent(/lista/i);
});
