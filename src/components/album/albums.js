import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, SimpleShowLayout, DateField, RichTextField, Pagination } from 'react-admin';

const roleAdmin = "1"

export const AlbumList = ({ permissions, ...props }) => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid>
           <TextField source="id" />
           {permissions === roleAdmin ? <ReferenceField source="userId" reference="users">
                                            <TextField source="name" />
                                         </ReferenceField> 
                                        : null} 
            <TextField source="title" />
        </Datagrid>
    </List>
);