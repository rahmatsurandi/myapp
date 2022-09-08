import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Dashboard from './Dashboard'
import Gambar from './Gambar'
import TableUrl from './TableUrl'
import Login from './Login'
import Skill from './Skill'
function RouterPages() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/login/gambar" element={<Gambar />} />
                    <Route path="/table" element={<TableUrl />} />
                    <Route path='/skill' element={<Skill />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default RouterPages