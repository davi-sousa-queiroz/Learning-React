export function Heading({ quotes, data }) {
    return (
        <section className="heading" >
            <div className="greeting" >
                <p className="greeting-eyebrow">{quotes[0]}</p>
                <h1>Good afternoon, {data.name}!</h1>
                <p className="greeting-description">{quotes[1]}</p>
            </div>
            <div className="date" >
                <p className="day">{data.date}</p>
                <p className="date-quote">{quotes[2]}</p>
            </div>
        </section>
    )
}