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
        <GridContainer>
            <GridItem xs={12} sm={6} md={4}>
                <Card chart>
                    <CardHeader>
                        <img src={require('../../assets/img/PIXMA MX925.jpg')} width={"100%"} height={"100%"}
                             mode="fit"/>
                    </CardHeader>
                    <CardBody>
                        <h4 className={classes.cardTitle}>Produkt XY</h4>
                        <p><i style={{textAlign: 'left'}}>Raum:</i><i style={{textAlign: 'right'}}> Fotolabor </i></p>
                        <i>Inventarnummer:</i><i> 3758k 648</i>
                        <p>Status:</p><p> Verfügbar </p>
                        <p>Kategorie:</p><p> Drucker</p>
                        <a href="https://cdn.billiger.com/dynimg/BeJSIoTIRwE6Ls_wbObPEXt4H9rycHjeBa9LTdXG2DAE0q0O1YuZqiNdvIY_Nfu9H6xxgR7bS-w5JXuNPDAA5g/Canon-PIXMA-MX925-Bedienungsanleitung-2efef0.pdf">Benutzerhandbuch</a>
                    </CardBody>
                    <CardFooter chart>
                        <div className={classes.stats}>
                            <AccessTime/> updated 4 minutes ago
                        </div>
                    </CardFooter>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

export default withStyles(style)(TypographyPage);
