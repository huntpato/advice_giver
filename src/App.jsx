import { connect } from 'react-redux';
import Advice from './components/Advice/Advice';
import './App.css';

function App(props) {
  return (
    <main>
      <Advice id={props.id} advice={props.advice}/>
    </main>
  );
}

const mapStateToProps = (state) =>{
  return {...state}
}

export default connect(mapStateToProps,null)(App);
