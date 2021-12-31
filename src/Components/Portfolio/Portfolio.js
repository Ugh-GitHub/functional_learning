import React, { useState } from 'react';
import {
  useSearchParams,
} from 'react-router-dom';
import GridLayout from '../GridLayout/GridLayout';
import './Portfolio.css';
import ButtonGrid from '../ButtonGrid/ButtonGrid';
import Modal from '../Modal/Modal';

export default function Invoices() {
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });
  const [modalOpen, setModalOpen] = useState(false);

  const [data, setData] = useState('');

  const childToParent = () => {
    // alert("this is an alert");
    setModalOpen(true);
  }

  return (
    <div >
        {/* <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Search by Project Title' aria-label='Search' value={searchParams.get('term') || ''}
        onChange={(event) => {
            let term = event.target.value;
            if (term) {
            setSearchParams({ term }, { replace: true });
            } else {
            setSearchParams({}, { replace: true });
            }
        }}/>  
        </form> */}
        {modalOpen && <Modal setOpenModal={setModalOpen}/>}       
        <ButtonGrid/>
        <GridLayout childToParent={childToParent}/>
    </div>
  );
}
