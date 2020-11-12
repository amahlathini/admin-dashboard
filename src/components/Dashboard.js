import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
//import { GMapField } from '@fusionworks/ra-google-maps-input';

const Dashboard = () => {
    return (
        <Card>
        <Title title="Welcome to the ePharmacy Delivery System Dashboard" />
        <CardContent style={{fontSize: 50, marginTop: 50}}>Let's Manage...
        {/* <GMapField
         // source="coordinates"
          multipleMarkers
          searchable
          coordinates
          googleKey="AIzaSyAO4FqbMWKrjiPJJn4JHoZ-sddaPamrZO8"
        /> */}
        </CardContent>

    </Card>
    )
}

export default Dashboard
