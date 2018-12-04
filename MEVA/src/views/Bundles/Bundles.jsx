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
import Button from "@material-ui/core/Button/Button";

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
        <GridItem xs={12} sm={6} md={12}>
            <Card chart>
                <CardHeader>
                    <img src={require('../../../src/assets/img/cam.png')} width={"20%"} height={"20%"} mode="fit"/>
                    <img src={require('../../../src/assets/img/equip.png')} width={"20%"} height={"20%"} mode="fit"/>
                    <img src={require('../../../src/assets/img/usb.png')} width={"20%"} height={"20%"} mode="fit"/>
                    <img src={require('../../../src/assets/img/vidcam.png')} width={"20%"} height={"20%"} mode="fit"/>
                    <img src={require('../../../src/assets/img/cards.png')} width={"20%"} height={"20%"} mode="fit"/>
                </CardHeader>
                <CardBody>
                    <h4 className={classes.cardTitle}>Bundle: "Oh shit es ist Zeit zu arbeiten XY"</h4>
                    <p><i style={{textAlign: 'left'}}>Raum:</i><i style={{textAlign: 'right'}}> Fotolabor </i></p>
                    <i>Inventarnummer:</i><i> 3758k 648 // 3758k 648 // 3758k 648 // 3758k 648 // 3758k 648</i>
                    <p>Status:</p><p> Verfügbar </p>
                    <p>Kategorie: Bundle Camera || Equipment || USB-Sticks || Video-Camera || SD-Cards</p>
                    <a href="https://cdn.billiger.com/dynimg/BeJSIoTIRwE6Ls_wbObPEXt4H9rycHjeBa9LTdXG2DAE0q0O1YuZqiNdvIY_Nfu9H6xxgR7bS-w5JXuNPDAA5g/Canon-PIXMA-MX925-Bedienungsanleitung-2efef0.pdf">Benutzerhandbuch</a>
                </CardBody>
                <div style={{paddingLeft: '7%', paddingBottom: '4%'}}>
                    <Button style={{width: '45%', height: '45%', backgroundColor: '#00BCD4', marginRight: '2%'}}
                            variant="contained" size="large" color="primary" className={classes.button}>
                        Reservieren
                    </Button>
                    <Button style={{width: '45%', height: '45%', backgroundColor: '#00BCD4', marginLeft: '2%'}}
                            variant="contained" size="large" color="primary" className={classes.button}>
                        Auswählen
                    </Button>
                </div>
                <CardFooter chart>
                    <div className={classes.stats}>
                        <AccessTime/> updated 4 minutes ago
                    </div>
                </CardFooter>
            </Card>
            <GridItem xs={12} sm={6} md={12}>
                <Card chart>
                    <CardHeader>
                        <img src={require('../../../src/assets/img/cam.png')} width={"20%"} height={"20%"} mode="fit"/>
                        <img src={require('../../../src/assets/img/equip.png')} width={"20%"} height={"20%"} mode="fit"/>
                        <img src={require('../../../src/assets/img/usb.png')} width={"20%"} height={"20%"} mode="fit"/>
                        <img src={require('../../../src/assets/img/vidcam.png')} width={"20%"} height={"20%"} mode="fit"/>
                        <img src={require('../../../src/assets/img/cards.png')} width={"20%"} height={"20%"} mode="fit"/>
                    </CardHeader>
                    <CardBody>
                        <h4 className={classes.cardTitle}>Bundle: "Oh shit es ist Zeit zu arbeiten XY"</h4>
                        <p><i style={{textAlign: 'left'}}>Raum:</i><i style={{textAlign: 'right'}}> Fotolabor </i></p>
                        <i>Inventarnummer:</i><i> 3758k 648 // 3758k 648 // 3758k 648 // 3758k 648 // 3758k 648</i>
                        <p>Status:</p><p> Verfügbar </p>
                        <p>Kategorie: Bundle Camera || Equipment || USB-Sticks || Video-Camera || SD-Cards</p>
                        <a href="https://cdn.billiger.com/dynimg/BeJSIoTIRwE6Ls_wbObPEXt4H9rycHjeBa9LTdXG2DAE0q0O1YuZqiNdvIY_Nfu9H6xxgR7bS-w5JXuNPDAA5g/Canon-PIXMA-MX925-Bedienungsanleitung-2efef0.pdf">Benutzerhandbuch</a>
                    </CardBody>
                    <div style={{paddingLeft: '7%', paddingBottom: '4%'}}>
                        <Button style={{width: '45%', height: '45%', backgroundColor: '#00BCD4', marginRight: '2%'}}
                                variant="contained" size="large" color="primary" className={classes.button}>
                            Reservieren
                        </Button>
                        <Button style={{width: '45%', height: '45%', backgroundColor: '#00BCD4', marginLeft: '2%'}}
                                variant="contained" size="large" color="primary" className={classes.button}>
                            Auswählen
                        </Button>
                    </div>
                    <CardFooter chart>
                        <div className={classes.stats}>
                            <AccessTime/> updated 4 minutes ago
                        </div>
                    </CardFooter>
                </Card>
            </GridItem>

            <GridItem xs={12} sm={6} md={12}>
                <Card chart>
                    <CardHeader>
                        <img src={require('../../../src/assets/img/cam.png')} width={"20%"} height={"20%"} mode="fit"/>
                        <img src={require('../../../src/assets/img/equip.png')} width={"20%"} height={"20%"} mode="fit"/>
                        <img src={require('../../../src/assets/img/usb.png')} width={"20%"} height={"20%"} mode="fit"/>
                        <img src={require('../../../src/assets/img/cards.png')} width={"20%"} height={"20%"} mode="fit"/>
                    </CardHeader>
                    <CardBody>
                        <h4 className={classes.cardTitle}>Bundle: "Oh shit es ist Zeit zu arbeiten XY"</h4>
                        <p><i style={{textAlign: 'left'}}>Raum:</i><i style={{textAlign: 'right'}}> Fotolabor </i></p>
                        <i>Inventarnummer:</i><i> 3758k 648 // 3758k 648 // 3758k 648 // 3758k 648 // 3758k 648</i>
                        <p>Status:</p><p> Verfügbar </p>
                        <p>Kategorie: Bundle Camera || Equipment || USB-Sticks || Video-Camera || SD-Cards</p>
                        <a href="https://cdn.billiger.com/dynimg/BeJSIoTIRwE6Ls_wbObPEXt4H9rycHjeBa9LTdXG2DAE0q0O1YuZqiNdvIY_Nfu9H6xxgR7bS-w5JXuNPDAA5g/Canon-PIXMA-MX925-Bedienungsanleitung-2efef0.pdf">Benutzerhandbuch</a>
                    </CardBody>
                    <div style={{paddingLeft: '7%', paddingBottom: '4%'}}>
                        <Button style={{width: '45%', height: '45%', backgroundColor: '#00BCD4', marginRight: '2%'}}
                                variant="contained" size="large" color="primary" className={classes.button}>
                            Reservieren
                        </Button>
                        <Button style={{width: '45%', height: '45%', backgroundColor: '#00BCD4', marginLeft: '2%'}}
                                variant="contained" size="large" color="primary" className={classes.button}>
                            Auswählen
                        </Button>
                    </div>
                    <CardFooter chart>
                        <div className={classes.stats}>
                            <AccessTime/> updated 4 minutes ago
                        </div>
                    </CardFooter>
                </Card>
            </GridItem>
        </GridItem>
    );
}

export default withStyles(style)(TypographyPage);
