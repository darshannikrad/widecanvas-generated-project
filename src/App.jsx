import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LiveResultsPage from './pages/LiveResultsPage';
import CandidateInfoPage from './pages/CandidateInfoPage';
import VotingPage from './pages/VotingPage';
import StatisticsPage from './pages/StatisticsPage';
import ComplaintPage from './pages/ComplaintPage';
import AdminLoginPage from './pages/AdminLoginPage';
import UserLoginPage from './pages/UserLoginPage';
import AdminPanel from './pages/AdminPanel';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    alert(`Language switched to ${e.target.options[e.target.selectedIndex].text}`);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 transition-colors duration-200 dark:bg-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">E-Voting Platform</h1>
              <nav>
                <ul className="flex space-x-4">
                  <li><Link to="/" className="hover:underline">Home</Link></li>
                  <li><Link to="/live-results" className="hover:underline">Live Results</Link></li>
                  <li><Link to="/candidate-info" className="hover:underline">Candidate Info</Link></li>
                  <li><Link to="/voting" className="hover:underline">Voting</Link></li>
                  <li><Link to="/statistics" className="hover:underline">Statistics</Link></li>
                  <li><Link to="/complaint" className="hover:underline">Complaint</Link></li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <select
                id="language"
                className="bg-white text-black px-3 py-1 rounded"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="bn">Bengali</option>
                <option value="mr">Marathi</option>
                <option value="te">తెలుగు</option>
                <option value="ta">Tamil</option>
                <option value="gu">Gujarati</option>
                <option value="ur">Urdu</option>
                <option value="kn">Kannada</option>
                <option value="or">Odia</option>
                <option value="ml">Malayalam</option>
              </select>
              <button id="themeToggle" className="p-2 rounded hover:bg-blue-700" onClick={toggleTheme}>
                <i className={`bi ${isDarkTheme ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
              </button>
              <button
                id="connectWallet"
                className={`bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 ${isConnected ? 'disabled:opacity-50 cursor-not-allowed' : ''}`}
                onClick={connectWallet}
                disabled={isConnected}
              >
                {isConnected ? 'Wallet Connected' : 'Connect Wallet'}
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/live-results" element={<LiveResultsPage />} />
            <Route path="/candidate-info" element={<CandidateInfoPage />} />
            <Route path="/voting" element={<VotingPage isUserAuthenticated={isUserAuthenticated} />} />
            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/complaint" element={<ComplaintPage />} />
            <Route path="/admin-login" element={<AdminLoginPage setIsAdminAuthenticated={setIsAdminAuthenticated} />} />
            <Route path="/user-login" element={<UserLoginPage setIsUserAuthenticated={setIsUserAuthenticated} />} />
            <Route path="/admin-panel" element={<AdminPanel isAdminAuthenticated={isAdminAuthenticated} />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 E-Voting Platform</p>
            <nav>
              <ul className="flex justify-center space-x-4">
                <li>
                  <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li>
                  <Link to="/live-results" className="hover:underline">Live Results</Link>
                </li>
                <li>
                  <Link to="/candidate-info" className="hover:underline">Candidate Info</Link>
                </li>
                <li>
                  <Link to="/voting" className="hover:underline">Voting</Link>
                </li>
                <li>
                  <Link to="/statistics" className="hover:underline">Statistics</Link>
                </li>
                <li>
                  <Link to="/complaint" className="hover:underline">Complaint</Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
