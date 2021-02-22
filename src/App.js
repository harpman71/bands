import React from 'react';
import './App.css';
import Search from './components/Search';
import DataItems from './components/DataItems';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[],
      searchData: []
    };    
    this.handleSearch = this.handleSearch.bind(this);
    
  }
  
  initBooks(){
    console.log('entra acá');
    this.setState((state,props) => ({
      searchData: [...state.data]
    }));
  }

  componentDidMount(){  
    fetch('https://mauriciofranco.com/dev/data.php')
        .then(response => response.json())
        .then(data => {
          this.setState({ data: data });
          this.initBooks();
          });        
  }

  handleSearch(e){
    let query = e.target.value.toString().toLowerCase();
    let res = [];
    this.state.data.forEach(item =>{
        if(item.name.toLowerCase().indexOf(query) > -1){
            res.push(item);
            }
        });
    this.setState({searchData: res});      
    }

  render(){    
    return (
        <div className="App">                
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
              <Search handleSearch={this.handleSearch}/>  
              <DataItems items={this.state.searchData}/>
            </div>          
        </div>
      );
    }
};

export default App;
