import {
  BarChart,
   XAxis,
  YAxis, CartesianGrid,
  Tooltip, 
  Legend, Bar
} from 'recharts';



const format_data = ( data, name ) => {

  var total_neutral = 0
  var total_negative = 0
  var total_positive = 0
  Object.keys( data[ 'Polarity' ] ).map( ( key ) => {
    if ( data[ 'Analysis' ][ key ] === 'Neutral' )
      total_neutral += 1
    if ( ( data[ 'Analysis' ][ key ] === 'Negative' ) )
      total_negative += 1
    if ( ( data[ 'Analysis' ][ key ] === 'Positive' ) )
      total_positive +=1
  } )
  
  return  {
    name : name,
    Neutral: total_neutral,
    Negative: total_negative,
    Positive: total_positive
  };
}



const ChartBar = ({lula,bozo}) => {
  
  const new_data =  [];
  new_data.push( format_data( lula,"Lula" ) )
  new_data.push (format_data(bozo, "Bolsonaro"))
  
  
  return (
    <div>
        <BarChart
          width={600}
          height={600}
          data={new_data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Neutral" fill="#8884d8" />
          <Bar dataKey="Positive" fill="#82ca9d" />
          <Bar dataKey="Negative" fill="#d72b0d" />
        </BarChart>
      
      </div>
  );
}

export default ChartBar;