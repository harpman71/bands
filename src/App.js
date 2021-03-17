import React,{ useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import Loading from './components/Loading';
import DataItems from './components/DataItems';
import ShowBio from './components/ShowBio';


const App = () => {

  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [titleModal, setTitleModal] = useState(null);
  const [bodyModal, setBodyModal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() =>{  
    fetch('https://mauriciofranco.com/dev/data.php')
        .then(response => response.json())
        .then(data => {
          setData(data);
          setSearchData(data);
          });        
    },[]);

  const handleSearch = (e) => {
    let query = e.target.value.toString().toLowerCase();
    let res = [];
    data.forEach(item =>{
        if(item.name.toLowerCase().indexOf(query) > -1){
            res.push(item);
            }
        });
        setSearchData(res);      
    }

  const handleShowBio = (id) => {
    console.log(id);
    const result = searchData.filter((a) => a.id === id);
    setTitleModal(result[0].name);
    setBodyModal(result[0].bio);
    setShowModal(true);         
    }

  const handleCloseModal = () => {
    setShowModal(false); 
    setTitleModal(null);
    setBodyModal(null);        
    }

         
  return (
      <div className="App">                
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <Search handleSearch={handleSearch}/>
            {data.length===0 ?
            <Loading/>:
            <DataItems 
              handleShowBio={handleShowBio} 
              items={searchData}
            />
            }
            {showModal &&
            <ShowBio
            title = {titleModal}
            body = {bodyModal}
            visible = {showModal}
            handleCloseModal={handleCloseModal}
            />
            }
          
          </div>          
      </div>
    );
  }


export default App;
