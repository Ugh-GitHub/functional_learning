import * as React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardImage, MDBRipple, MDBRow, MDBCol, MDBCardOverlay} from 'mdb-react-ui-kit';
import { getInvoices } from '../Data/Data';
import { useSearchParams } from 'react-router-dom';
import './GridLayout';

export default function Grid() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams({ replace: true });
  
    return (

        <div className="cards">
            {invoices
            .filter((invoice) => {
                let filter = searchParams.get('filter');
                if (!filter) return true;
                let name = invoice.name.toLowerCase();
                return name.startsWith(filter.toLowerCase());
            })
            .map((invoice, index) => (
                // <div class="cards">
                    <div class="card" key={index}>
                        <div class="container">
                            <h4><b>{invoice.name}</b></h4>
                        </div>
                    </div>
                // </div>
            ))}
        </div>

    );
}