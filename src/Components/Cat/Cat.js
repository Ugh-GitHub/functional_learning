import React from 'react';
import { useSearchParams, NavLink, Outlet } from 'react-router-dom';
// import logo from '../../logo.svg';
// import { Counter } from '../counter/Counter';
import '../App/App.css';
import { getInvoices } from '../server/data';

export default function Cat() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams({ replace: true });

    return (
        
        <div className="Body">
            <h1>Hello Cat</h1>
            <nav
                style={{
                borderRight: "solid 1px",
                padding: "1rem"
                }}
            >
                <input
                value={searchParams.get("filter") || ""}
                onChange={event => {
                    let filter = event.target.value;
                    if (filter) {
                    setSearchParams({ filter });
                    } else {
                    setSearchParams({});
                    }
                }}
                />
                {invoices
                .filter(invoice => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = invoice.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map(invoice => (
                    <NavLink
                    style={({ isActive }) => ({
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : ""
                    })}
                    to={`/invoice/${invoice.number}`}
                    key={invoice.number}
                    >
                    {invoice.name}
                    </NavLink>
                ))}
            </nav>
            <Outlet />
        </div>
        
    );
}
