import Navbar from "../components/Navbar";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Container>
            <Navbar/>
            <Background primarycolor={"#004B3F"}>
                <Content>
                    <Subtitle>Projects</Subtitle>
                    <MobileSliderContainer>
                        <MobileProjectSlider {...settings}>
                            <Slide>
                                <Project>
                                        <ProjectTitle>
                                            CULTR Magazine
                                        </ProjectTitle>
                                        <Blurb>
                                        A dynamic magazine web application built for MSU's CULTR Magazine Club. Developed with a React.js, Node.js, MongoDB, and hosted on an Amazon EC2 Linux instance, with Amazon S3 for media storage.
                                        </Blurb>
                                        <Technologies>
                                        <i class="fa-brands fa-react"
                                        style={{ color: '#FFFFFF', fontSize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-node"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-solid fa-database"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65}}
                                        ></i>
                                        <i class="fa-brands fa-aws"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        </Technologies>
                                        <RepoLink to="https://github.com/joelHarawa/cultrmsu"
                                                  target="_blank">Repo <i class="fa-brands fa-github"
                                        style={{ color: '#FFFFFF', fontSize: '20px'}}
                                        ></i></RepoLink>
                                </Project>
                            </Slide>
                            <Slide>
                                <Project>
                                        <ProjectTitle>
                                            Moosic
                                        </ProjectTitle>
                                        <Blurb>
                                        A Spotify client that generates a playlist based on the user's Mood. Developed with a React.js front end, using Spotify's API and my own Node.js/Express.js backend, and hosted on an Amazon EC2 Linux instance.
                                        </Blurb>
                                        <Technologies>
                                        <i class="fa-brands fa-react"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-node"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-aws"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        </Technologies>
                                        <RepoLink to="https://github.com/joelHarawa/Moosic2"
                                                  target="_blank">Repo <i class="fa-brands fa-github"
                                        style={{ color: '#FFFFFF', fontSize: '20px'}}
                                        ></i></RepoLink>
                                </Project>
                            </Slide>
                            <Slide>
                                <Project>
                                <ProjectTitle>
                                            Tactico
                                        </ProjectTitle>
                                        <Blurb>
                                        A mobile application made to inform Soccer fans about their favorite players and teams. Developed with React Native and a Node.js/Express.js backend, and hosted on an Amazon EC2 Linux instance.
                                        </Blurb>
                                        <Technologies>
                                        <i class="fa-brands fa-react"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-node"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-aws"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        </Technologies>
                                        <RepoLink to="https://github.com/joelHarawa/tactico"
                                                  target="_blank">Repo <i class="fa-brands fa-github"
                                        style={{ color: '#FFFFFF', fontSize: '20px'}}
                                        ></i></RepoLink>
                                </Project>
                            </Slide>
                            <Slide>
                                <Project>
                                <ProjectTitle>
                                            N-Puzzle A* Search
                                        </ProjectTitle>
                                        <Blurb>
                                        A class project for Introduction to Artifcial Intelligence at NYU Tandon. An A* Search algorithm made to solve a 3 dimensional N-puzzle. Made with C++.
                                        </Blurb>
                                        <i
                                        style={{ color: '#FFFFFF', fontsize: '32px', opacity: 0.65, height: '10%'}}
                                        >C++</i>
                                        <RepoLink to="https://github.com/joelHarawa/27-Puzzle-A-Search"
                                                  target="_blank">Repo <i class="fa-brands fa-github"
                                        style={{ color: '#FFFFFF', fontSize: '20px'}}
                                        ></i></RepoLink>
                                </Project>
                            </Slide>
                            <Slide>
                                <Project>
                                <ProjectTitle>
                                            JobTracker
                                        </ProjectTitle>
                                        <Blurb>
                                        A mobile application made to help job seekers track the progress of their job applications. Developed with React Native and a Node.js/Express.js backend, and hosted on an Amazon EC2 Linux instance.
                                        </Blurb>
                                        <Technologies>
                                        <i class="fa-brands fa-react"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-node"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-aws"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        </Technologies>
                                        <RepoLink to="https://github.com/joelHarawa/jobTracker"
                                                  target="_blank">Repo <i class="fa-brands fa-github"
                                        style={{ color: '#FFFFFF', fontSize: '20px'}}
                                        ></i></RepoLink>
                                </Project>
                            </Slide>
                            <Slide>
                                <Project>
                                <ProjectTitle>
                                            AverageJoel
                                        </ProjectTitle>
                                        <Blurb>
                                        A blog web application made to express my thoughts about what projects I'm currently working on. Developed with React Native, a MongoDB database and a Node.js/Express.js backend, and hosted on an Amazon EC2 Linux instance.
                                        </Blurb>
                                        <Technologies>
                                        <i class="fa-brands fa-react"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-node"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-aws"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-solid fa-database"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65}}
                                        ></i>
                                        </Technologies>
                                        <RepoLink to="https://github.com/joelHarawa/AverageJoel"
                                                  target="_blank">Repo <i class="fa-brands fa-github"
                                        style={{ color: '#FFFFFF', fontSize: '20px'}}
                                        ></i></RepoLink>
                                </Project>
                            </Slide>
                        </MobileProjectSlider>
                    </MobileSliderContainer>
                    <SliderContainer>
                        <ProjectSlider {...settings}>
                            <Slide>
                                <Triplet>
                                    <Project>
                                        <ProjectTitle>
                                            CULTR Magazine
                                        </ProjectTitle>
                                        <Blurb>
                                        A dynamic magazine web application built for Michigan State University's CULTR Magazine Club. Developed with a React.js front end, Node.js/Express.js backend, MongoDB database, and hosted on an Amazon EC2 Linux instance, utilizing Amazon S3 for media storage.
                                        </Blurb>
                                        <Technologies>
                                        <i class="fa-brands fa-react"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-node"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-solid fa-database"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65}}
                                        ></i>
                                        <i class="fa-brands fa-aws"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        </Technologies>
                                        <RepoLink to="https://github.com/joelHarawa/cultrmsu"
                                                  target="_blank">Repo <i class="fa-brands fa-github"
                                        style={{ color: '#FFFFFF', fontSize: '20px'}}
                                        ></i></RepoLink>
                                    </Project>
                                    <Project>
                                        <ProjectTitle>
                                            Moosic
                                        </ProjectTitle>
                                        <Blurb>
                                        A Spotify client that generates a playlist based on the user's Mood. Developed with a React.js front end, using Spotify's API and my own Node.js/Express.js backend, and hosted on an Amazon EC2 Linux instance.
                                        </Blurb>
                                        <Technologies>
                                        <i class="fa-brands fa-react"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-node"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-aws"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        </Technologies>
                                        <RepoLink to="https://github.com/joelHarawa/Moosic2"
                                                  target="_blank">Repo <i class="fa-brands fa-github"
                                        style={{ color: '#FFFFFF', fontSize: '20px'}}
                                        ></i></RepoLink>
                                    </Project>
                                    <Project>
                                        <ProjectTitle>
                                            Tactico
                                        </ProjectTitle>
                                        <Blurb>
                                        A mobile application made to inform Soccer fans about their favorite players and teams. Developed with React Native and a Node.js/Express.js backend, and hosted on an Amazon EC2 Linux instance.
                                        </Blurb>
                                        <Technologies>
                                        <i class="fa-brands fa-react"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-node"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-aws"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        </Technologies>
                                        <RepoLink to="https://github.com/joelHarawa/tactico"
                                                  target="_blank">Repo <i class="fa-brands fa-github"
                                        style={{ color: '#FFFFFF', fontSize: '20px'}}
                                        ></i></RepoLink>
                                    </Project>
                                </Triplet>
                            </Slide>
                            <Slide>
                                <Triplet>
                                    <Project>
                                        <ProjectTitle>
                                            N-Puzzle A* Search
                                        </ProjectTitle>
                                        <Blurb>
                                        A class project for Introduction to Artifcial Intelligence at NYU Tandon. An A* Search algorithm made to solve a 3 dimensional N-puzzle. Made with C++.
                                        </Blurb>
                                        <i
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65, height: '10%'}}
                                        >C++</i>
                                        <RepoLink to="https://github.com/joelHarawa/27-Puzzle-A-Search"
                                                  target="_blank">Repo <i class="fa-brands fa-github"
                                        style={{ color: '#FFFFFF', fontSize: '20px'}}
                                        ></i></RepoLink>
                                    </Project>
                                    <Project>
                                        <ProjectTitle>
                                            JobTracker
                                        </ProjectTitle>
                                        <Blurb>
                                        A mobile application made to help job seekers track the progress of their job applications. Developed with React Native and a Node.js/Express.js backend, and hosted on an Amazon EC2 Linux instance.
                                        </Blurb>
                                        <Technologies>
                                        <i class="fa-brands fa-react"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-node"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-aws"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        </Technologies>
                                        <RepoLink to="https://github.com/joelHarawa/jobTracker"
                                                  target="_blank">Repo <i class="fa-brands fa-github"
                                        style={{ color: '#FFFFFF', fontSize: '20px'}}
                                        ></i></RepoLink>
                                    </Project>
                                    <Project>
                                        <ProjectTitle>
                                            JH BLog
                                        </ProjectTitle>
                                        <Blurb>
                                        A blog web application made to express my thoughts about what projects I'm currently working on. Developed with React Native, a MongoDB database and a Node.js/Express.js backend, and hosted on an Amazon EC2 Linux instance.
                                        </Blurb>
                                        <Technologies>
                                        <i class="fa-brands fa-react"
                                        style={{ color: '#FFFFFF', fontsize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-node"
                                        style={{ color: '#FFFFFF', fontSize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-brands fa-aws"
                                        style={{ color: '#FFFFFF', fontSize: '28px', opacity: 0.65 }}
                                        ></i>
                                        <i class="fa-solid fa-database"
                                        style={{ color: '#FFFFFF', fontSize: '28px', opacity: 0.65}}
                                        ></i>
                                        </Technologies>
                                        <RepoLink to="https://github.com/joelHarawa/AverageJoel"
                                                  target="_blank">Repo <i class="fa-brands fa-github"
                                        style={{ color: '#FFFFFF', fontSize: '20px'}}
                                        ></i></RepoLink>
                                    </Project>
                                </Triplet>
                            </Slide>
                        </ProjectSlider>
                    </SliderContainer>
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

const Subtitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: white;
    height: 10%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
`;

const SliderContainer = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
`;

const ProjectSlider = styled(Slider)`
    height: 100%;
    width: 100%;
    .slick-list {
        height: 100%; /* Ensure slider content fits */
    }
`;

const Slide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh; /* Match slider container height */
`;

const Triplet = styled.div`
    margin-left: 2.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 90%; /* Adjust height to fit two rows per slide */
    margin-bottom: 20px; /* Add spacing between rows */
`;

const Project = styled.div`
    @media (max-width: 768px) {
        width: 95%;
        margin-left: 2.5%;
    }
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 30%;
    height: 95%; /* Ensure consistent size */
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1); /* Optional: subtle background */
`;

const Blurb = styled.a`
    color: white;
    opacity: 0.65;
    font-size: 21px;
    width: 90%;
    height: 60%;
    text-align: center;
`;

const ProjectTitle = styled.div`
    font-size: 32px; /* Adjust font size if needed */
    font-weight: 700;
    color: white;
    opacity: 0.75;
    height: 10%;
    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

const Technologies = styled.div`
    display: flex;
    height: 10%;
    font-size: 28px;
    width: 70%;
    justify-content: space-between;
`;

const RepoLink = styled(Link)`
    font-size: 20px;
    border-radius: 24px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.9);
    background: rgba(255, 255, 255, 0.2); /* Optional: subtle background */
    padding: 10px;
    text-decoration: none;
    &:hover {
        background: rgba(255, 255, 255, 0.4); /* Optional: subtle background */
        cursor: pointer;
    }
`;

const MobileSliderContainer = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MobileProjectSlider = styled(Slider)`
    height: 100%;
    width: 95%;
    .slick-list {
        height: 100%; /* Ensure slider content fits */
    }
`;

const MobileSlide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh; /* Match slider container height */
`;


export default Projects;