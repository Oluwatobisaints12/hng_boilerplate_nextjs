import { render, screen, fireEvent } from '@testing-library/react';
import IntroSection from './IntroSection';
import '@testing-library/jest-dom';

describe('IntroSection', () => {
  it('renders the email verified alert', () => {
    render(<IntroSection />);
    expect(screen.getByText('Email Verified Successfully')).toBeInTheDocument();
  });

  it('renders the verification successful message', () => {
    render(<IntroSection />);
    expect(screen.getByText('Verification Successful')).toBeInTheDocument();
    expect(screen.getByText('Your verification was successful, you can now proceed to reset your password')).toBeInTheDocument();
  });

  it('renders the reset password button', () => {
    render(<IntroSection />);
    const button = screen.getByText('Reset Password');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    // You can add more assertions to check if clicking the button performs the expected action
  });
});
