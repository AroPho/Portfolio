import Link from 'next/link';
const Navbar = () => {
    return(
        <div>
            <ul>
                <div className="navbar-brand">
                    <li><Link href="/"><a>AroPho</a></Link></li>
                </div>
                <div className="navbar-end">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>Projects</a></Link></li>
                    <li><Link href="/Nguyen, Aaron-Resume.pdf"><a>Resume</a></Link></li>
                </div>
            </ul>
<style jsx>{`
                ul {
                    background: #333;
                    color: #fff;
                    list-style: none;
                    display: flex;
                }
ul li {
                    font-size: 30px;
                    margin-right: 20px;
                    margin-left:  20px;
                }
ul li a {
                    color: #fff;
                    text-decoration: none;
                }
            `}</style>
        </div>
    );
}
export default Navbar;