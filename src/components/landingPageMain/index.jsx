import React from "react"
import Button from "../button"
import aliImg from "../../assets/images/avatar-ali.png"
import anishaImg from "../../assets/images/avatar-anisha.png"
import richardImg from "../../assets/images/avatar-richard.png"
import shanaiImg from "../../assets/images/avatar-shanai.png"
import introImg from "../../assets/images/illustration-intro.svg"
import {
    Content1, Content2,
    Graphics, PrimaryText, Title,
    Paragraph, ImgGraphic, Container, NumberText,
    ManageDifferentList, TextManageTopics,
    TitleManageTopics, CardsDiv, ButtonDiv, TitleDiv, Card, CardText,
    CardImg
} from "./styles"

const testimonialData = [
    { img: anishaImg, name: "Anisha Ali", text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”" },
    { img: aliImg, name: "Ali Bravo", text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”" },
    { img: richardImg, name: "Richard Watts", text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”" },
    { img: shanaiImg, name: "Shanai Gough", text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”" }
]

const featuresData = [
    {
        number: 1,
        title: "Track company-wide progress",
        text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
    },
    {
        number: 2,
        title: "Advanced built-in reports",
        text: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
    },
    {
        number: 3,
        title: "Everything you need in one place",
        text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
    }
]

const TestimonialCard = ({ img, name, text }) => (
    <Card>
        <CardImg src={img} alt={name} />
        <CardText>
            <h2 style={{ color: 'var(--secondary-color)', fontSize: '16px' }}>{name}</h2>
            <p>{text}</p>
        </CardText>
    </Card>
)

const Feature = ({ number, title, text, index }) => (
    <>
        <NumberText row={index * 2 + 1}>{number}</NumberText>
        <TitleManageTopics row={index * 2 + 1}>{title}</TitleManageTopics>
        <TextManageTopics row={index * 2 + 2}>{text}</TextManageTopics>
    </>
)

export default function LandingPageMain() {
    return (
        <Container>
            <Content1 padding="var(--padding-primary-page)" height='100vh'>
                <PrimaryText>
                    <Title fontSize='50px'>
                        Bring everyone together to build better products.
                    </Title>
                    <Paragraph>
                        Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                    </Paragraph>
                    <Button>Get started</Button>
                </PrimaryText>
                <Graphics>
                    <ImgGraphic src={introImg} alt="graficos" />
                </Graphics>
            </Content1>

            <Content1 padding="var(--padding-primary-page)">
                <div>
                    <Title fontSize='40px'>What’s different about Manage?</Title>
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
                    {testimonialData.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            img={testimonial.img}
                            name={testimonial.name}
                            text={testimonial.text}
                        />
                    ))}
                </CardsDiv>
                <ButtonDiv>
                    <Button>Get started</Button>
                </ButtonDiv>
            </Content2>
        </Container>
    )
}
