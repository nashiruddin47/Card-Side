/*  Home Pages */
import {  Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Nav from './components/header/nav';
import { Contact } from './pages';
const Home = ()  => {
    return (
        <div className='nt'>
            <Router >
               <Nav/>
                <Routes>
                    <Route path='/contact' element={<Contact/>}/>

                </Routes>
            </Router>

        </div>
    )
}

export default Home;