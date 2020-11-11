import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

const Dashboard = () => {
    return (
        <Card>
        <Title title="Welcome to the ePharmacy Delivery System Dashboard" />
        <CardContent>Let's Manage...</CardContent>
    </Card>
    )
}

export default Dashboard
