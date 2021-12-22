import * as React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardImage, MDBRipple, MDBRow, MDBCol, MDBCardOverlay} from 'mdb-react-ui-kit';
import { getInvoices } from '../Data/Data';
import { useSearchParams } from 'react-router-dom';
import './Grid.css';
import GridItem from '../GridItem/GridItem';

export default function Grid() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams({ replace: true });
  
    return (

        <div>
            {invoices
            .filter((invoice) => {
                let filter = searchParams.get('filter');
                if (!filter) return true;
                let name = invoice.name.toLowerCase();
                return name.startsWith(filter.toLowerCase());
            })
            .map((invoice, index) => (
                <GridItem key={index} invoice={invoice} />
            ))}
        </div>

    );
}