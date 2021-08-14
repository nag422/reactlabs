import { Grid } from '@material-ui/core';
import React from 'react'
import { Link, RouteComponentProps } from "react-router-dom";
// export interface StepsProps extends RouteComponentProps<{ stepId: string }> {}

const Dashboard:React.FC<RouteComponentProps> = (props) => {
    return (
        <Grid container>
            <Grid item sm={12}>
                item1
            </Grid>

        </Grid>
    )
}

export default Dashboard
