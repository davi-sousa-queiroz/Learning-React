import { Profiler } from "react"

export default function App() {
  return (
    <>
      <Profile/>
    </>
  )
}

function Greeting() {
  return (
    <h1>Hello, React!</h1>
  )
}

function Welcome() {
  return (
    <p>Hello There!</p>
  )
}

function About() {
  return (
    <p>This is my first react exercise!</p>
  )
}

function Contact() {
  return (
    <p>Follow me on Instagram! @davz0_0</p>
  )
}

function UserCard() {
  return (
    <div>
      <p>name:Davi</p>
      <p>Age: 17</p>
      <p>Ocupation: Student</p>
    </div>
  )
}

function UserCardB() {
    return (
      <div>
        <p>name:Ivad</p>
        <p>Age: 71</p>
        <p>Ocupation: Retired</p>
      </div>
    )
}

function Profile() {
  return (
    <div>
      <Greeting/>
      <UserCard/>
      <Contact/>
    </div>
  )
}