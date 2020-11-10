import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, Show, SimpleShowLayout, DateField, RichTextField, Pagination } from 'react-admin';

const PostPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;
const roleAdmin = "1";

export const PostList = props => (
    <List {...props} pagination={<PostPagination />}>
        <Datagrid>
           <TextField source="id" />
           {permissions => [
                <ReferenceField source={permissions === roleAdmin ? "userId" : "userId"} 
                                reference={permissions === roleAdmin ? "users" : "users"}>
                    <TextField source="name" />
                </ReferenceField>
            ]}
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