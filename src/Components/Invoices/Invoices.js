import * as React from 'react';

import {
//   useLocation,
//   NavLink,
  Outlet,
  useSearchParams,
} from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardImage, MDBRipple, MDBRow, MDBCol, MDBCardOverlay} from 'mdb-react-ui-kit';
import { getInvoices } from '../Data/Data';
import Grid from '../Grid/Grid';
import GridLayout from '../GridLayout/GridLayout';
import './Invoices.css';

// function QueryNavLink({ to, ...props }) {
//   let location = useLocation();
//   return <NavLink to={to + location.search} {...props} />;
// }

export default function Invoices() {
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  return (
    <div >
        <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' value={searchParams.get('filter') || ''}
        onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
            setSearchParams({ filter }, { replace: true });
            } else {
            setSearchParams({}, { replace: true });
            }
        }}/>  
        </form>
        <GridLayout/>
    </div>
  );
}
