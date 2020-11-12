import Layout from '../components/layout';
const Resume = () => {
    return(
        <Layout>
            <div>
                <h1>
                    My Resume
                </h1>
                <div>
                    <embed width="100%" height="900" src="/Nguyen, Aaron-Resume.pdf" type="application/pdf" />
                </div>
            </div>
        </Layout>
    );
}
export default Resume;