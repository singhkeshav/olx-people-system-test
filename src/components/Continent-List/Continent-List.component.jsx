
import { ListGroup } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
const ContinentListComp = ({ code, name, history }) => {
    const ContinentsClick = (code) => {
        return history.push('/continent-details/' + code)
    }
    return <ListGroup.Item onClick={() => ContinentsClick(code)} className='text-justify text-center text-uppercase'>{name}<sup className='font-weight-light font-italic'>{code}</sup></ListGroup.Item>
}



export default withRouter(ContinentListComp);