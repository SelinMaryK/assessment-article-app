import React, { useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import Articles from './components/Articles';
import Pagination from './components/Pagination';
import Header from './components/Header';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePerPage] = useState(1);
  const [searchData, setSearchData] = useState([]);

 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await Axios.get('./data/articles.json');
      setArticles(res.data.data);
      setSearchData(res.data.data);
      setLoading(false);
    }
    fetchData();
    updateImage();
  
  },[]);

  //Prefix image url
  const updateImage = () =>{
    let node = document.getElementsByTagName('img');
    const prefixUrl = "https://cdn2.audiencemedia.com/";
    setTimeout(() => {
     for (var i = 0; node[i]; i++) {
       if(node[i].src){
           let index = node[i].src.indexOf('var');
           let modifiedUrl = node[i].src.slice(index);
           modifiedUrl = prefixUrl+modifiedUrl;
           node[i].src = modifiedUrl;
       }
     }
   }, 1000);
  }
  
  
  const index_lastArticle = currentPage * articlePerPage;
  const index_firstArticle = index_lastArticle - articlePerPage;
  const currentArticle = articles.slice(index_firstArticle,index_lastArticle);

  //set current page on click
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    updateImage();
  }
  
  //Method to search articles, display and update the pagination count 
  const searchResult = (value) =>{
    let filteredData;
    if(value.length>0){
      filteredData = articles.filter(article=> {
          let data;
          if(article.authors != null){
            data = article.authors[0].toLowerCase().includes(value.trim().toLowerCase())
          }
          if(!data && article.title!=null){
            data = article.title.trim().toLowerCase().includes(value.trim().toLowerCase());
          }
          if(!data && article.body!=null){
            data = article.body.toLowerCase().includes(value.trim().toLowerCase());
          }
          return data;
          
        });
    }else{
      filteredData = searchData;
      setCurrentPage(1);
    }
    updateImage();
    setArticles(filteredData);
    
}

  return (
    <div>
      <Header searchResult={searchResult}></Header>
      <Articles articles={currentArticle} loading={loading}/>
      <Pagination articlePerPage={articlePerPage} totalArticles={articles.length}
      paginate={paginate} currentPage={currentPage}/>
    </div>
  );
}

export default App;
