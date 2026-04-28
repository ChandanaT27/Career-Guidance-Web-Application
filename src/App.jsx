import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CareerPaths from './pages/CareerPaths';
import SuccessStories from './pages/SuccessStories';
import About from './pages/About';
import CourseDetails from './pages/CourseDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="career-paths" element={<CareerPaths />} />
                    <Route path="success-stories" element={<SuccessStories />} />
                    <Route path="about" element={<About />} />
                    <Route path="course/:courseId" element={<CourseDetails />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
