import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, Show, SimpleShowLayout, DateField, RichTextField, Pagination } from 'react-admin';

const PostPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

export const CommentsList = props => (
    <List {...props} pagination={<PostPagination />}>
        <Datagrid>
           <TextField source="id" />
            <ReferenceField source="postId" reference="posts">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const CommentsShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="teaser" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
);