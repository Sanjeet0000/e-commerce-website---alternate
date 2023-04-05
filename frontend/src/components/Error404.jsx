import { Link } from "react-router-dom";

export default function NotFound() {
    return (
<div className="row flex-column justify-content-center align-items-center text-center" style={{height:"350px"}}>
    <h1>Oops! You seem to be lost.</h1>
    <p>You can start from scratch:</p>
    <Link to='/'><h3>Home</h3></Link>
</div>
)
}