import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
    grid: {
        margin: "0 -15px !important",
        width: "unset"
    }
};

function GridContainer(props) {
    const {classes, children, ...rest} = props;
    const {grid, ...otherClasses} = classes;
    return (
        <Grid container {...rest} classes={otherClasses} className={grid}>
            {children}
        </Grid>
    );
}

export default withStyles(style)(GridContainer);
