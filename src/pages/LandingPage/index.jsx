import React from "react";
import Button from "../../components/button";
import aliImg from "../../assets/images/avatar-ali.png";
import anishaImg from "../../assets/images/avatar-anisha.png";
import richardImg from "../../assets/images/avatar-richard.png";
import shanaiImg from "../../assets/images/avatar-shanai.png";
import introImg from "../../assets/images/illustration-intro.svg";
import Header from "../../components/header";
import Footer from "../../components/footer";
import FeedbackCarousel from "../../components/feedbackCarousel";
import { ContentPage, Content1, Content2, Graphics, PrimaryText, Title, TitleDiv, Paragraph, ImgGraphic, Container, NumberText, ManageDifferentList, TextManageTopics, TitleManageTopics, CardsDiv, ButtonDiv, ButtonWrapper } from "./styles";

const feedbackData = [
    { img: aliImg, name: "Ali", text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”" },
    { img: anishaImg, name: "Anisha", text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”" },
    { img: richardImg, name: "Richard", text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”" },
    { img: shanaiImg, name: "Shanai", text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”" }
];

const featuresData = [
    {
        number: 1,
        title: "Track company-wide progress",
        text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
    },
    {
        number: 2,
        title: "Advanced built-in reports",
        text: "Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed."
    },
    {
        number: 3,
        title: "Everything you need in one place",
        text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
    }
];

const Feature = ({ number, title, text, index }) => (
    <>
        <NumberText row={index * 2 + 1}>{number}</NumberText>
        <TitleManageTopics row={index * 2 + 1}>{title}</TitleManageTopics>
        <TextManageTopics row={index * 2 + 2}>{text}</TextManageTopics>
    </>
);

export default function LandingPage() {
    return (
        <ContentPage>
            <Header />
            <Container>
                <Content1 height="100vh">
                    <PrimaryText>
                        <Title fontSize="60px">
                            Bring everyone together to build better products.
                        </Title>
                        <Paragraph>
                            Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                        </Paragraph>
                        <ButtonWrapper>
                            <Button>Get started</Button>
                        </ButtonWrapper>
                    </PrimaryText>

                    <Graphics>
                        <ImgGraphic src={introImg} alt="graphics" />
                    </Graphics>
                </Content1>

                <Content1 padding="var(--padding-primary-page)">
                    <div>
                        <Title fontSize="2.5rem">What’s different about Manage?</Title>
                        <Paragraph>
                            Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
                        </Paragraph>
                    </div>

                    <ManageDifferentList>
                        {featuresData.map((feature, index) => (
                            <Feature
                                key={index}
                                number={feature.number}
                                title={feature.title}
                                text={feature.text}
                                index={index}
                            />
                        ))}
                    </ManageDifferentList>
                </Content1>

                <Content2>
                    <TitleDiv>
                        <Title>What they’ve said</Title>
                    </TitleDiv>
                    <CardsDiv>
                        <FeedbackCarousel data={feedbackData} />
                    </CardsDiv>
                    <ButtonDiv>
                        <Button>Get started</Button>
                    </ButtonDiv>
                </Content2>
            </Container>
            <Footer />
        </ContentPage>
    );
}
