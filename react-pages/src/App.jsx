import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SocialMediaFeed from './pages/SocialMediaFeed';
import WeatherApp from './pages/WeatherApp';
import KanbanBoard from './pages/KanbanBoard';

export default function App() {
    return (
        <Router>
            <div style={{ padding: '20px', backgroundColor: '#333', color: '#fff', display: 'flex', gap: '20px' }}>
                <Link to="/" style={{ color: '#61dafb', textDecoration: 'none' }}>Social Feed</Link>
                <Link to="/weather" style={{ color: '#61dafb', textDecoration: 'none' }}>Weather App</Link>
                <Link to="/kanban" style={{ color: '#61dafb', textDecoration: 'none' }}>Kanban Board</Link>
            </div>
            <Routes>
                <Route path="/" element={<SocialMediaFeed />} />
                <Route path="/weather" element={<WeatherApp />} />
                <Route path="/kanban" element={<KanbanBoard />} />
            </Routes>
        </Router>
    );
}
