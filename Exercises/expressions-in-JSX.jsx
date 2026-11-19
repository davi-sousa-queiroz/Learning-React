export default function App() {
  return (
    <div>
      <UserGreeting />
      <ProductCard />
      <UserStatus />
      <GameCard />
    </div>
  )
}

function UserGreeting() {
  const name = 'Davi'
  const age = 17

  return (
    <>
      <h1>Hello {name}!</h1>
      <p>You are {age} years old!</p>
    </>
  )
}

function ProductCard() {
  const productName = 'mechanical keyboard'
  const price = 150
  const quantity = 2

  return (
    <><h2>{productName}</h2>
    <p>Total: R${price * quantity}</p>
    </>
  )
}

function UserStatus() {
  const isOnline = true
  const username = "Davi"

  return (
    <>
      <h2>{username}</h2>
      <p>{isOnline ? 'Online' : 'Offline'}</p>
    </>
  )
}

function GameCard() {
  const gameName = 'Minecraft'
  const price = 99
  const discount = 20
  const isAvailable = true

  return (
    <> 
      <h2>{gameName}</h2>
      <p>Original Price: R${price}</p>
      <p>Discounted Price: R${price - (price * discount / 100)}</p>
      <p>{isAvailable ? 'Available' : 'Out of stock'}</p>
    </>
  )
}