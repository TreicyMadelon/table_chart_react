import React, {Component} from 'react';
import './styles.css';
import data from "./data/data.json";
import ReactTable from 'react-table';
import "react-table/react-table.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from 'react-chartjs-2';
class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        data: data,
        dataChart: {
          labels: [],
          datasets: [{
          label: "My First dataset",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: []
          }]
      }
    }

   

  }

 
  componentDidMount (){

    const {dataChart, data} = this.state;
   
    const items = data.map((item) => item.value );

    dataChart.datasets.map((set) => {
      set.data = items
    });

    const names = data.map((item) => item.first_name );

    dataChart.labels = names;

    this.setState({
      dataChart: dataChart,
     });
  }



    render() {
      //COLUMNS - COLUNAS//
  

      
     
      const columns =  [
        { Header: "ID",
          accessor: "id",},
   
         { Header: "Gender",
           accessor: "gender"},
   
         { Header: "Name",
          accessor: "first_name",
           sortable: false,
          filterable: false},
   
         { Header: "Email",
          accessor: "email",
          sortable: false,
           filterable: false},
       ]

      return (
       
        // TABLE - TABELA // 
        <div class="container">
       
        <Line data={this.state.dataChart} />
       
        <ReactTable
        columns={columns}
        data={data}
        noDataText={"Por favor aguarde..."}
        filterable
        defaultPageSize={5} > 
        </ReactTable>
        </div>
          
  
        ); //return
    }//render

} //app



export default App;
