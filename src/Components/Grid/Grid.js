import * as React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardImage, MDBRipple, MDBRow, MDBCol, MDBCardOverlay} from 'mdb-react-ui-kit';
import { getInvoices } from '../Data/Data';
import { useSearchParams } from 'react-router-dom';
import './Grid.scss';

export default function Grid() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams({ replace: true });
  
    return (

        <MDBRow style={{ padding: '2rem'}} >
            {invoices
            .filter((invoice) => {
                let filter = searchParams.get('filter');
                if (!filter) return true;
                let name = invoice.name.toLowerCase();
                return name.startsWith(filter.toLowerCase());
            })
            .map((invoice, index) => (
                <MDBCol key={index}>
                    <MDBCard style={{ maxWidth: '12rem', margin: '1.5rem' }} background='dark' className='text-white'>
                        <MDBCardImage overlay src='https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg' fluid alt='...' />
                        <MDBCardOverlay>
                            <a href={`/invoices/${invoice.number}`}>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                            <MDBCardBody alignment='center'>
                                <MDBCardTitle>{invoice.name}</MDBCardTitle>
                                    <MDBCardText>
                                        {invoice.number}
                                    </MDBCardText>
                                    {/* <MDBBtn href={`/invoices/${invoice.number}`}>See Invoice</MDBBtn> */}
                            </MDBCardBody>
                        </MDBCardOverlay>
                    </MDBCard>
                </MDBCol>
            ))}
        </MDBRow>

    );
}