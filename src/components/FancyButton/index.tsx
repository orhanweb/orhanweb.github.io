import React, { ButtonHTMLAttributes } from 'react';
import './index.css';
import { twMerge } from 'tailwind-merge';

interface FancyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

/**
 * FancyButton - A flexible, customizable button component.
 *
 * This component leverages Tailwind CSS for styling, allowing the width, height, and other
 * visual properties to be easily controlled via the `className` prop.
 *
 * The component also accepts all standard HTML button attributes, making it suitable for
 * a wide range of use cases, from simple buttons to form submissions.
 *
 * Tailwind-merge (twMerge) is used to intelligently merge any external `className` prop with
 * the default button styling, preventing conflicts and ensuring that external classes
 * override the default ones where necessary.
 *
 * @param {string} [text="See more"] - The button label. If no text is provided, defaults to "See more".
 * @param {string} [className] - Additional Tailwind CSS class names for styling the button.
 * @param {...props} props - Any additional attributes such as onClick, disabled, etc.
 *
 * @returns {JSX.Element} A fully customizable button component.
 */
const FancyButton: React.FC<FancyButtonProps> = ({
  text = 'See more', // Default button label
  className, // Optional className prop for additional styles
  ...props // Spread operator for all other button attributes
}) => {
  return (
    <button
      // twMerge intelligently merges the default styles with any passed className
      className={twMerge(
        'fancy-button w-64 h-16', // Default width and height
        className // Additional className if provided
      )}
      // Spread all remaining props (like onClick, disabled, etc.)
      {...props}
    >
      {text} {/* Render button text */}
    </button>
  );
};

export default FancyButton;
