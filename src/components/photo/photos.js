import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, UrlField, DateField, RichTextField, Pagination } from 'react-admin';

const roleAdmin = "1"

export const PhotoList = ({ permissions, ...props }) => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid>
           <TextField source="id" />
           {permissions === roleAdmin ? <ReferenceField source="albumId" reference="albums">
                                            <TextField source="id" />
                                         </ReferenceField> 
                                        : null} 
            <TextField source="title" />
            <UrlField source="thumbnailUrl" />
            <UrlField source="url" />
        </Datagrid>
    </List>
);