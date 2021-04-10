import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import './statistic.css'


ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: 650,
  height: 400,
  dataFormat: 'json',
  dataSource: {"chart": {
    "caption": "Districts With Most Waste Generation [ 2020-2021 ]",
    "subCaption": "In T/annum =  Tons per anum",
    "xAxisName": "District",
    "yAxisName": "Waste Generation",
    "numberSuffix": "K",
    "theme": "fusion"
  },
  "data": [
    {
      "label": "Bangalore",
      "value": "290"
    },
    {
      "label": "Mysore",
      "value": "260"
    },
    {
      "label": "Hubli",
      "value": "180"
    },
    {
      "label": "Chikkamagalur",
      "value": "140"
    },
    {
      "label": "Hassan",
      "value": "115"
    },
    {
      "label": "Shivamogga",
      "value": "100"
    },
    {
      "label": "Mangalore",
      "value": "30"
    },
  
  ]},


};


const Statistics = () =>{
  return <div className= "waste-gen">
      <ReactFC {...chartConfigs} />
      </div>;
}


export default Statistics;