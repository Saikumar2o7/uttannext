"use client";

import styled from "styled-components";

const steps = [
    {
        id: "01",
        title: "Book Site Survey",
        description:
            "Schedule a visit with our expert consultant to assess your site, answer your questions, and provide a tailored quotation.",
        image: "/assets/HomeSection2Img1.png", 
    },
    {
        id: "02",
        title: "Choose Material & Order",
        description:
            "Select the best solar components based on your needs. Our team will create a custom proposal and keep you updated throughout the process.",
        image: "/assets/HomeSection2Img4.png",
    },
    {
        id: "03",
        title: "Paperwork, Finance & Subsidy Assistance",
        description:
            "We handle all the paperwork, ensuring a smooth approval process with local authorities and helping you secure subsidies for maximum savings.",
        image: "/assets/HomeSection2Img3.png",
    },
    {
        id: "04",
        title: "Relax while we install",
        description:
            "After confirming your order, our skilled team will install your rooftop system efficiently, ensuring a clean and professional setup.",
        image: "/assets/HomeSection2Img2.png",
    },
];

const HomeSecondSection = () => {
    return (
        <Container>
            <SectionHeading>Your steps towards solar journey</SectionHeading>
            <BackgroundWrapper>
                <StepsContainer>
                    {steps.map((step) => (
                        <StepWrapper key={step.id}>
                            <StepCircle>
                                <StepImage src={step.image} alt={step.title} />
                                <StepNumber>{step.id}</StepNumber>
                            </StepCircle>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </StepWrapper>
                    ))}
                </StepsContainer>
            </BackgroundWrapper>
        </Container>
    );
};

export default HomeSecondSection;

// Styled Components
const Container = styled.div`
    background-color: ${(props) => props.theme.colors.primaryBackground};
    padding: 20px 120px;
    text-align: center;
`;

const BackgroundWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 140px 0px;

    &::before {
        content: "";
        position: absolute;
        top: -120px;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('/assets/HomeSection2Bg.png') no-repeat center; // Use public image path
        background-size: contain;
        z-index: 1;
    }
`;

const SectionHeading = styled.h2`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 70px;
    text-align: start;
`;

const StepWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    width: 25%;
    align-self: stretch;
`;

const StepTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
    min-height: 40px;
`;

const StepDescription = styled.p`
    font-size: 14px;
    color: #555;
    max-width: 250px;
    min-height: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const StepsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    position: relative;
    margin-top: 0px;
`;

const StepCircle = styled.div`
    position: relative;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    overflow: visible;
    z-index: 2;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    &::before {
        content: "";
        position: absolute;
        top: -12px;
        left: -12px;
        right: -12px;
        bottom: -12px;
        border: 2px dashed #d1cfcf;
        border-radius: 50%;
        pointer-events: none;
        z-index: 2;
    }
`;

const StepImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const StepNumber = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    background-color: #1aa9d3;
    color: white;
    z-index: 2;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transform: translate(20%, -0%);
`;
