import * as React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardImage, MDBRipple, MDBRow, MDBCol, MDBCardOverlay} from 'mdb-react-ui-kit';
import { getInvoices } from '../Data/Data';
import { useSearchParams } from 'react-router-dom';

export default function GridItem({ invoice }) {
    return (

        <>
            <img></img>
            <h4><b>{invoice.name}</b></h4>
            <p>Text goes here</p>
        </>
    );
}