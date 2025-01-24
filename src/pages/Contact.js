import Navbar from "../components/Navbar";
import styled from "styled-components";

const Contact = () => {
    return (
        <Container>
            <Navbar/>
            <Background primarycolor={"#3F000F"}>
                <Content>
                    <Subtitle>Contact</Subtitle>
                    <ContactType>
                        Primary Email
                    </ContactType>
                    <Info href="mailto:joel.harawa@gmail.com">joel.harawa@gmail.com</Info>
                    <ContactType>
                        Secondary Email
                    </ContactType>
                    <Info href="mailto:jwh8918@nyu.edu">jwh8918@nyu.edu</Info>
                    <ContactType>
                        LinkedIn
                    </ContactType>
                    <Info href="https://linkedin.com/in/joelwharawa" target="_blank">Joel Harawa</Info>
                    <ContactType>
                        Phone Number
                    </ContactType>
                    <Info>(347) 720-0541</Info>
                </Content>
            </Background>
        </Container>
    )
}

const Subtitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: white;
    height: 10%;
`;

const ContactType = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: white;
`;

const Info = styled.a`
    font-size: 20px;
    color: white;
    opacity: 0.7;
    margin-top: 1.25%;
    margin-bottom: 2.5%;
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

export default Contact;