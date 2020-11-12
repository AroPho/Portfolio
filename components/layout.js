//components/layout.js
import Head from 'next/head';
import Navbar from './navbar';
const Layout = (props) => {
    return(
        <div>
            <Head>
                <title>AroPho</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css" />
            </Head>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}
export default Layout;