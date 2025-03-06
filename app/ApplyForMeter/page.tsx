"use client"

import styled, { useTheme } from "styled-components";
import Header from "../components/Header/Header";
// import EditIcon from "../../public/assets/Icons/EditIcon.png"
import Upload from "../../public/assets/Icons/Upload.png"
import TopBar from "../stepper/topBar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface HeadingProps {
    $textSize : string
}

interface TextProps {
    $textColor: string, $fontWeight: string, $fontSize: string
}

const ApplyForMeter = () => {
    const theme = useTheme();
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const navigateToCart = () => {
        router.push("/Cart")
    }

    return (
        <>
            <Header />
            <Container>
                <TopBar currentStep={1}></TopBar>
                <Heading $textSize="22px">Your Solar Feasibility Report: Clear Insights, Smart Decisions!</Heading>
                <Text $textColor={theme.colors.primaryText} $fontSize="15px" $fontWeight="600">
                    Ensure a smooth installation process by submitting your permit application to BESCOM.
                </Text>
                <CardGrid>
                    <GridCard>
                        <HeaderSection>
                            <Heading $textSize="15px">Site Inspection Summary</Heading>
                            {/* <StyledEditIcon src={EditIcon.src} alt="EditIconImg" /> */}
                        </HeaderSection>

                        <CardContent>
                            <Text $fontSize="13px" $fontWeight="600" $textColor={theme.colors.primaryText}>
                                Application Name :
                            </Text>
                            <InputWrapper>
                                <StyledNewInput type="text" value="Arun Verma" placeholder="" />
                                <TickIcon>✔</TickIcon>
                            </InputWrapper>

                        </CardContent>

                        <CardContent>
                            <Text $fontSize="13px" $fontWeight="600" $textColor={theme.colors.primaryText}>
                                Phone Number:
                            </Text>
                            <InputWrapper>
                                <StyledNewInput type="text" value="+91 9765565478" placeholder="" />
                                <TickIcon>✔</TickIcon>
                            </InputWrapper>
                        </CardContent>

                        <CardContent>
                            <Text $fontSize="13px" $fontWeight="600" $textColor={theme.colors.primaryText}>
                                Email Address:
                            </Text>
                            <InputWrapper>
                                <StyledNewInput type="text"
                                 value="Aman.Verma@gmail.com" placeholder="" />
                                <TickIcon>✔</TickIcon>
                            </InputWrapper>
                        </CardContent>

                        <CardContent>
                            <Text $fontSize="13px" $fontWeight="600" $textColor={theme.colors.primaryText}>
                                Address:
                            </Text>
                            <InputWrapper>
                                <StyledNewInput type="text" value="#1002 Brigade Metropolis, ITPL 
Main  Road, Whitefield Bangalore" placeholder="" />
                                <TickIcon>✔</TickIcon>
                            </InputWrapper>
                        </CardContent>

                        <CardContent>
                            <Text $fontSize="13px" $fontWeight="600" $textColor={theme.colors.primaryText}>
                                Property Details:
                            </Text>
                            <InputWrapper>
                                <StyledNewInput type="text" value="Residential Building, 1500 Sqft Flat Roof" placeholder="" />
                                <TickIcon>✔</TickIcon>
                            </InputWrapper>
                        </CardContent>
                    </GridCard>
                    <GridCard>
                        <Heading $textSize="15px">Proposed Solar Rooftop Plant</Heading>
                            <CardContent>
                                <Text $fontSize="13px" $fontWeight="600" $textColor={theme.colors.primaryText}>
                                    Recommended System Size
                                </Text>
                                <InputWrapper>
                                    <StyledNewInput type="text" value="6 kW" placeholder="" disabled/>
                                    <TickIcon>✔</TickIcon>
                                </InputWrapper>
                            </CardContent>
                            <CardContent>
                                <Text $fontSize="13px" $fontWeight="600" $textColor={theme.colors.primaryText}>
                                Estimated Annual Energy Production:
                                </Text>
                                <InputWrapper>
                                    <StyledNewInput type="text" value="9,000 kWh" placeholder="" disabled/>
                                    <TickIcon>✔</TickIcon>
                                </InputWrapper>
                            </CardContent>
                            <CardContent>
                                <Text $fontSize="13px" $fontWeight="600" $textColor={theme.colors.primaryText}>
                                Current Annual Energy Usage:
                                </Text>
                                <InputWrapper>
                                    <StyledNewInput type="text" value="10,500 kWh" placeholder="" disabled/>
                                    <TickIcon>✔</TickIcon>
                                </InputWrapper>
                            </CardContent>
                            <CardContent>
                                <Text $fontSize="13px" $fontWeight="600" $textColor={theme.colors.primaryText}>
                                Total Number of Panels
                                </Text>
                                <InputWrapper>
                                    <StyledNewInput type="text" value="15" placeholder="" disabled />
                                    <TickIcon>✔</TickIcon>
                                </InputWrapper>
                            </CardContent>
                            <CardContent>
                                <Text $fontSize="13px" $fontWeight="600" $textColor={theme.colors.primaryText}>
                                Mounting System
                                </Text>
                                <InputWrapper>
                                    <StyledNewInput type="text" value="Ballasted Racking" placeholder="" disabled />
                                    <TickIcon>✔</TickIcon>
                                </InputWrapper>
                            </CardContent>
                            <CardContent>
                                <Text $fontSize="13px" $fontWeight="600" $textColor={theme.colors.primaryText}>
                                Inverter Type
                                </Text>
                                <InputWrapper>
                                    <StyledNewInput type="text" value="6kW Hybrid Inverter" disabled placeholder="" />
                                    <TickIcon>✔</TickIcon>
                                </InputWrapper>
                            </CardContent>
                    </GridCard>
                </CardGrid>
                {/* <Card>
                    <Heading textSize="15px">Electricity Connection Details</Heading>
                    <InputSection>
                        <InputItem>
                            <Text fontSize="13px" fontWeight="600" textColor={theme.colors.primaryText}>Customer Name</Text>
                            <StyledInput placeholder="Enter Name" />
                        </InputItem>
                        <InputItem>
                            <Text fontSize="13px" fontWeight="600" textColor={theme.colors.primaryText}>Customer ID</Text>
                            <StyledInput placeholder="Customer ID" />
                        </InputItem>
                        <InputItem>
                            <Text fontSize="13px" fontWeight="600" textColor={theme.colors.primaryText}>Phone Number</Text>
                            <StyledInput placeholder="Phone Number" />
                        </InputItem>
                    </InputSection>
                    <InputSection>
                        <InputItem>
                            <Text fontSize="13px" fontWeight="600" textColor={theme.colors.primaryText}>Meter Number</Text>
                            <StyledInput placeholder="Enter Number" />
                        </InputItem>
                        <InputItem>
                            <Text fontSize="13px" fontWeight="600" textColor={theme.colors.primaryText}>
                                Select Type
                            </Text>
                            <StyledSelect>
                                <option defaultValue="Select Type" value="Select Type" disabled>Select Type</option>
                                <option value="2">Single Phase</option>
                                <option value="3">Three Phase</option>
                            </StyledSelect>
                        </InputItem>
                        <InputItem>
                            <Text fontSize="13px" fontWeight="600" textColor={theme.colors.primaryText}>Connection Type</Text>
                            <StyledSelect>
                                <option defaultValue="Select Type" value="Select Type" disabled>Select Type</option>
                                <option value="1">Residential</option>
                                <option value="2">Commercial</option>
                                <option value="3">Industrial</option>
                            </StyledSelect>
                        </InputItem>
                    </InputSection>
                </Card> */}
                <Card>
                    <Heading $textSize="15px">Upload Your Recent Electricity Bill</Heading>
                    <InputSection>
                        <InputItem>
                            {/* <Text fontSize="13px" fontWeight="600" textColor={theme.colors.primaryText}>Design Plan</Text> */}

                            <StyledFileUpload>
                                <input type="file" />
                                <UploadIconWrapper src={Upload.src} alt="Upload Icon" />
                            </StyledFileUpload>
                        </InputItem>
                        {/* <InputItem>
                            <Text fontSize="13px" fontWeight="600" textColor={theme.colors.primaryText}>Design Plan</Text>

                            <StyledFileUpload>
                                <input type="file" />
                                <UploadIconWrapper src={Upload} alt="Upload Icon" />
                            </StyledFileUpload>
                        </InputItem>
                        <InputItem>
                            <Text fontSize="13px" fontWeight="600" textColor={theme.colors.primaryText}>Design Plan</Text>

                            <StyledFileUpload>
                                <input type="file" />
                                <UploadIconWrapper src={Upload} alt="Upload Icon" />
                            </StyledFileUpload>
                        </InputItem> */}
                    </InputSection>
                </Card>
                <SubmitButton onClick={navigateToCart}>Submit Application</SubmitButton>
            </Container>
        </>
    );
};

export default ApplyForMeter;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 100px;
    font-family: ${(props) => props.theme.fontFamily};
    margin: auto;
`;

const Heading = styled.h2<HeadingProps>`
    text-align: start;
    font-size: ${(props) => props.$textSize};
    font-weight: 600;
    margin-bottom: 20px;
    color: ${(props) => props.theme.buttons.secondaryBackground};
`;

const Text = styled.p<TextProps>`
    padding: 0;
    margin: 0;
    color: ${(props) => props.$textColor};
    font-weight: ${(props) => props.$fontWeight};
    font-size: ${(props) => props.$fontSize};
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    width: 100%;
    margin: auto;
    margin-top: 20px;
    
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const GridCard = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    background: ${(props) => props.theme.colors.secondaryBackground};
    padding: 15px;
    text-align: start;
    font-size: 1.2rem;
    font-weight: bold;
    gap: 0px; 
`;

const HeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`;

// const StyledEditIcon = styled.img`
//     height: 20px;
//     width: 20px;
// `;

const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 10px;
`;
// const Details = styled.div`
// padding:0;
// margin:0;
// display:flex;
// flex-direction:column;
// gap:18px;
// padding-left:20px;
// `;

// const Text1 = styled.p<{ textColor: string, fontWeight: string, fontSize: string }>`
//     padding: 0;
//     margin: 0;
//     color: ${(props) => props.textColor};
//     font-weight: ${(props) => props.fontWeight};
//     font-size: ${(props) => props.fontSize};
// `;

const Card = styled.div`
  background: ${(props) => props.theme.colors.primaryBackground};
  display: flex;
  flex-direction:column;
  justify-content: start;
  align-items: start; 
  padding:15px 20px;
  margin-bottom: 20px;
  margin-top:20px;
  flex-wrap: nowrap;
  min-height: 180px;
  gap:20px;
  background-color:${(props) => props.theme.colors.secondaryBackground};
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const InputSection = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
`;

const InputItem = styled.div`
display:flex;
flex-direction:column;
align-items:start;
gap:10px;
`;
// const StyledInput = styled.input`
// &&{
// width:300px;
// height:50px;
// border:2px solid${(props) => props.theme.colors.lightBorder};
// padding:0px 30px;
// border-radius:5px;
// }
// `;
// const StyledSelect = styled.select`
//   && {
//     width: 300px;
//     height: 50px;
//     border: 2px solid ${(props) => props.theme.colors.lightBorder};
//     padding: 0px 30px;
//     border-radius: 5px;
//     // background-color: ${(props) => props.theme.colors.background}; 
//     color: ${(props) => props.theme.colors.primaryText};
//     font-size: 13px; 
//     font-weight: 600;
//   }
// `;
const StyledFileUpload = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.primaryBackground};
  border: 2px solid ${(props) => props.theme.colors.lightBorder};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 0 30px;
  cursor: pointer;
  text-align: center;

  input[type="file"] {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &::before {
    content: 'Upload Document';
    font-size: 13px;
    font-weight: 500;
    color: ${(props) => props.theme.buttons.secondaryBackground};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
    pointer-events: none;  
  }
`;

const UploadIconWrapper = styled.img`
  position: absolute;
  right: 10px;
  width: 15px;
  height: 15px;
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: ${(props) => props.theme.buttons.secondaryBackground};
  color: #fff;
  padding: 12px 60px;
  margin-top:0px;
  border-radius: 50px;
  border: none;
  margin-left:auto;
  flex-shrink: 0;
  font-weight:600;
`;

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledNewInput = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.lightBorder};
  padding: 0px 30px 0px 10px;
  background-color:${(props) => props.theme.colors.primaryBackground};
  border-radius: 0; 
  outline: none; 

  &:focus {
    border-bottom: 2px solid ${(props) => props.theme.colors.primary}; 
  }
`;

const TickIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: green; 
  font-size: 16px;
`;