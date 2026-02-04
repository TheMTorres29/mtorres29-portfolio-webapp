import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

function App() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Route>
        </Routes>
    )
}

export default App