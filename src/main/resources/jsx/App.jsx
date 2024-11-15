import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Index.jsx';
import AdminPanel from './AdminPanel.jsx';
import '../scss/main.scss'
import NewHotel from './NewHotel.jsx';
import HotelDetails from './HotelDetails.jsx';
import EditHotel from './EditHotel.jsx';
import Register from './Register.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/newHotel" element={<NewHotel />} />
        <Route path="/editHotel" element={<EditHotel />} />
        <Route path="/hotel" element={<HotelDetails />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  )
}

export default App;