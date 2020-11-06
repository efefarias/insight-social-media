import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './components/post/posts';
import { UserList } from './components/user/users';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './components/dashboard';
import authProvider from './components/auth/authprovider';

//const dataProvider = simpleRestProvider('http://localhost:3333');
const dataProvider = jsonServerProvider('http://localhost:3000');

const App = () => (
      <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
          <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
          <Resource name="users" list={UserList} icon={UserIcon} />
      </Admin>
);

export default App;