import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EmailField, Pagination } from 'react-admin';

const PostPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

export const CommentsList = props => (
    <List bulkActionButtons={false} {...props} pagination={<PostPagination />}>
        <Datagrid>
           <TextField source="id" />
            <ReferenceField source="postId" reference="posts">
                <TextField source="id" />
            </ReferenceField>
            <EmailField source="email" />
            <TextField source="name" />
            <TextField source="body" />
        </Datagrid>
    </List>
);