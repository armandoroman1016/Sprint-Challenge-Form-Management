import React from 'react';
import FormikForm from './components/Form'
import Cards from './components/UserCard'
import './App.css';

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      recipeList : []
    }
  }

  addUserOrRecipe = (data) => {
    this.setState({recipeList : [...this.state.recipeList, data[1]]})
  }

  componentDidUpdate(prevProps, prevState){
    if(true){
      console.log('CDU',this.state.recipeList)
    }
  }

  render(){
    return (
    <div className="App">
      
      <FormikForm addUserOrRecipe = {this.addUserOrRecipe}/>
      <Cards recipeList = {this.state.recipeList}/>      
    </div>
  )
    };
}

export default App;
