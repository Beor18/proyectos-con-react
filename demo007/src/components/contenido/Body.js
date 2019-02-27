import React from 'react';
import PriceCard from './card/PrecioCard';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.BASE_URL = "https://cors.io/?https://api.cryptonator.com/api/ticker/";
    }
    
    componentDidMount() {

    }
}

export default Body;