import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

const roleAdmin = "1"

export default ({ permissions }) => (
    <Card>
        <Title title="Dashboard" />
        {permissions === roleAdmin
            ? <CardContent>Reports availables to Admins</CardContent>
            : <CardContent>Reports availables to Users</CardContent>
        }
    </Card>
);

/*import React from 'react';
import {getApiData} from '../services/services';
import { Chart } from "react-google-charts"; 

const data = []

const options = {
    title: "Age vs. Weight comparison",
    hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
    vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
    legend: "none"
  };

class Dashboard extends React.Component {
  constructor(){
    super();
    this.state={
      result:''
    }
  }
  componentDidMount(){
    getApiData().then(data=>{
        console.log(data);
     });
 }
  render(){
    return (
        <Chart
          chartType="ScatterChart"
          data={data}
          options={options}
          width="80%"
          height="400px"
          legendToggle
        />
      );
  }
}

export default Dashboard;*/