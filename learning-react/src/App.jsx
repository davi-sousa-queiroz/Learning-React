import './App.css'
import { Heading } from './components/heading.jsx'
import { Navbar } from './components/navbar.jsx'

const data = {
  name: "Davi",
  date: "Tuesday, November 24th",
}

const quotes = [
  'A LITTLE PROGRESS, EVERYDAY',
  'A space for your ideas, your goals, and the things you enjoy.',
  'Slow steps, Good things',
  'Ideas turning into little things',
  'Small steps, big possiblities.',
  'Little sparks for your next big thing.'
]

export default function App() {
  return (
    <>
      <Navbar />
      <Heading quotes={quotes} data={data} />
    </>
  )
}