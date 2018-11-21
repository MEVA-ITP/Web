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
  const { classes } = props;
  return (
    <GridContainer classes={{container: classes.gridContainer}}>
        <GridItem xs={12} sm={6} md={4}>
            <Card chart>
                <CardHeader>
                    <img src={ require('../../assets/img/druckerxy.jpg') } width={"100%"} height={"100%"} mode="fit" />
                </CardHeader>
                <CardBody>
                    <h4 className={classes.cardTitle}>Produkt XY</h4>
                    <p><i style={{textAlign: 'left'}}>Raum:</i><i style={{textAlign: 'right'}}> Fotolabor </i></p>
                    <i>Inventarnummer:</i><i> 3758k 648</i>
                    <p>Status:</p><p> Verfügbar </p>
                    <p>Kategorie:</p><p> Drucker</p>
                    <a href="https://cdn.billiger.com/dynimg/BeJSIoTIRwE6Ls_wbObPEXt4H9rycHjeBa9LTdXG2DAE0q0O1YuZqiNdvIY_Nfu9H6xxgR7bS-w5JXuNPDAA5g/Canon-PIXMA-MX925-Bedienungsanleitung-2efef0.pdf">Benutzerhandbuch</a>
                </CardBody>
                <div style={{paddingLeft: '20%', paddingRight: '20%', paddingBottom: '4%'}}>
                    <Button style={{width: '100%', height: '100%'}} variant="contained" size="large" color="primary" className={classes.button}>
                        Bestellung
                    </Button>
                </div>
                <CardFooter chart>
                    <div className={classes.stats}>
                        <AccessTime/>updated 4 minutes ago
                    </div>

                </CardFooter>
            </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={4}>
            <Card chart>
                <CardHeader>
                    <img src={ require('../../assets/img/druckerxy.jpg') } width={"100%"} height={"100%"} mode="fit" />
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
                        <AccessTime /> updated 4 minutes ago
                    </div>
                </CardFooter>
            </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={4}>
            <Card chart>
                <CardHeader>
                    <img src={ require('../../assets/img/druckerxy.jpg') } width={"100%"} height={"100%"} mode="fit" />
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
                        <AccessTime /> updated 4 minutes ago
                    </div>
                </CardFooter>
            </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={4}>
            <Card chart>
                <CardHeader>
                    <img src={ require('../../assets/img/druckerxy.jpg') } width={"100%"} height={"100%"} mode="fit" />
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
                        <AccessTime /> updated 4 minutes ago
                    </div>
                </CardFooter>
            </Card>
        </GridItem>

        {false &&<GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Country", "City", "Salary"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                ["Mason Porter", "Chile", "Gloucester", "$78,615"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>}
        {false &&<GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>}

    </GridContainer>
  );
}

export default withStyles(styles)(Hardware);
