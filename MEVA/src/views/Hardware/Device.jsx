import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import SimpleModal from "../Popup/SimpleModal.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Chip from "@material-ui/core/es/Chip/Chip";

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

const device = (props) => {
    const {classes} = props;
    let {tags} = props

    tags = Array.isArray(tags) ? tags : []

    return (
        <GridItem xs={12} sm={6} md={4}>
            <Card chart>
                <CardHeader>
                    <img src={props.image} width={"100%"} height={"100%"} mode="fit"/>
                </CardHeader>
                <CardBody>
                    <h4 className={classes.cardTitle}>{props.name}</h4>
                    <p><i style={{textAlign: 'left'}}>Raum:</i><i style={{textAlign: 'right'}}>{props.room}</i></p>
                    <p><i>Inventarnummer:</i><i>{props.invnr}</i></p>
                    <p><i>Status:</i><i>{props.status}</i></p>
                    <p><i>Tags:</i> <i>{tags.map(t => <Chip key={t} label={t} />)}</i></p>
                </CardBody>
                <div style={{paddingLeft: '5%', paddingBottom: '4%'}}>
                    <SimpleModal SimpleModal={props.SimpleModal}/>
                </div>
                <CardFooter chart>
                </CardFooter>
            </Card>
        </GridItem>
    )

}

export const Device = withStyles(styles)(device)

Device.propTypes = {
    name: PropTypes.string.isRequired,
    serial: PropTypes.string,
    invnr: PropTypes.string,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.oneOf(["ok", "broken", "not available"]),
    attributes: PropTypes.object,
    room: PropTypes.string,
    tags: PropTypes.arrayOf(String),
}