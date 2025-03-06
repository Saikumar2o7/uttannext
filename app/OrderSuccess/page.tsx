"use client"

import styled from "styled-components";
import { useRouter } from "next/navigation";
import Success from "../../public/assets/success.png"
import Header from "../components/Header/Header";

const OrderSuccess = () => {
    const router = useRouter();

    const navigateToHome = () => {
        router.push("/HomePage")
    }

    return (
        <>
            <Header />
            <Container>
                <Card>
                    <IconWrapper>
                        <StyledImage src={Success.src} />
                    </IconWrapper>
                    <Title>Order Placed Successfully!</Title>
                    <Message>Thank you for choosing Vikram Solar.</Message>
                    <OrderID>Your Order ID <strong>#24465</strong> is confirmed</OrderID>
                    <Button onClick={navigateToHome}>Go Back Home</Button>
                </Card>
            </Container>
        </>

    );
};

export default OrderSuccess;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:80px;
    font-family:${(props) => props.theme.fontFamily};
`;

const Card = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
    background: white;
    padding:40px 80px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 500px;
    height:400px;
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e6f7ff;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto 20px;
`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #333;
`;

const Message = styled.p`
    font-size: 14px;
    color: #555;
    margin: 10px 0;
    margin:0;
    padding:0;
`;

const OrderID = styled.p`
    font-size: 14px;
    color: #000;
    font-weight: 600;
`;

const Button = styled.button`
    background: #1AAFD3;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    margin-top: 20px;
    width: 100%;
    &:hover {
        background: #0088cc;
    }
`;

const StyledImage = styled.img`
width:180px;
height:150px;
`