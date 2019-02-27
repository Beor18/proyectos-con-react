import React from 'react';
import PrecioCard from './../card/PrecioCard';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, Widgets, FusionTheme);

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.BASE_URL = "https://almundo-examen.herokuapp.com/api/";
            this.chartRef = null;
            this.state = {
                cuantos: '-',
                ok: "",
                hotels: '-',
                showChart: false,
                initValue: 0,
                dataSource : {
                    "chart": {
                        "caption": "Estadisticas de registros cargados",
                        "subCaption": "",
                        "xAxisName": "Hora Local",
                        "yAxisName": "Cuantos Hoteles",
                        "numberPrefix": "Total: ",
                        "refreshinterval": "2",
                        "slantLabels": "1",
                        "numdisplaysets": "10",
                        "labeldisplay": "rotate",
                        "showValues": "0",
                        "showRealTimeValue": "0",
                        "theme": "fusion"    
                    },
                    "categories": [{
                        "category": [{
                            "label": this.clientDateTime().toString()
                        }]
                    }],
                    "dataset": [{
                        "data": [{
                            "value": 0
                        }]
                    }]
                }
            };
            this.chartConfigs = {
                type: 'realtimeline',
                renderAt: 'container',
                width: '100%',
                height: '350',
                dataFormat: 'json'
        };
    }

    componentDidMount() {
        this.getDataFor("hoteles", "cuantos");
        this.getDataFor("hoteles", "ok");
        this.getDataFor("hoteles", "hotels");
    }

    startUpdatingData() {
        setInterval(() => {
            fetch(this.BASE_URL + "hoteles")
            .then(res => res.json())
            .then(d => {
                let x_axis = this.clientDateTime();
                let y_axis = d.cuantos;
                this.chartRef.feedData("&label=" + x_axis + "&value=" + y_axis);
            });
        }, 2000);
    }

    getDataFor(hoteles, prop) {
        fetch(this.BASE_URL + hoteles, {
            mode: 'cors'
        })
        .then(res => res.json())
        .then(d => {
            if(prop === "cuantos"){
                const dataSource = this.state.dataSource;
                dataSource.chart.yAxisMaxValue = parseInt(d.cuantos)
                dataSource.chart.yAxisMinValue = parseInt(d.cuantos)
                console.log(JSON.stringify(dataSource));
                dataSource.dataset[0]["data"][0].value = d.cuantos;
                this.setState({
                    showChart: true,
                    dataSource: dataSource,
                    initValue: d.cuantos
                },
                () => {
                    this.startUpdatingData();
                });
            }
            this.setState({
                cuantos: d.cuantos,
                hotels: d.hotels.stars
            });
        });
    }

    static addLeadingZero(num){
        return num <=  9 ? "0" + num:num;
    }

    clientDateTime() {
        var date_time = new Date();
        var curr_hour = date_time.getHours();
        var zero_added_curr_hour = Body.addLeadingZero(curr_hour);
        var curr_min = date_time.getMinutes();
        var curr_sec = date_time.getSeconds();
        var curr_time = zero_added_curr_hour + ":" + curr_min + ":" + curr_sec;
        return curr_time;
      }
      getChartRef(chart) {
        this.chartRef = chart;
      }
      render() {
        return (
          <div className="row mt-5 mt-xs-4">
            <div className="col-12 mb-3">
              <div className="card-deck custom-card-deck">
                <PrecioCard
                  header="Registro Total:"
                  src={""}
                  alt="fireSpot"
                  label="(Lugares)"
                  value={this.state.cuantos}
                />
                <PrecioCard
                  header="Un texto"
                  src={""}
                  alt="fireSpot"
                  label="(cosas)"
                  value={this.state.ok}
                />
                <PrecioCard
                  header="Un Texto"
                  src={""}
                  alt="fireSpot"
                  label="(de algo)"
                  value={this.state.hotels}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="card custom-card mb-5 mb-xs-4">
                <div className="card-body">
                  {this.state.showChart ? (
                    <ReactFC
                      {...this.chartConfigs}
                      dataSource={this.state.dataSource}
                      onRender={this.getChartRef.bind(this)}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      }
}

export default Body;