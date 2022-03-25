React-Router-Dom useful links:

* [Bookkeeper](https://stackblitz.com/edit/github-agqlf5?file=src%2Froutes%2Finvoice.jsx): Live example of RRD in action
   * Concepts illustrated:
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
      * useParams (invoice.jsx):
      * useNavigate (invoice.jsx): 
      * useSearchParams (invoices.jsx):
      * useLocation (invoices.jsx): 


* [GitHub Page](https://github.com/remix-run/react-router): self-explanatory

Other useful links:

* [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links)

This is a test