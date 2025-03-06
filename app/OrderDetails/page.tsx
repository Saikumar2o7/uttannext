"use client"

import styled from "styled-components";
import Header from "../components/Header/Header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const OrderDetails = () => {
    const router = useRouter();
    const [provider, setProvider] = useState<any>(null);

    const navigateToOrderSuccess = () => {
        router.push("/OrderSuccess")
    }

    useEffect(() => {
        const storedProvider = localStorage.getItem("provider");
        if (storedProvider) {
            setProvider(JSON.parse(storedProvider));
        }
    }, []);

    if (!provider) return <p>Loading...</p>;

    return (
        <>
            <Header />
            <Container>
                <Title>Order Details</Title>
                <Wrapper>
                    <Card>
                        <CardHeader>
                            <ProviderName>
                                {provider.name} - 
                                <ServiceDescription>{provider.service}</ServiceDescription>
                            </ProviderName>
                            <Price>
                                <strong>{provider.price}</strong>
                            </Price>
                        </CardHeader>
                        <Description>
                            <ul>
                                {provider.details.map((detail: string, index: number) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </Description>
                    </Card>
                    <SummaryCard>
                        <SummaryItem>
                            <span>Sub Total</span>
                            <span>{provider.price}</span>
                        </SummaryItem>
                        <SummaryItem>
                            <span>6.00% CGST</span>
                            <span>₹18,000</span>
                        </SummaryItem>
                        <SummaryItem className="border">
                            <span>6.00% SGST</span>
                            <span>₹18,000</span>
                        </SummaryItem>
                        <SummaryItem className="border">
                            <span>Total GST</span>
                            <span style={{ color: '#1AAFD3' }}>₹3,79,419</span>
                        </SummaryItem>
                        <GrandTotal>
                            <span>Grand Total</span>
                            <span>₹3,36,000</span>
                        </GrandTotal>
                    </SummaryCard>
                </Wrapper>
                <PaymentButton onClick={navigateToOrderSuccess}>Confirm Order</PaymentButton>
            </Container>
        </>
    );
};

export default OrderDetails;

const Wrapper = styled.div`
display:flex;
flex-direction:column;
gap:10px;
width:100%;
padding:30px;
border-radius:10px;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
background-color:${(props) => props.theme.colors.primaryBackground};
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:20px 200px;
    font-family:${(props) => props.theme.fontFamily};

`;

const Title = styled.h2`
  text-align: center;
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 30px;
  position: relative;
  display: inline-block; 
  color:#3C3C3C;
  &::after {
    content: "";
    display: block;
    width: 100px; 
    height: 2px;
    background-color: #00aaff;
    margin: 5px auto 0;
  }
`;

const Card = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin-bottom: 20px;
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Description = styled.div`
    margin-top: 10px;
    font-size: 14px;
    color: #555;
`;

const Price = styled.div`
    font-size: 16px;
    color: #000;
`;

const SummaryCard = styled.div`
    background: white;
    padding:20px 60px;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin-bottom: 20px;
`;

const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 14px;
    color: #000;
    font-weight:600;
    &.border {
    padding:10px 0px;
    border-bottom:2px dashed${(props) => props.theme.colors.lightBorder};
    }
`;

const GrandTotal = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
`;

const PaymentButton = styled.button`
    background: #1AAFD3;
    color: white;
    padding: 14px 80px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 14px;
    font-weight:600;
    margin-top: 20px;
    &:hover {
        background: #0088cc;
    }
`;

const ProviderName = styled.div`  
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
`;

const ServiceDescription = styled.span` 
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60%;
`;
