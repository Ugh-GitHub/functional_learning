Objectives:
1. Implement card system (images, description, landing page, etc.)
2. Convert card system display into projects
3. Flesh out rest of portfolio site
4. Make pretty (bootstrap, material-ui, sweetalert, etc.)

Down the Road:
* Implement search that doesn't use the URL as the user is typing
* Implement search functionality that uses keyword tags and titles to search

Irrelevent Stretch:
* Implement a form to add new projects
* Implement functionality to 


Notes:
* BrowserRouter (main.jsx): Wraps everything within `ReactDOM.render()` block.
* Routes (main.jsx): wraps Route
* Route (main.jsx): individual Routes. Note that you can nest multiple `Route`s within each other. ex:
```
<Route path="invoices" element={<Invoices />}>
    <Route
    index
    element={
        <main style={{ padding: '1rem' }}>
        <p>Select an invoice</p>
        </main>
    }
    />
    <Route path=":invoiceId" element={<Invoice />} />
</Route>
```
* NavLink (invoices.jsx): [Difference from Link summarized here](https://stackoverflow.com/questions/47338077/react-router-v4-navlink-vs-link-benefits)
* Link (App.jsx):
* Outlet (App.jsx, invoices.jsx): A placeholder element. Allows for customized routing to subcomponents (i.e. invoices Outlet allows routing to all the individual invoice subcomponents)
* useSearchParams (invoices.jsx):
* useLocation (invoices.jsx): 
* useParams (invoice.jsx):
* useNavigate (invoice.jsx): 
