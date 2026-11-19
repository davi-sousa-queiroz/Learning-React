export default function App() {
  return (
    <div>
      <UserStatus />
      <AdminPanel />
      <Notification />
      <MemberShip />
    </div>
  )
}

function UserStatus() {
  const isLoggedIn = true

  return (
    <p>{isLoggedIn ? 'Welcome back!' : 'Please Log in.'}</p>
  )
}

function AdminPanel() {
  const isAdmin = false 

  return (
    isAdmin ? <h2>Admin Dashboard</h2> : <p>Access denied.</p>
  )
}

function Notification() {
  const hasNotifications = true

  return (
    hasNotifications && <h3>You have new notifications!</h3>
  )
}

function MemberShip() {
  const isPremium = false
  const hasAccess = true

  return (
    <>
    {hasAccess && <p>Welcome to the members area!</p>}
    {isPremium ? <h2>Premium Member</h2> : <p>Upgrade to Premium.</p>}
    </>
  )
}