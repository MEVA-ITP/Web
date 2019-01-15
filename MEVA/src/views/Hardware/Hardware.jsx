import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
// Popup Window
import {Device} from "./Device";
import {model} from "../../falcor/Model";


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

export class Hardware extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            devices: {},
            showDevices: [],
        }
        /*this.fetchData()
            .then((devices) => this.setState({devices: devices}))*/
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const elementsPerPage = 5;
        const page = 0;

        const from = page * elementsPerPage;
        const to = from + elementsPerPage;
        const json = (await model.get(`devices[${from}..${to}]["name", "invnr", "image", "status", "tags", "room"]`)).json
        console.log(json)
        this.setState({
            devices: json.devices,
            showDevices: Array.from(new Array(elementsPerPage),(val,index)=>index+from)
        })
    }

    render() {
        const {showDevices, devices} = this.state

        return (
            <GridContainer>
                {showDevices.map(key => (
                    <Device {...devices[key]}/>
                ))}
            </GridContainer>
        );
    }

}

export default withStyles(styles)(Hardware);
