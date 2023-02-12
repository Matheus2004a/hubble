import { StyleCard } from "./style";

export function Card({ data: { id, title, body, image } }) {
    return (
        <StyleCard layout={id %  2 === 0 && "row-reverse"}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <figure>
                <img src={image} alt={title} />
            </figure>
        </StyleCard>
    )
}