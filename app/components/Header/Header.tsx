'use client';

import styled, { useTheme } from "styled-components";

interface StyledButtonProps {
    $backgroundColor: string;
    $borderColor: string;
    $textColor: string;
}

const Header = () => {
    const theme = useTheme();

    return (
        <Container>
            <StyledHeaderImage src="/assets/Utthan.png" alt="Utthan Logo" />
            <ButtonsWrapper>
                <StyledButton
                    $backgroundColor={theme.colors.primaryBackground}
                    $borderColor={theme.buttons.secondaryBackground}
                    $textColor={theme.buttons.secondaryBackground}
                >
                    Solar Calculator
                </StyledButton>
                {/* You can uncomment and use this as needed */}
                {/* <StyledButton
                    $backgroundColor={theme.buttons.primaryBackground}
                    $borderColor={theme.buttons.primaryBackground}
                    $textColor={theme.colors.primaryBackground}
                >
                    Login
                </StyledButton> */}
            </ButtonsWrapper>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 50px;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primaryBackground};
    width: 100%;
    height: 80px;
    box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.15);
`;

const StyledHeaderImage = styled.img`
    height: 60px;
    align-items: center;
    justify-content: center;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    background-color: ${(props) => props.$backgroundColor};
    border: 2px solid ${(props) => props.$borderColor};
    border-radius: 50px;
    padding: 9px 40px;
    color: ${(props) => props.$textColor};
    font-size: 12px;
    font-weight: 600;
`;