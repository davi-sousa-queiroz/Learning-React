import { UserCard, UserAge, GameCard } from "./components"

export default function App() {

  const games = [
  "GTA VI",
  "Minecraft",
  "Forza Horizon 6"
  ];

  return (
    <div>
      <StudentCard name='Davi' age={17} />
      <StudentCard name='Alex' age={18} />

      <UserCard name='Davi' />
      <UserAge age={17} />

      {games.map(game => {
        return (
          <GameCard key={game} name={game} />
        )
      })}
    </div>
  )
  
}

function StudentCard ({name, age}) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  )
}