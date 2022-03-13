import { html } from 'lit-html';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, size, label }) => html`
  <button
    type="button"
    class="storybook-button
      storybook-button--${size || 'medium'}
      storybook-button--${primary ? 'primary' : 'secondary'}"
  >
    ${label}
  </button>
`;
