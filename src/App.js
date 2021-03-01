import React from 'react';
import './App.css';
import Search from './components/Search';
import DataItems from './components/DataItems';
import ShowBio from './components/ShowBio';


class App extends React.Component {
/*ES6 */
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data:[],
  //     searchData: []
  //   };    
  //   this.handleSearch = this.handleSearch.bind(this);
    
  // }    
  
  // initBooks(){
  //   console.log('entra acá');
  //   this.setState((state,props) => ({
  //     searchData: [...state.data]
  //   }));
  // }

  // componentDidMount(){  
  //   fetch('https://mauriciofranco.com/dev/data.php')
  //       .then(response => response.json())
  //       .then(data => {
  //         this.setState({ data: data });
  //         this.initBooks();
  //         });        
  // }

  // handleSearch(e){
  //   let query = e.target.value.toString().toLowerCase();
  //   let res = [];
  //   this.state.data.forEach(item =>{
  //       if(item.name.toLowerCase().indexOf(query) > -1){
  //           res.push(item);
  //           }
  //       });
  //   this.setState({searchData: res});      
  //   }

  /*ES7 */
  state = {
    data:[],
    searchData: [],
    titleModal: null,
    bodyModal: null,
    showModal: false
  }; 

  initArtist = () => {
      //console.log('entra acá');
      this.setState((state,props) => ({
        searchData: [...state.data]
      }));
    }

 componentDidMount = () =>{  
    fetch('https://mauriciofranco.com/dev/data.php')
        .then(response => response.json())
        .then(data => {
          this.setState({ data: data });
          this.initArtist();
          });        
    } 

  handleSearch = (e) => {
    let query = e.target.value.toString().toLowerCase();
    let res = [];
    this.state.data.forEach(item =>{
        if(item.name.toLowerCase().indexOf(query) > -1){
            res.push(item);
            }
        });
    this.setState({searchData: res});      
    }

  handleShowBio = (id) => {
    const result = this.state.searchData.filter((a) => a.id === id);
    this.setState({
      titleModal: result[0].name,
      bodyModal: result[0].bio,
      showModal: true
      });    
    }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      titleModal: null,
      bodyModal: null      
      });    
    }

  render(){    
    return (
        <div className="App">                
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
              <Search handleSearch={this.handleSearch}/>  
              <DataItems handleShowBio={this.handleShowBio} items={this.state.searchData}/>
              {this.state.showModal &&
              <ShowBio
              title = {this.state.titleModal}
              body = {this.state.bodyModal}
              visible = {this.state.showModal}
              handleCloseModal={this.handleCloseModal}
              />
              }
            </div>          
        </div>
      );
    }
};

export default App;
