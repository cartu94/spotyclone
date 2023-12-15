import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeGreetings from './components/HomeGreetings'
import HomeGreetingsRow from './components/HomeGreetingsRow'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='bg-background h-screen'> 
        <HomeGreetings />
        <Footer />
    </div>
  )
}
