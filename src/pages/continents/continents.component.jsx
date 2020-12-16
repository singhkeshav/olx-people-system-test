import './continents.style.css';
import { ListGroup, Card } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import { GET_CONTINENTS } from '../../Types';
import ContinentListComp from '../../components/Continent-List/Continent-List.component'
const ContinentsComp = ({ history }) => {
   const { data, loading, error } = useQuery(GET_CONTINENTS);
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error</p>;

   const ContinentsClick = (code) => {
      return history.push('/continent-details/' + code)
   }
   return <Card>
      <nav className="navbar navbar-dark nav-color ">
         Continent List
      </nav>

      <ListGroup variant="flush">
         {
            data['continents'].length > 0 ?
               data['continents'].map((row) => {
                  return (<ContinentListComp key={row.code} {...row} onClick={() => ContinentsClick(row.code)} />)
               })
               : null
         }
      </ListGroup>
   </Card>
};


export default withRouter(ContinentsComp);