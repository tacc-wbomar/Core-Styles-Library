import { Header } from './Header';

export default {
  title: 'Example/Header',
};

export const LoggedIn = Header.bind({});
LoggedIn.args = {
  user: { name: 'Bob' },
};

export const LoggedOut = Header.bind({});
LoggedOut.args = {};
