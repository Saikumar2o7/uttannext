"use client"

import styled, { useTheme } from "styled-components";
import Header from "../components/Header/Header";
import HomeFirstSection from "./Home/FirstSection";
import HomeSecondSection from "./Home/SecondSection";
import Footer from "../components/Header/Footer";
import HomeThirdSection from "./Home/ThirdSection";
import FAQSection from "./Home/FAQSection";
import { useRef } from "react";
import { useRouter } from "next/navigation";

interface StyledButtonProps {
    $backgroundColor: string;
    $borderColor: string;
    $textColor: string;
}


export default function HomePage() {
    const theme = useTheme();
    const router = useRouter();
    const thirdSectionRef = useRef<HTMLDivElement>(null);

    const scrollToThirdSection = () => {
        if (thirdSectionRef.current) {
            thirdSectionRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <>
            <Header />
            <MainContainer>
                <FirstSection>
                    <LeftSection>
                        <HeadingText>
                            Solar is <span>80%</span> cheaper! We make switching easy
                        </HeadingText>
                        <p>Earn unlimited cash rewards by introducing Jiraaf to your industry colleagues and friends.</p>
                        <ButtonsWrapper>
                            <StyledButton
                                $backgroundColor={theme.buttons.secondaryBackground}
                                $borderColor={theme.buttons.secondaryBackground}
                                $textColor={theme.colors.primaryBackground}
                                onClick={scrollToThirdSection}
                            >
                                Solar Calculator
                            </StyledButton>
                            <StyledButton
                                $backgroundColor={theme.buttons.primaryBackground}
                                $borderColor={theme.buttons.primaryBackground}
                                $textColor={theme.colors.primaryBackground}
                                onClick={() => router.push('/Quotation')} 
                            >
                                Book Site Survey
                            </StyledButton>
                        </ButtonsWrapper>
                    </LeftSection>
                    <RightSection>
                        <StyledHomeImage src={theme.images.homeImage} alt="Home" />
                    </RightSection>
                </FirstSection>
                <HomeFirstSection />
                <HomeSecondSection />
                <HomeThirdSection ref={thirdSectionRef} />
                <FAQSection />
                <Footer />
            </MainContainer>
        </>
    );
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${(props) => props.theme.fontFamily};
`;

const FirstSection = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 0px 50px;
    margin-top: 50px;
`;

const LeftSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 40px 40px;
    gap: 8px;
    p {
        font-size: 15px;
        color: #555;
        margin: 0;
    }
`;

const RightSection = styled.div`
    flex: 1;
    padding: 20px;
`;

const HeadingText = styled.h2`
    padding: 0;
    margin: 0;
    font-size: 46px;
    margin-top: 35px;
    span {
        color: ${(props) => props.theme.colors.instructionText};
    }
    font-weight: 600;
`;

const StyledHomeImage = styled.img`
    width: 95%;
    height: auto;
    object-fit: cover;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
`;

const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${(props) => props.$backgroundColor};
    border: 2px solid ${(props) => props.$borderColor};
    color: ${(props) => props.$textColor};
    border-radius: 50px;
    padding: 15px 40px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
`;

