import { UserCard, UserAge, GameCard, GameCardB } from "./components"

export default function App() {

  const games = [
  "GTA VI",
  "Minecraft",
  "Forza Horizon 6"
  ];

  const gamesB = [
  { name: "GTA VI", available: true },
  { name: "Minecraft", available: true },
  { name: "Forza Horizon 6", available: false }
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

      {gamesB.map(game => {
        return (
          <GameCardB key={game.name} name={game.name} avalible={game.available} />
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