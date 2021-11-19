import * as React from 'react';

import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
} from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardImage, MDBRipple, MDBRow, MDBCol, } from 'mdb-react-ui-kit';
import { getInvoices } from '../Data/Data';

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  return (
    <div style={{ display: 'flex' }}>
        <MDBRow>
            <MDBCol sm='40'>
            <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
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
                {invoices
                .filter((invoice) => {
                    let filter = searchParams.get('filter');
                    if (!filter) return true;
                    let name = invoice.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map((invoice) => (
                    <MDBCard style={{ maxWidth: '12rem' }} href={`/invoices/${invoice.number}`}>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay' href={`/invoices/${invoice.number}`}>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>{invoice.name}</MDBCardTitle>
                                <MDBCardText>
                                    {invoice.number}
                                </MDBCardText>
                                <MDBBtn href={`/invoices/${invoice.number}`}>See Invoice</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                ))}
            </nav>
            </MDBCol>
        </MDBRow>
        <Outlet />
    </div>
  );
}
