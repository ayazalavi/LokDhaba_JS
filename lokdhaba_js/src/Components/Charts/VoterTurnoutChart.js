import React, { Component } from 'react';
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

export default class VoterTurnoutChart extends Component {
  render() {
    var vizData = this.props.data;
    var dataFilterOptions = this.props.dataFilterOptions;
    var x_labels = vizData.map(function(item){return item.Year +" (#" + item.Assembly_No + ")"});
    var data = [];
    if(dataFilterOptions.has("male")){
      var y_male = vizData.map(x => x.male);
      var trace = {
                    type: 'bar',
                    x: x_labels,
                    y: y_male,
                    name: 'male'
                  }
      data.push(trace);
    }
    if(dataFilterOptions.has("female")){
      var y_female = vizData.map(x => x.female);
      var trace = {
                    type: 'bar',
                    x: x_labels,
                    y: y_female,
                    name: 'female'
                  }
      data.push(trace);
    }
    if(dataFilterOptions.has("total")){
      var y_total = vizData.map(x => x.total);
      var trace = {
                    type: 'bar',
                    x: x_labels,
                    y: y_total,
                    name: 'total'
                  }
      data.push(trace);
    }
    let layout = {
      title: 'Voter turnout across years in LokSabha',
      xaxis: {
        title: 'Year(Assembly Number)'
      },
      yaxis:{
        title: 'Turnout in %'
      }
    };
    let config = {
      showLink: false,
      displayModeBar: true
    };
    return (
      <PlotlyComponent className="chart" data={data} layout={layout} config={config}/>
    );
   }
}
