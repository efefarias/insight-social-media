import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, BooleanField, SimpleShowLayout, DateField, RichTextField, Pagination } from 'react-admin';

const roleAdmin = "1"

export const TodoList = ({ permissions, ...props }) => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid>
           <TextField source="id" />
           {permissions === roleAdmin ? <ReferenceField source="userId" reference="users">
                                            <TextField source="name" />
                                         </ReferenceField> 
                                        : null} 
            <TextField source="title" />
            <BooleanField source="completed" />
        </Datagrid>
    </List>
);