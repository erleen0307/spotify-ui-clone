import './Library.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; 


function Title(){
    return(
        <div className='TitleFrame'> 
            <h4 className='heading'>Your Library </h4>
            <FontAwesomeIcon icon={faPlus} className='plusIcon'
            title="Create playlist or folder" />
        </div>
    );
};

export default Title;