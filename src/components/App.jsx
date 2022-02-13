import * as React from "react";
import Calculator from './Calculator.jsx';
import Gama from "./Gama.jsx";

import { render } from "react-dom";
import { Routes, Route, Link } from "react-router-dom";

export default function App ()
{
    return (
        <div className="App">
            <Routes>
                {/* <Route path='/' element={ <Calculator /> } /> */}
                <Route path='/' element={ <Gama /> } />
            </Routes>
        </div>
    );
}