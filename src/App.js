import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList } from './components/post/posts';
import { UserList } from './components/user/users';
import { AlbumList } from './components/album/albums'
import { TodoList } from './components/todo/todos'
import { PhotoList } from './components/photo/photos' 
import { CommentsList } from './components/comments/comments' 
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import CommentIcon from '@material-ui/icons/Comment'
import AlbumsIcon from '@material-ui/icons/PhotoAlbum'
import PhotosIcon from '@material-ui/icons/Photo'
import TodoIcon from '@material-ui/icons/AssignmentLate'
import Dashboard from './components/dashboard';
import authProvider from './components/auth/authprovider';
import dataProvider from './components/dataProvider'

const roleAdmin = "1";

const App = () => (
    <Admin authProvider={authProvider} 
    dashboard={Dashboard} 
    dataProvider={dataProvider}>

    {permissions => [
        <Resource 
            options={{ label: 'Users' }}
            name="users" 
            list={permissions === roleAdmin ? UserList : null} 
            icon={permissions === roleAdmin ? UserIcon : null}
        />,
        <Resource 
            options={{ label: 'Posts' }}
            name="posts" 
            list={PostList} 
            icon={PostIcon}
        />,
        <Resource 
            options={{ label: 'Comments' }}
            name="comments" 
            list={CommentsList} 
            icon={CommentIcon}
        />,
        <Resource 
            options={{ label: 'Albums' }}
            name="albums" 
            list={AlbumList} 
            icon={AlbumsIcon}
        />,
        <Resource 
            options={{ label: 'Photos' }}
            name="photos" 
            list={PhotoList} 
            icon={PhotosIcon}
        />,
        <Resource
            options={{ label: 'To Dos' }}
            name="todos" 
            list={TodoList} 
            icon={TodoIcon}
        />
    ]}
    </Admin>
);

export default App;