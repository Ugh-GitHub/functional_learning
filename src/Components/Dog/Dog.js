import React from 'react';
import '../App/App.css';
import { getInvoice } from '../server/data';
import { useParams } from 'react-router';

export default function Dog() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));

    return (
    

        <div className="Body">
            <h1>{invoice.name}</h1>
        </div>
        
  );
}
