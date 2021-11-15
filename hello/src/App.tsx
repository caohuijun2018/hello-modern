import React from 'react';
import { List } from 'antd';
import 'ladda/dist/ladda.min.css';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import Item from './components/Item';
import './styles/utils.css';

const getAvatar = (users: Array<{ name: string; email: string }>) =>
  users.map(user => ({
    ...user,
    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,
  }));

const mockData = getAvatar([
  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },
  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },
  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },
  { name: 'Davis', email: '"t.kqkoj@utlkwnpwk.nu' },
]);

function App() {
  return (
    <>
      <List
        dataSource={mockData}
        renderItem={info => <Item info={info} key={info.name} />}
      />
    </>
  );
}

export default App;
