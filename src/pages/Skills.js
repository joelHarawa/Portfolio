import Navbar from "../components/Navbar";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
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
            <Background primarycolor={"#003366"}>
                <Content>
                    <Subtitle>Skills</Subtitle>
                    <MobileSkills>
                        <MobileQuadruplet>
                            <MobileSkillContainer>
                                <MoblieSkill>
                                    <i class="fa-brands fa-python"
                                        style={{ color: '#FFFFFF', fontSize: '50px', opacity: 0.8 }}
                                    ></i>
                                </MoblieSkill>
                                <MobileSkillTitle>Python</MobileSkillTitle>
                            </MobileSkillContainer>
                            <MobileSkillContainer>
                                <MoblieSkill>
                                    <i
                                        style={{ color: '#FFFFFF', fontSize: '30px', opacity: 0.8 }}
                                    >C++</i>
                                </MoblieSkill>
                                <MobileSkillTitle>C++</MobileSkillTitle>
                            </MobileSkillContainer>
                            <MobileSkillContainer>
                                <MoblieSkill>
                                    <i class="fa-brands fa-js"
                                        style={{ color: '#FFFFFF', fontSize: '50px', opacity: 0.8 }}
                                    ></i>
                                </MoblieSkill>
                                <MobileSkillTitle>JavaScript</MobileSkillTitle>
                            </MobileSkillContainer>
                            <MobileSkillContainer>
                            <MoblieSkill>
                                <i
                                   style={{ color: '#FFFFFF', fontSize: '30px', opacity: 0.8 }}
                                >C</i>
                            </MoblieSkill>
                            <MobileSkillTitle>C</MobileSkillTitle>
                            </MobileSkillContainer>
                        </MobileQuadruplet>
                        <MobileQuadruplet>
                            <MobileSkillContainer>
                            <MoblieSkill>
                                <i class="fa-brands fa-react"
                                   style={{ color: '#FFFFFF', fontSize: '50px', opacity: 0.8 }}
                                ></i>
                            </MoblieSkill>
                            <MobileSkillTitle>React</MobileSkillTitle>
                            </MobileSkillContainer>
                            <MobileSkillContainer>
                            <MoblieSkill>
                                <i class="fa-brands fa-react"
                                   style={{ color: '#FFFFFF', fontSize: '50px', opacity: 0.8 }}
                                ></i>
                            </MoblieSkill>
                            <MobileSkillTitle>React Native</MobileSkillTitle>
                            </MobileSkillContainer>
                            <MobileSkillContainer>
                            <MoblieSkill>
                                <i class="fa-brands fa-node"
                                   style={{ color: '#FFFFFF', fontSize: '50px', opacity: 0.8 }}
                                ></i>
                            </MoblieSkill>
                            <MobileSkillTitle>Node.js</MobileSkillTitle>
                            </MobileSkillContainer>
                            <MobileSkillContainer>
                            <MoblieSkill>
                                <i class="fa-solid fa-database"
                                   style={{ color: '#FFFFFF', fontSize: '50px', opacity: 0.8}}
                                ></i>
                            </MoblieSkill>
                            <MobileSkillTitle>MongoDB</MobileSkillTitle>
                            </MobileSkillContainer>
                        </MobileQuadruplet>
                        <MobileQuadruplet>
                            <MobileSkillContainer>
                            <MoblieSkill>
                                <i class="fa-brands fa-git-alt"
                                   style={{ color: '#FFFFFF', fontSize: '50px', opacity: 0.8}}
                                ></i>
                            </MoblieSkill>
                            <MobileSkillTitle>Git</MobileSkillTitle>
                            </MobileSkillContainer>
                            <MobileSkillContainer>
                            <MoblieSkill>
                                <i class="fa-brands fa-aws"
                                   style={{ color: '#FFFFFF', fontSize: '50px', opacity: 0.8,  marginTop: "10px" }}
                                ></i>
                            </MoblieSkill>
                            <MobileSkillTitle>AWS EC2</MobileSkillTitle>
                            </MobileSkillContainer>
                            <MobileSkillContainer>
                            <MoblieSkill>
                                <i class="fa-brands fa-aws"
                                   style={{ color: '#FFFFFF', fontSize: '50px', opacity: 0.8, marginTop: "10px" }}
                                ></i>
                            </MoblieSkill>
                            <MobileSkillTitle>AWS S3</MobileSkillTitle>
                            </MobileSkillContainer>
                            <MobileSkillContainer>
                            <MoblieSkill>
                                <i class="fa-solid fa-database"
                                   style={{ color: '#FFFFFF', fontSize: '50px', opacity: 0.8}}
                                ></i>
                            </MoblieSkill>
                            <MobileSkillTitle>SQL</MobileSkillTitle>
                            </MobileSkillContainer>
                        </MobileQuadruplet>
                    </MobileSkills>
                    <SliderContainer>
                    <SkillSlider {...settings}>
                    <Slide>
                        <Quadruplet>
                            <Skill>
                                <SkillTitle>Python</SkillTitle>
                                <i class="fa-brands fa-python"
                                   style={{ color: '#FFFFFF', fontSize: '124px', opacity: 0.8 }}
                                ></i>
                            </Skill>
                            <Skill>
                                <SkillTitle>C++</SkillTitle>
                                <i
                                   style={{ color: '#FFFFFF', fontSize: '124px', opacity: 0.8 }}
                                >C++</i>
                            </Skill>
                            <Skill>
                                <SkillTitle>JavaScript</SkillTitle>
                                <i class="fa-brands fa-js"
                                   style={{ color: '#FFFFFF', fontSize: '124px', opacity: 0.8 }}
                                ></i>
                            </Skill>
                            <Skill>
                                <SkillTitle>C</SkillTitle>
                                <i
                                   style={{ color: '#FFFFFF', fontSize: '124px', opacity: 0.8 }}
                                >C</i>
                            </Skill>
                        </Quadruplet>
                        <Quadruplet>
                            <Skill>
                                <SkillTitle>React.js</SkillTitle>
                                <i class="fa-brands fa-react"
                                   style={{ color: '#FFFFFF', fontSize: '124px', opacity: 0.8 }}
                                ></i>
                            </Skill>
                            <Skill>
                                <SkillTitle>React Native</SkillTitle>
                                <i class="fa-brands fa-react"
                                   style={{ color: '#FFFFFF', fontSize: '124px', opacity: 0.8 }}
                                ></i>
                            </Skill>
                            <Skill>
                                <SkillTitle>Node.js</SkillTitle>
                                <i class="fa-brands fa-node"
                                   style={{ color: '#FFFFFF', fontSize: '124px', opacity: 0.8 }}
                                ></i>
                            </Skill>
                            <Skill>
                                <SkillTitle>MongoDB </SkillTitle>
                                <i class="fa-solid fa-database"
                                   style={{ color: '#FFFFFF', fontSize: '124px', opacity: 0.8, marginTop: "10px" }}
                                ></i>
                            </Skill>
                        </Quadruplet>
                    </Slide>
                    <Slide>
                        <Quadruplet>
                            <Skill>
                                <SkillTitle>Git</SkillTitle>
                                <i class="fa-brands fa-git-alt"
                                   style={{ color: '#FFFFFF', fontSize: '124px', opacity: 0.8}}
                                ></i>
                            </Skill>
                            <Skill>
                                <SkillTitle>AWS EC2</SkillTitle>
                                <i class="fa-brands fa-aws"
                                   style={{ color: '#FFFFFF', fontSize: '124px', opacity: 0.8 }}
                                ></i>
                            </Skill>
                            <Skill>
                                <SkillTitle>AWS S3</SkillTitle>
                                <i class="fa-brands fa-aws"
                                   style={{ color: '#FFFFFF', fontSize: '124px', opacity: 0.8, marginTop: "10px" }}
                                ></i>
                            </Skill>
                            <Skill>
                                <SkillTitle>SQL</SkillTitle>
                                <i class="fa-solid fa-database"
                                   style={{ color: '#FFFFFF', fontSize: '124px', opacity: 0.8, marginTop: "10px" }}
                                ></i>
                            </Skill>
                        </Quadruplet>
                    </Slide>
                    </SkillSlider>
                </SliderContainer>
                </Content>
            </Background>
        </Container>
    )
}

const Subtitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: white;
`;

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

const SkillSlider = styled(Slider)`
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

const Quadruplet = styled.div`
    margin-left: 2.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 45%; /* Adjust height to fit two rows per slide */
    margin-bottom: 20px; /* Add spacing between rows */
`;

const Skill = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 22%;
    height: 80%; /* Ensure consistent size */
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1); /* Optional: subtle background */
`;

const SkillTitle = styled.div`
    font-size: 32px; /* Adjust font size if needed */
    font-weight: 700;
    color: white;
    opacity: 0.7;
`;

const MobileSkills = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
    margin-top: 25px;
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const MobileQuadruplet = styled.div`
    display: flex; 
    justify-content: space-between;
    height: 130px;
`;
const MoblieSkill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70px;
    height: 70px; /* Ensure consistent size */
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1); /* Optional: subtle background */
`;

const MobileSkillContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 70px;
    height: 150px;
`;

const MobileSkillTitle = styled.p`
    font-size: 12px;
    text-align: center;
    width: 70px;
    color: white;
    margin-top: 10px;
`;

const TitleQuadruplet = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    color: white;
`;

export default Skills;