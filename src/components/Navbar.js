
import "./Navbarstyle.css";
function Navbar () {
    return (
        <>
        <nav>
            <a href="index.html">
                <img src="./images/logo.jpg" alt=""/>
            </a>
        
        <div>
            <ul id="navbar">
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Services</a></li>
                <li><a href="index.html">Contact Us</a></li>
                <li className="contact-link"><a href="index.html">Blog</a></li>
            </ul>
        </div>
        <div>
            <ul id="navbar2">
                <li className="contact-link"><a href="index.html">Contact Us</a></li>
            </ul>
        </div>
        </nav>
        </>
    )

}
export default Navbar;