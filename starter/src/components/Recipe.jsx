import { useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function Recipe(props) {
    
    const [likes, setLikes] = useState(0)

    return <Card style={{marginTop: "0.5rem", maxWidth: "20rem", margin: "auto"}}>
                      
        <h2>{props.name}</h2>
        <p>{props.author}</p>
        <p>{props.keywords.join(", ")}</p>
        <p>{likes} likes</p>
        <Button variant="secondary" onClick={() => {
            setLikes(likes => likes + 1)
            setLikes(likes => likes + 1)
        }}>Like</Button>
        
    </Card>
}