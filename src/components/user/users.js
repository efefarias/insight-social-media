import * as React from "react";
import { List, Datagrid, TextField  } from 'react-admin';
import UrlField from './urlfield';

export const UserList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <UrlField source="email" />
            <TextField label="Adress" source="address.street" />
            <TextField source="phone" />
            <UrlField source="website" />
            <TextField label="Company" source="company.name" />
        </Datagrid>
    </List>
);