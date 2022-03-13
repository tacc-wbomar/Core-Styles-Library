import { Button } from './Button';

export default {
  title: 'Example/Button',
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Primary = Button.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Button.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Button.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Button.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
