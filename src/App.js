import './App.css';
import React from 'react'
import Counter from './Counter'
import HOCRed from './HOCred';
import HOCcounter from './HOCcounter';
class  App extends React.Component {
  constructor()
  {
    super();
    this.state={
      count:1
    }
  }
 render()
 {
  return (
    <div className="App">

     <div>
     <h1>HOC </h1>
      <HOCRed cmp={HOCcounter} />
     </div>
     <div>
     <Counter count={this.state.count} />
      <button 
      onClick={()=>{this.setState({count:this.state.count+1})}}> Update Count
      </button>
     </div>
    </div>
  );
 }
}

export default App;