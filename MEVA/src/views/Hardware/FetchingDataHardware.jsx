import React, {Component} from 'react';

class FetchingDataHardware extends Component {
    constructor() {
        super();
        this.state = {
            devices: [],
        };
    }
    componentDidCatch() {
        fetch('../../falcor/Models.js/?results=20'}
        .then(results => {
            return results.json();
        }).then(data => {
            let devicesById = data.results.map((devicesById) => {
                return{
                    <div key={devicesById.id}/>
                    )
                })
                this.setState({devicesById: devicesById});
                console.log("state", this.state.devicesById);
            })
}
{/**In dieser Klasse verwenden wir von der Datenbank die jeweiligen Daten extracten und diese Klasse wie beim Popup fenster als Methode in HAardware implementieren**/}