import { connect } from 'react-redux';
import { setAdvice } from '../../actions/advice.action';

interface IAdviceProps{
    id: number;
    advice:string;
    setAdvice: () => void;
}

const Advice = ({id, advice, setAdvice} : IAdviceProps) => {

  return (
    <div className='advice'>
        <small>advice #{id}</small>
        <h2>"{advice}"</h2>
        <button className='random_button'onClick={()=>{setAdvice()}}/>
    </div>
  );
}

const mapDispatchToProps = {
    setAdvice: setAdvice,
}

export default connect(null, mapDispatchToProps)(Advice);