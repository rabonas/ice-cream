import { Link } from 'react-router-dom';

export default function Header() {
    return (<header className="header">
        <div className="container">
            <div className="row">
                <div className="logo"><img src="img/images.png" alt="ice-cream" /></div>
                <nav className="header__nav">
                    <Link to="/" className="header__link">Home</Link>
                    <Link to="addIceCream" className="header__link">Add post</Link>
                </nav>
            </div>
        </div>
    </header>)
}