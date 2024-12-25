import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuotePage from './pages/quotePage';

import Layout from "./pages/Layout";
function App() {


  return (

    <div>

      <BrowserRouter>
        <Routes>

          <Route index element={<Layout />} />
          <Route path='QuotePage' element={<QuotePage />} />



        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App;
