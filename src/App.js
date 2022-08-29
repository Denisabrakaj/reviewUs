import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackStatus from "./components/FeedbackStatus"
import FeedbackList from "./components/FeedbackList"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AbouticonLink from './components/AbouticonLink'
import {FeedbackProvider} from './context/FeedbackContext'

function App () {
   
    return (
        <FeedbackProvider>
        <Router> 
            <Header/>
            <div className="container">
                <Routes>
                <Route exact path='/' element={
                    <>
                        <FeedbackForm/>
                        <FeedbackStatus />
                        <FeedbackList/>
                    </>
                }
                >
                </Route>
                <Route path='/about' element={<AboutPage/>}
                />
                </Routes>
             <AbouticonLink/>
            </div>
       </Router>
       </FeedbackProvider>
   
    )
}

export default App