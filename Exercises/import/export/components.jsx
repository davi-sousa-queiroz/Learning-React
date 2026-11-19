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

function ProfileHeader({name, role}) {
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Role: {role}</p>
        </div>
    )
}

function StatCard({title, value}) {
    return (
        <div>
            <h2>{title}</h2>
             <p>{value}</p>
        </div>
    )
}

export function Dashboard({name, role}) {
    return (
        <div>
            <ProfileHeader name={name} role={role} />
            <StatCard title='Projects' value={5} />
            <StatCard title='Completed' value={3} />
        </div>
    )
}

export function Team ({members}) {
    return (
            members.map(member => {
            return (
                    <TeamMember key={member.name} name={member.name} role={member.role} />
            )
        })
    )
}

export function TeamMember({name, role}) {
    return (
        <>
        <h2>{name} - {role}</h2>
        </>
    )
}