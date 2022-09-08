

import {
  ScatterChart,
  Scatter, XAxis,
  YAxis, CartesianGrid,
  Tooltip, 
  Legend, Label
} from 'recharts';

import "./charts-scatter.styles.scss"


const format_data = ( data ) => {

  const new_data = [ {} ]
  
  Object.keys(data['Polarity']).map( (key) =>  { 
    new_data[ key ] = {
      x: data['Polarity'][key],
      y: data['Subjectivity'][key],
      z: data['Analysis'][key]
    }
  } )
  
  return new_data;
}


const Chart = ({lula, bozo}) => {
  const data_lula = format_data(lula)
  const data_bozo = format_data(bozo)
  

  return (
    <div>
      <ScatterChart
          width={600}
          height={600}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,            
          } }
        className="scatter-chart"
        >
        <CartesianGrid />
        <XAxis type="number" dataKey='x' name="Polarity" unit=''>
          <Label value="Polarity" offset={0} position="bottom" />
        </XAxis>
        <YAxis type="number" dataKey='y' name="Subjectivity" unit=''
          label={{ value: 'Subjectivity', angle: -90, position: 'insideLeft' }}
        />
        
        <Tooltip cursor={ { strokeDasharray: '3 3' } } />
        
        <Legend verticalAlign="top" />        
          <Scatter name="Lula" data={ data_lula } fill="#d71313"  />          
          <Scatter name="Bolsonaro" data={ data_bozo } fill="#98d16f" /> 

      </ScatterChart>

    </div>
  ) 

}



export default Chart;