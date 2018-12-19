import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import AccessTime from "@material-ui/core/SvgIcon/SvgIcon";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from '@material-ui/core/Button';
// Popup Window
import SimpleModal from "../Hardware/SimpleModal.jsx";

const styles = {
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

function Hardware(props) {
    const {classes} = props;
    return (
        <GridContainer classes={{container: classes.gridContainer}}>
            <GridItem xs={12} sm={6} md={4}>
                <Card chart>
                    <CardHeader>
                        <img src={require('../../assets/img/druckerxy.jpg')} width={"100%"} height={"100%"} mode="fit"/>
                    </CardHeader>
                    <CardBody>
                        <h4 className={classes.cardTitle}>Produkt XY</h4>
                        <p><i style={{textAlign: 'left'}}>Raum:</i><i style={{textAlign: 'right'}}> Fotolabor </i></p>
                        <i>Inventarnummer:</i><i> 3758k 648</i>
                        <p>Status:</p><p> Verfügbar </p>
                        <p>Kategorie:</p><p> Drucker</p>
                        <a href="https://cdn.billiger.com/dynimg/BeJSIoTIRwE6Ls_wbObPEXt4H9rycHjeBa9LTdXG2DAE0q0O1YuZqiNdvIY_Nfu9H6xxgR7bS-w5JXuNPDAA5g/Canon-PIXMA-MX925-Bedienungsanleitung-2efef0.pdf">Benutzerhandbuch</a>
                    </CardBody>
                    <div style={{paddingLeft: '5%', paddingBottom: '4%'}}>
                        <SimpleModal  SimpleModal={props.SimpleModal} />
                    </div>
                    <CardFooter chart>
                    </CardFooter>
                </Card>
            </GridItem>

            <GridItem xs={12} sm={6} md={4}>
                <Card chart>
                    <CardHeader>
                        <img src={require('../../assets/img/druckerxy.jpg')} width={"100%"} height={"100%"} mode="fit"/>
                    </CardHeader>
                    <CardBody>
                        <h4 className={classes.cardTitle}>Produkt XY</h4>
                        <p><i style={{textAlign: 'left'}}>Raum:</i><i style={{textAlign: 'right'}}> Fotolabor </i></p>
                        <i>Inventarnummer:</i><i> 3758k 648</i>
                        <p>Status:</p><p> Verfügbar </p>
                        <p>Kategorie:</p><p> Drucker</p>
                        <a href="https://cdn.billiger.com/dynimg/BeJSIoTIRwE6Ls_wbObPEXt4H9rycHjeBa9LTdXG2DAE0q0O1YuZqiNdvIY_Nfu9H6xxgR7bS-w5JXuNPDAA5g/Canon-PIXMA-MX925-Bedienungsanleitung-2efef0.pdf">Benutzerhandbuch</a>
                    </CardBody>
                    <div style={{paddingLeft: '5%', paddingBottom: '4%'}}>
                        <SimpleModal  SimpleModal={props.SimpleModal} />
                    </div>
                    <CardFooter chart>
                    </CardFooter>
                </Card>
            </GridItem>

            <GridItem xs={12} sm={6} md={4}>
                <Card chart>
                    <CardHeader>
                        <img src={require('../../assets/img/druckerxy.jpg')} width={"100%"} height={"100%"} mode="fit"/>
                    </CardHeader>
                    <CardBody>
                        <h4 className={classes.cardTitle}>Produkt XY</h4>
                        <p><i style={{textAlign: 'left'}}>Raum:</i><i style={{textAlign: 'right'}}> Fotolabor </i></p>
                        <i>Inventarnummer:</i><i> 3758k 648</i>
                        <p>Status:</p><p> Verfügbar </p>
                        <p>Kategorie:</p><p> Drucker</p>
                        <a href="https://cdn.billiger.com/dynimg/BeJSIoTIRwE6Ls_wbObPEXt4H9rycHjeBa9LTdXG2DAE0q0O1YuZqiNdvIY_Nfu9H6xxgR7bS-w5JXuNPDAA5g/Canon-PIXMA-MX925-Bedienungsanleitung-2efef0.pdf">Benutzerhandbuch</a>
                    </CardBody>
                    <div style={{paddingLeft: '5%', paddingBottom: '4%'}}>
                        <SimpleModal  SimpleModal={props.SimpleModal} />
                    </div>
                    <CardFooter chart>
                    </CardFooter>
                </Card>
            </GridItem>

            <GridItem xs={12} sm={6} md={4}>
                <Card chart>
                    <CardHeader>
                        <img src={require('../../assets/img/druckerxy.jpg')} width={"100%"} height={"100%"} mode="fit"/>
                    </CardHeader>
                    <CardBody>
                        <h4 className={classes.cardTitle}>Produkt XY</h4>
                        <p><i style={{textAlign: 'left'}}>Raum:</i><i style={{textAlign: 'right'}}> Fotolabor </i></p>
                        <i>Inventarnummer:</i><i> 3758k 648</i>
                        <p>Status:</p><p> Verfügbar </p>
                        <p>Kategorie:</p><p> Drucker</p>
                        <a href="https://cdn.billiger.com/dynimg/BeJSIoTIRwE6Ls_wbObPEXt4H9rycHjeBa9LTdXG2DAE0q0O1YuZqiNdvIY_Nfu9H6xxgR7bS-w5JXuNPDAA5g/Canon-PIXMA-MX925-Bedienungsanleitung-2efef0.pdf">Benutzerhandbuch</a>
                    </CardBody>
                    <div style={{paddingLeft: '5%', paddingBottom: '4%'}}>
                        <SimpleModal  SimpleModal={props.SimpleModal} />
                    </div>
                    <CardFooter chart>
                    </CardFooter>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

export default withStyles(styles)(Hardware);
