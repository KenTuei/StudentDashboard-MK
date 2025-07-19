import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import UploadProject from './pages/UploadProject';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 text-gray-900">
      <main className="flex-grow p-0"> {/* No padding here since dashboard controls it */}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Dashboard layout route */}
          <Route path="/dashboard" element={<StudentDashboard />}>
            <Route path="projects" element={<Projects />} />
            <Route path="profile" element={<Profile />} />
            <Route path="upload" element={<UploadProject />} />
            {/* Default route inside dashboard */}
            <Route index element={
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Welcome, Student 👋</h1>
                <p>This is your dashboard content area.</p>
              </div>
            } />
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
