import * as React from 'react';
import {
  useSearchParams,
} from 'react-router-dom';
import GridLayout from '../GridLayout/GridLayout';
import './Portfolio.css';

export default function Invoices() {
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  return (
    <div >
        <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Search by Project Title' aria-label='Search' value={searchParams.get('filter') || ''}
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
