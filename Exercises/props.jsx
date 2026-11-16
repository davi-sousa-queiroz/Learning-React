export default function App() {

  const games = [
  'GTA VI',
  'Forza Horizon 6',
  'Minecraft'
  ]

  const hobbies = [
    'Chess',
    'Coding',
    'Basketball',
    'Guitar'
  ]

  return (
    <>
      <StudentCard name='Davi' age={17} />
      <StudentCard name='Alex' age={20} />

      <ProductCard name='Camera' price={1700} category='Electronics' />
      <ProductCard name='Laptop' price={9000} category='Electronics' />
      <ProductCard name='Mouse Pad' price={60} category='Accessories' />

      <GameCard name='GTA VI' price={520} availability={false} />
      <GameCard name='Forza Horizon 6' price={390} availability={true} />

      <GameList games={games}/>

      <UserProfile name='Davi' age={17} hobbies={hobbies} isOnline={true} />
      <UserProfile name='Ivad' age={71} hobbies={hobbies} isOnline={false} />
    </>
  )
}

function StudentCard ({name, age}) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  )
}

function ProductCard({name, price, category}) {
  return (
    <div>
      <p>Product: {name}</p>
      <p>Price: R${price}</p>
      <p>Category: {category}</p>
    </div>
  )
}

function GameCard({name, price, availability}) {
  return (
    <div>
      <p>Game: {name}</p>
      <p>Price: R${price}</p>
      <p>Availability:</p>
      {availability ? (
        <p>Available</p>
      ) : (
        <p>Out of stock!</p>
      )}
    </div>
  )
}

function GameList({games}) {
  const mapped = games.map(game => {
    return (
      <h1 key={game}>{game}</h1>
    )
  })

  return mapped
}

function UserProfile({name, age, hobbies, isOnline}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <ul>
        {hobbies.map(hobby => {
          return (
            <li key={hobby}>{hobby}</li>
          )
        })}
      </ul>
      <p>Status:</p>
      {isOnline ? (
        <p>Online</p>
      ) : (
        <p>Offline</p>
      )}
    </div>
  )
}