import Navbar from "../components/Navbar";
import styled from "styled-components";

const About = () => {
    return (
        <Container>
            <Navbar/>
            <Background primarycolor={"#3B0066"}>
                <Content>
                    <Text>
                        <Subtitle>About</Subtitle>
                        <Paragraph>
                            Hi, I'm Joel Harawa, an aspiring Software Engineer.

                            <br/><br/>
                            I earned My B.S. in Computer Science from 
                            New York University. During my time at NYU,
                            I developed a passion for full-stack
                            development.
                            <br/><br/> 

                            I love building web applications, using my
                            skills, in JavaScript, React, and other 
                            technologies. I'm excited about opportunities
                            where I can apply my skills to solve real-world
                            problems.
                            <br/><br/>

                            Feel free to explore my skills and projects for
                            more details on what I’ve worked on.
                        </Paragraph>
                    </Text>
                    <Frame>
                        <Portrait src={require("../images/638492935905708473.jpg")}/>
                    </Frame>
                </Content>
            </Background>
        </Container>
    )
}

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 100%;
    background: linear-gradient(${props => props.primarycolor}, 80%, #FFFFFF 100%);
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Text = styled.div`
    margin-top: 2.5%;
    display: flex;
    flex-direction: column;
    width: 40%;
    @media (max-width: 768px) {
        width: 90%;
    }

`;

const Subtitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: white;
`;

const Paragraph = styled.p`
    margin-top: 2.5%;
    font-size: 24px;
    color: white;
    opacity: 0.75;
`;

const Portrait = styled.img`
    object-fit: cover;
    height: 100%;
    border-radius: 24px;
`;

const Frame = styled.div` 
    margin-top: 2.5%;
    width: 45%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media (max-width: 768px) {
        display: none;
    }
`;

export default About;