/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import './App.css';
import Recipe from './components/Reciepe';

function App() {
  const APP_ID ='89701119'
  const APP_KEY="8fad4eea85224f4fc65872723b76fb24"
  const [recipes,setRecipes]=useState([])
  const [search,setSearch]=useState('')
  const [query,setQuery]=useState('momo')
  const getSearch =e=>{
    e.preventDefault()
    setQuery(search)
    setSearch('')

  }
  function getRecipes(){
    fetch('https://api.edamam.com/search?q='+query+'&app_id='+APP_ID+'&app_key='+APP_KEY)
    .then(res => res.json())
    .then(data=>setRecipes(data.hits))
  }
  useEffect(() =>{
    getRecipes()
  
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[query])
  return (
    <div className="App">
     <form className="search-form" onSubmit={getSearch}>
      <input type="text" className="search-bar"  onChange={e=>setSearch(e.target.value)} />
      <button type="submit" className="search-button">Search</button>
     </form>
     <div className='recipes'>
     {recipes.map((recipe,idx)=>
     <Recipe  key={idx}
     title={recipe.recipe.label}
     calories={recipe.recipe.calories}
     image={recipe.recipe.image}
     ingredients={recipe.recipe.ingredients}
     />)
     }</div>
    
    </div>
  );
}

export default App;
