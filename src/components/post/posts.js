import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, Show, SimpleShowLayout, DateField, RichTextField } from 'react-admin';

const roleAdmin = "1"

export const PostList = ({ permissions, ...props }) => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid>
           <TextField source="id" />
            {permissions === roleAdmin ? <ReferenceField source="userId" reference="users">
                                            <TextField source="name" />
                                         </ReferenceField> 
                                        : null} 
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const PostShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="teaser" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
);