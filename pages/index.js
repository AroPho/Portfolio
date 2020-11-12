import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
const Index = ({musicData}) => {
    console.log(musicData)
    return (
        <Layout>
            <div>
                <h1 class="title">Welcome to Next Application</h1>
                <h3>Songs List</h3>
                {musicData.map((item, i) => {
                   return (
                   <li key={i}>{item.title}</li>
                   )
               })}
            </div>
        </Layout>
    );
}
Index.getInitialProps = async function() {
    const response = await fetch(`https://www.what-song.com/api/recent-movies`);
    const result = await response.json();
    return { musicData: result.data }
}
export default Index;