
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './Login.js';
import HomeScreen from './home.js';
import ServiceScreen from './Services.js';
import UserDashboard from './UserDashboard.js';
import CreateAccountScreen from './CreateAccountScreen';
import ProfilePage from './ProfilePage';
import MedicationScreen from './MedsPage.js';
import AppointmentsScreen from './AppointmentsScreen.js';
import LandingPage from './landingPage.js';

const App = () => {
  return (   
    <Router>
      <Routes>
      <Route path="/" exact element={<HomeScreen/>} />
        <Route path="/login" exact element={<LoginScreen/>} />
        <Route path="/services" exact element={<ServiceScreen/>} />
        <Route path="/dashboard" element={<UserDashboard/>} />
        <Route path="/create-account" element={<CreateAccountScreen />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/medications" element={<MedicationScreen />} />
        <Route path="/appointments" element={<AppointmentsScreen />} />
      </Routes>
    </Router>
  )
}
export default App;