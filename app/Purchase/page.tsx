"use client"

import  { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import Header from "../components/Header/Header";
import TopBar from "../stepper/topBar";
import { useRouter } from "next/navigation";
// import { useNavigate } from "react-router-dom";
import SuccessModal from "../modals/SuccessModal";

interface HeadingProps {
    $textSize : string
}

interface TextProps {
    $textColor: string, $fontWeight: string, $fontSize: string
}



const Purchase = () => {
    const [successModalStatus,setSuccessModalStatus] = useState(false)
    const [_, setSelectedSubsidy] = useState<string | null>(null);
    const [selectedPayment, setSelectedPayment] = useState("Credit & Debit Card");
    const [selectedFinance, setSelectedFinance] = useState<string | null>(null);
    const router = useRouter()
    const financeOptions = [
        {
            name: "Electronica Finance Limited (EFL)",
            tenure: "Up to 4 years",
            coverage: "Covers up to 100% of the project cost (based on eligibility and terms).",
            structure: "Flexible EMI structure based on customer and project requirements. Collateral-free for loans up to 150 lakh."
        },
        {
            name: "Credit Fair",
            tenure: "Flexible tenure ranging from 6 to 60 months.",
            coverage: "Covers up to 100% of the project cost, subject to eligibility.",
            structure: "Flexible EMI payments based on loan tenure, with no collateral required."
        },
        {
            name: "MYSUN",
            tenure: "Up to 36 months",
            coverage: "Up to 70% of the total solar project cost.",
            structure: "Zero-cost EMI plans available with flexible options for eligible customers."
        },
        {
            name: "Metafin Cleantech Finance Pvt. Ltd.",
            tenure: "6 months (No-cost EMI option) or 24/36 months with interest.",
            coverage: "Covers up to 100% of the solar project cost.",
            structure: "Pay 30% upfront, the remaining 70% in EMIs. 2-month moratorium period before EMI starts."
        },
        {
            name: "Sunpower",
            tenure: "Up to 5 years.",
            coverage: "Covers up to 100% of the solar project cost.",
            structure: "Flexible repayment options with EMI rates based on tenure and loan amount."
        }
    ];
    const theme = useTheme();
     useEffect(() => {
            window.scrollTo(0, 0);
          }, [])
    
    return (
        <>
            <Header />
            <Container>
            <TopBar currentStep={2}></TopBar>
                <Heading $textSize="22px">Your Subsidy & Payment Options</Heading>
                <Text $textColor={theme.colors.primaryText} $fontSize="15px" $fontWeight="600">
                    Choose your subsidy and payment option.
                </Text>
                <SectionTitle>Subsidy</SectionTitle>
                <Text $textColor={theme.colors.primaryText} $fontSize="15px" $fontWeight="">
                    A Solar Subsidy is financial support provided by the government or organisations to reduce the cost of solar energy systems, making them more affordable and encouraging the adoption of renewable energy.
                </Text>
                <Text className="middle-title" $textColor={theme.colors.primaryText} $fontSize="15px" $fontWeight="600">
                    Based on your location and plan you are eligible for:
                </Text>
                <Checkbox>
                    <input type="checkbox" onChange={() => setSelectedSubsidy("Central")} />
                    <label>I want to apply for the central government subsidy</label>
                </Checkbox>
                <Checkbox>
                    <input type="checkbox" onChange={() => setSelectedSubsidy("State")} />
                    <label>I want to apply for the state government subsidy</label>
                </Checkbox>

                <SectionTitle>Pick Your Payment Option</SectionTitle>
                <RadioGroup>
                    <Radio>
                        <input type="radio" name="payment" checked={selectedPayment === "Credit & Debit Card"} onChange={() => setSelectedPayment("Credit & Debit Card")} />
                        <Text $textColor={theme.colors.primaryText} $fontSize="15px" $fontWeight="600">Credit & Debit Card</Text>
                    </Radio>
                    <Radio>
                        <input type="radio" name="payment" checked={selectedPayment === "Net Banking"} onChange={() => setSelectedPayment("Net Banking")} />
                        <Text $textColor={theme.colors.primaryText} $fontSize="15px" $fontWeight="600">Net Banking</Text>

                    </Radio>
                    <Radio>
                        <input type="radio" name="payment" checked={selectedPayment === "Financial Options"} onChange={() => setSelectedPayment("Financial Options")} />
                        <Text $textColor={theme.colors.primaryText} $fontSize="15px" $fontWeight="600">Financial Options</Text>
                    </Radio>
                </RadioGroup>

                {selectedPayment === "Financial Options" && (
                    <FinanceList>
                        {financeOptions.map((option, index) => (
                            <FinanceCard
                                key={index}
                                selected={selectedFinance === option.name}
                                onClick={() => setSelectedFinance(option.name)}
                            >
                                <FinanceHeader>
                                    <h3>{option.name}</h3>
                                    <SelectButton selected={selectedFinance === option.name}>Select</SelectButton>
                                </FinanceHeader>
                                <FinanceRow>
                                    <FinanceLabel>EMI Tenure:</FinanceLabel>
                                    <FinanceValue>{option.tenure}</FinanceValue>
                                </FinanceRow>
                                <FinanceRow>
                                    <FinanceLabel>Financing Coverage:</FinanceLabel>
                                    <FinanceValue>{option.coverage}</FinanceValue>
                                </FinanceRow>
                                <FinanceRow rightAligned={true}>
                                    <FinanceLabel>Payment Structure:</FinanceLabel>
                                    <FinanceValue>{option.structure}</FinanceValue>
                                </FinanceRow>

                            </FinanceCard>
                        ))}
                    </FinanceList>
                )}
                <SuccessModal open={successModalStatus} onClose={()=>setSuccessModalStatus(false)}/>
                <MakePaymentButton onClick={()=>setSuccessModalStatus(true)}>Make Payment</MakePaymentButton>
            </Container>
        </>

    );
};

export default Purchase;


const Container = styled.div`
margin: auto;
padding: 40px 100px;
font-family: ${(props) => props.theme.fontFamily};
`;

const Heading = styled.h2<HeadingProps>`
    text-align: start;
    font-size: ${(props) => props.$textSize};
    font-weight: 600;
    margin-bottom: 5px;
    color: ${(props) => props.theme.buttons.secondaryBackground};
    &.main-header {
        text-align: center;
    }
`;
const Text = styled.p<TextProps>`
    padding: 0;
    margin: 0;
    color: ${(props) => props.$textColor};
    font-weight: ${(props) => props.$fontWeight};
    font-size: ${(props) => props.$fontSize};
    &.middle-title{
    padding:20px 0px;
    }
`;

const SectionTitle = styled.h3`
  margin-top: 40px;
  font-weight:600;
  font-size:18px;
  color: ${(props) => props.theme.buttons.secondaryBackground};

`;

const Checkbox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  margin:10px;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
`;

const Radio = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
`;
const FinanceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top:20px;
`;

const FinanceCard = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px 40px;
  border-radius: 10px;
  border: ${({ selected }) => (selected ? "2px solid #00b4e6" : "1px solid #ddd")};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  max-height:250px;
  transition: all 0.3s ease;
`;

const FinanceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3{
  padding:0;
  margin:0;
  font-weight:600;
  font-size:17px;
  margin-bottom:20px;
  }
`;

const SelectButton = styled.button<{ selected: boolean }>`
  background: ${(props)=>props.theme.buttons.secondaryBackground};
  color: ${(props)=>props.theme.colors.secondaryText};
  border: none;
  padding: 8px 26px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;


  &:hover {
    background: ${({ selected }) => (selected ? "#009ace" : "#ddd")};
  }
`;

const FinanceRow = styled.div<{rightAligned?:boolean}>`
  display: flex;
  justify-content: ${(props) => (props.rightAligned ? 'flex-end' : 'space-between')};
  gap: 30px;
  margin-top: 20px;

`;

const FinanceLabel = styled.p`
  font-weight: 600;
  font-size:15px;
  min-width: 160px;
  padding:0;
  margin:0;

`;

const FinanceValue = styled.p`
  flex: 1;
  font-size:13px;
  padding:0;
  margin:0;
`;


const MakePaymentButton = styled.button`
  background-color:${(props)=>props.theme.buttons.secondaryBackground};
  color: white;
  padding:10px 60px;
  display:flex;
  font-weight:600;
  justify-content:center;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-left:auto;
  margin-top: 20px;
`;
