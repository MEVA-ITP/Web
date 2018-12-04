import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";

function Icons(props) {
    const {classes} = props;
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Ausgeborgtes Equipment</h4>
                        <p className={classes.cardCategoryWhite}>
                            History
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={["Vorname", "Nachname", "Email", "Klasse", "Verliehener Produkt", "Rückgabe am"]}
                            tableData={[
                                ["Semih", "Cakir", "scakir@student.tgm.ac.at", "4AHIT", "Kamera 365XYZ", "22.11.2018"],
                                ["Ulrich", "Frühstück", "ufruestueck@student.tgm.ac.at", "4AHIT", "Kamera 365XYZ", "22.11.2018"],
                                ["Christian", "Krebich", "ckreibich@student.tgm.ac.at", "4BHIT", "Kamera 365XYZ", "22.11.2018"],
                                ["Semir", "Alagic", "salagic@student.tgm.ac.at", "4BHIT", "Kamera 365XYZ", "22.11.2018"],
                                ["Viktor", "Mandelbauer", "vmandelbauer@student.tgm.ac.at", "4BHIT", "Kamera 365XYZ", "22.11.2018"],
                                ["Yasin", "Gomaa", "ygomaa@student.tgm.ac.at ", "4AHIT", "Kamera 365XYZ", "22.11.2018"]
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

Icons.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
