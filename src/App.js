import * as React from "react";
import { Admin, ListGuesser, Resource } from 'react-admin';
import { PostList } from './components/post/posts';
import { UserList } from './components/user/users';
import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import CommentIcon from '@material-ui/icons/Comment'
import AlbumsIcon from '@material-ui/icons/PhotoAlbum'
import PhotosIcon from '@material-ui/icons/Photo'
import TodoIcon from '@material-ui/icons/AssignmentLate'
import Dashboard from './components/dashboard';
import authProvider from './components/auth/authprovider';

const apiUrl = 'http://localhost:3001';
const httpClient = fetchUtils.fetchJson;
const roleAdmin = "1";

const dataProvider = {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            page: page,
            perPage: perPage,
            filter: field,
            order: order,
            roleId: localStorage.permissions,
            Id: localStorage.id
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: headers.get('X-Total-Count'),
        }));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        
        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('X-Total-Count')),
        }));
    }
};

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
            list={ListGuesser} 
            icon={CommentIcon}
        />,
        <Resource 
            options={{ label: 'Albums' }}
            name="albums" 
            list={ListGuesser} 
            icon={AlbumsIcon}
        />,
        <Resource 
            options={{ label: 'Photos' }}
            name="photos" 
            list={ListGuesser} 
            icon={PhotosIcon}
        />,
        <Resource
            options={{ label: 'To Dos' }}
            name="todos" 
            list={ListGuesser} 
            icon={TodoIcon}
        />
    ]}
    </Admin>
);

export default App;