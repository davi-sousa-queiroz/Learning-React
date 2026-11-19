export function Greeting() {
  return (
    <h1>Hello from another file!!</h1>
  )
}

export function UserCard({name}) {
    return (
        <h2>User: {name}</h2>
    )
}

export function UserAge({age}) {
    return (
        <p>Age: {age}</p>
    )
}

export function GameCard({name}) {
    return (
        <div>
            <h2>{name}</h2>
            
        </div>
    )
}

export function GameCardB({name, available}) {
    if (available) {
        return (
            <div>
                <h2>Name: {name}</h2>
                <p>available.</p>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Name: {name}</h2>
                <p>Coming soon!</p>
            </div>
        )
    }
}