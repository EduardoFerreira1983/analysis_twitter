import React from 'react';
import './App.scss';
import Chart from './components/charts-scatter/charts-scatter.component' 
import DATA_B from './data/bolsonaro.json'
import DATA_L from './data/lula.json'
import ChartBar from './components/chart-bar/chart-bar.component'
import structure from './assets/structure.jpeg'

  
const App = () => {
  return (
    <div className="App">
        <h1> Análise de 100 tweets relacionados aos presenciáveis Lula e Bolsonaro </h1>

      <div className='chart-container'>
        <div>
          <Chart lula={ DATA_L } bozo={ DATA_B } className='chart-scatter' />
        </div>
        <div>
        <ChartBar lula={ DATA_L } bozo={ DATA_B } className='chart-bar' />
        </div>
      </div>
      <h1> Estrutura da pesquisa realizada até o momento</h1>
      <img className='structure-img'
        src={structure} alt="Structure">
      </img>
    </div>
  );
}

export default App;
