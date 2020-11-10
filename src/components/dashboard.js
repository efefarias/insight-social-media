import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title, Resource } from 'react-admin';
import { PostShow } from '../components/post/posts'
import { TabbedShowLayout, Tab, List, Datagrid, TextField, ReferenceField, EmailField } from 'react-admin'
import { Chart } from "react-google-charts"; 

const roleAdmin = "1";

const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"] // CSS-style declaration
  ];

export default ({ permissions }) => (
    <Card>
        <Title title="Dashboard"/>
        <CardContent>Available Reports</CardContent>
        {permissions === roleAdmin
                    ? <div className="App">
                    <Chart
                      chartType="ColumnChart"
                      width="100%"
                      height="400px"
                      data={data}
                    />
                  </div>
                    : null}

    </Card>
);