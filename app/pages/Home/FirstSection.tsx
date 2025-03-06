"use client"; 

import styled from "styled-components";

const HomeFirstSection = () => {
    return (
        <Container>
            <SectionHeading>Why Choose Solar</SectionHeading>
            <ItemsContainer>
                <Item>
                    <StyledIcon src="/assets/Icons/HomeSection1Icon1.png" alt="Reduce Energy Bills" />
                    <TextContainer>
                        <HeadingText>Reduce/Eliminate Energy Bills</HeadingText>
                        <p>Save money by reducing or even eliminating your electricity costs with solar power.</p>
                    </TextContainer>
                </Item>
                <Item>
                    <StyledIcon src="/assets/Icons/HomeSection1Icon2.png" alt="Safe Investment" />
                    <TextContainer>
                        <HeadingText>Safe Investment & Long term Earnings</HeadingText>
                        <p>Enjoy long-term savings and reliable financial returns on your solar setup.</p>
                    </TextContainer>
                </Item>
                <Item>
                    <StyledIcon src="/assets/Icons/HomeSection1Icon3.png" alt="Low Maintenance" />
                    <TextContainer>
                        <HeadingText>Low Maintenance, High Efficiency</HeadingText>
                        <p>Solar panels require little upkeep, giving you stress-free energy for years.</p>
                    </TextContainer>
                </Item>
                <Item>
                    <StyledIcon src="/assets/Icons/HomeSection1Icon4.png" alt="Energy Independence" />
                    <TextContainer>
                        <HeadingText>Energy Independence</HeadingText>
                        <p>Generate your own electricity and reduce dependence on power companies.</p>
                    </TextContainer>
                </Item>
                <Item>
                    <StyledIcon src="/assets/Icons/HomeSection1Icon5.png" alt="Eco Friendly" />
                    <TextContainer>
                        <HeadingText>Eco-Friendly & Sustainable</HeadingText>
                        <p>Go green! Cut carbon emissions and help create a cleaner planet.</p>
                    </TextContainer>
                </Item>
                <Item>
                    <StyledIcon src="/assets/Icons/HomeSection1Icon6.png" alt="Affordable" />
                    <TextContainer>
                        <HeadingText>Affordable & Cost-Effective</HeadingText>
                        <p>Solar energy is now more budget-friendly, making it a smart choice for homes and businesses.</p>
                    </TextContainer>
                </Item>
            </ItemsContainer>
        </Container>
    );
};

export default HomeFirstSection;

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBackground};
    padding: 50px 100px;
`;

const SectionHeading = styled.h2`
    font-size: 22px;
    font-weight: 600;
    padding: 40px 20px;
    padding-top: 0;
    margin: 0px;
    margin-bottom: 0px;
    text-align: start;
`;

const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
    padding: 0px 30px;
    justify-content: center;
    align-items: center;
`;

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.3s ease;
    cursor: pointer;
    gap: 10px;
    padding-bottom: 40px;
    &:hover {
        transform: translateY(-10px);
    }
`;

const StyledIcon = styled.img`
    width: 65px;
    height: auto;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
        font-size: 12px;
        padding: 0;
        margin: 0;
    }
`;

const HeadingText = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-weight: 600;
`;
