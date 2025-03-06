"use client" 

import styled, { useTheme } from "styled-components";

const Footer = () => {
    const theme = useTheme();

    return (
        <Container>
            <FirstLayer>
                <StyledVikiIcon src={theme.icons.FooterVikiIcon} />
                <Section>
                    <Item>
                        <h2>Contact US:</h2>
                    </Item>
                    <Item>
                        <StyledContactIcon src="/assets/Icons/email-icon.png" />
                        <p>sales@solar.com</p>
                    </Item>
                    <Item>
                        <StyledContactIcon src="/assets/Icons/phone-icon.png" />
                        <p>+1800 108 8800</p>
                    </Item>
                </Section>
                <Section>
                    <Item>
                        <h2>Follow US:</h2>
                        <Icons>
                            <StyledIcon src="/assets/Icons/Instagram.png" />
                            <StyledIcon src="/assets/Icons/Dribbble.png" />
                            <StyledIcon src="/assets/Icons/Twitter.png" />
                            <StyledIcon src="/assets/Icons/Youtube.png" />
                        </Icons>
                    </Item>
                </Section>
            </FirstLayer>
            <SecondLayer>
                <p>© Copyright - 2020. All Rights Reserved by <span>VIKI.AI</span></p>
                <Icons>
                    <p>Terms & Conditions |</p>
                    <p>Privacy Policy |</p>
                    <p>Sitemap |</p>
                    <p>Disclaimer</p>
                </Icons>
            </SecondLayer>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.footerBackground};
    height: 220px;
    width: 100%;
    padding: 20px 30px;
`;

const FirstLayer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 35px;
    width: 100%;
    margin-top: 30px;
`;

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Item = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    color: ${(props) => props.theme.colors.secondaryText};
    h2 {
        margin: 0;
        padding: 0;
        font-weight: 600;
        font-size: 19px;
    }
    p {
        margin: 0;
        padding: 0;
        font-size: 14px;
    }
`;

const SecondLayer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    width: 100%;
    height: 70%;
    p {
        margin: 0;
        padding: 0;
        margin-top: 100px;
        color: #d9dbe1;
        font-size: 15px;
    }
    span {
        color: #1fdeb1;
    }
`;

const StyledVikiIcon = styled.img`
    width: 110px;
    height: 35px;
`;

const StyledContactIcon = styled.img`
    margin-left: 20px;
    width: 24px;
    height: 24px;
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-left: 20px;
    p {
        font-size: 14px;
        margin-left: 10px;
        cursor: pointer;
    }
`;

const StyledIcon = styled.img``;
