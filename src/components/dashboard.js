import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title, Resource } from 'react-admin';
import { PostShow } from '../components/post/posts'

const roleAdmin = "1";

export default ({ permissions }) => (
    <Card>
        <Title title="Dashboard" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        {permissions === roleAdmin
            ? <CardContent>
                <Resource name="posts" show={PostShow}/>
            </CardContent>
            : null
        }
    </Card>
);