import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import AccessTime from "@material-ui/core/SvgIcon/SvgIcon";
import CardFooter from "components/Card/CardFooter.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

const style = {
    gridItem: {
        width: "500px",
        height: "500px",
    },
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

function TypographyPage(props) {
    const {classes} = props;
    return (
    <div style={{paddingLeft: '30%', paddingRight: '15%', paddingBottom: '15%', paddingTop: '5%', position:'center'}}>
        <GridContainer classes={{container: classes.gridContainer}}>
            <img src={require('../../assets/img/workinprogress.jpg')} width={"80%"} height={"80%"} mode="fit"/>
        </GridContainer>
    </div>
    );
}

export default withStyles(style)(TypographyPage);
