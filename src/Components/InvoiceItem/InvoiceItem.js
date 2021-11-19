import * as React from 'react';
// import * as mdb from 'mdb-ui-kit';
import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../Data/Data';
import { MDBBtn } from 'mdb-react-ui-kit';


export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <MDBBtn
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('/invoices');
          }}
        >
          Delete
        </MDBBtn>
      </p>
    </main>
  );
}
