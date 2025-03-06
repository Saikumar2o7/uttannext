"use client"

import styled, { useTheme } from "styled-components"
import Header from "../components/Header/Header";
import Thumb from "../../public/assets/Thumb.png"
import TopBar from "../stepper/topBar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DownloadIcon from "../../public/assets/Icons/download (1).png"

const Quotation = () => {
    const theme = useTheme()
    const router = useRouter()


    const navigateToMeter = () => {
        router.push("/ApplyForMeter")
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    const data = [
        {
            title: "Property Details",
            content: [
                "Building Type: Residential",
                "Roof Type: Flat",
                "Total Roof Area: 1,500 sq. ft.",
                "Shading Analysis: Minimal obstruction",
            ],
        },
        {
            title: "Technical Considerations",
            content: [
                "Roof Strength: Suitable for solar panel installation",
                "Wiring & Electrical Panel Compatibility: Requires minor upgrades",
                "Mounting System Recommendation: Ballasted racking system",
            ],
        },
        {
            title: "Solar Potential Score Rating",
            content: [
                "Sunlight Exposure: High (Avg. 5.5 peak sun hours/day)",
                "Recommended System Size: 6 kW",
                "Estimated Annual Energy Production: 9,000 kWh",
                "Potential CO2 Reduction: ~4.5 metric tons per year",
            ],
        },
        {
            title: "Estimated Energy Generation (kWh/year)",
            content: [
                "Current Annual Energy Usage: 10,500 kWh",
                "Projected Annual Energy Usage: 10,800 kWh (based on appliance upgrades and lifestyle changes)",
                "Percentage of Energy Offset by Solar: ~85%",
                "Potential Grid Dependence Reduction: Significant decrease, with net metering options available",
            ],
        },
    ];
    const materialsData = [
        {
            material: "Solar Panels",
            specifications: "400W Monocrystalline",
            qty: "15",
            cost: "₹5,20,666",
        },
        {
            material: "Inverter",
            specifications: "6kW Hybrid Inverter",
            qty: "1 Set",
            cost: "₹ 1,73,555",
        },
        {
            material: "Mounting Structure",
            specifications: "Ballasted Racking",
            qty: "1 set",
            cost: "₹ 1,04,141",
        },
        {
            material: "Wiring & Connectors",
            specifications: "Copper Wiring & MC4 Connectors",
            qty: "As required",
            cost: "₹ 43,392",
        },
        {
            material: "battery (optional)",
            specifications: "10kWh Lithium-ion",
            qty: "1 Set",
            cost: "₹ 3,03,745",
        },
        {
            material: "Monitoring System",
            specifications: "Smart Energy Monitor",
            qty: "1 Set",
            cost: "₹ 69,422",
        },
        {
            material: "Miscellaneous ",
            specifications: "Installation  tools, permits, etc.",
            qty: "-",
            cost: "₹ 86,777",
        },
    ];
    return (
        <>
            <Header />
            <Container>
            <TopBar currentStep={0}></TopBar>
                <Heading $textSize="22px">
                    Your Solar Feasibility Report: Clear Insights, Smart Decisions!
                </Heading>
                <Text $textColor={theme.colors.primaryText} $fontSize="15px" $fontWeight="600">
                    A detailed breakdown of your rooftop solar potential, savings, and next steps.
                </Text>
                <Card>
                    <HeaderSection>
                    <StyledIcon src={Thumb.src} alt="ThumbIcon" />
                        <Heading $textSize="19px">Your property is an Excellent Candidate for rooftop solar</Heading>
                        
                    </HeaderSection>
                    <Text $fontSize="13px" $fontWeight="" $textColor={theme.colors.primaryText}>Based on our assessment, your property is an excellent candidate for rooftop solar. The financial returns, environmental benefits, and available incentives make solar installation a smart long-term investment. We recommend proceeding with installation and can assist you in selecting a trusted provider.</Text>
                    <DetailsLink>Download Detailed Report<StyledDownloadIcon src={DownloadIcon.src} alt="DownloadIcon" /></DetailsLink>
                </Card>
                <CardGrid>
                    {data.map((card, index) => (
                        <GridCard key={index}>
                            <Heading $textSize="14px">{card.title}</Heading>
                            {card.content.map((item, i) => {
                                const [boldText, normalText] = item.split(": ");
                                return (
                                    <Text $fontSize="12px" $fontWeight="500" key={i} $textColor={theme?.colors?.primaryText}>
                                        <strong>{boldText}:</strong> {normalText}
                                    </Text>
                                );
                            })}
                        </GridCard>
                    ))}
                </CardGrid>
                <Heading $textSize="22px">Equipment & Materials Breakdown</Heading>
                 <TableWrapper>
                    <Table>
                        <thead>
                            <tr>
                                <Th>Component</Th>
                                <Th>Specifications</Th>
                                <Th>Qty</Th>
                                <Th>Approximate Cost (INR)</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {materialsData.map((item, index) => (
                                <tr key={index}>
                                    <Td>{item.material}</Td>
                                    <Td>{item.specifications}</Td>
                                    <Td>{item.qty}</Td>
                                    <Td>{item.cost}</Td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </TableWrapper>
                <FooterSection>
                    <div>
                        <Heading $textSize="14px">Secure Your BESCOM Approval & Installation Permit Today!</Heading>
                        <TextBox>Based on your location, the state you reside in mandates that you submit an application
                            and obtain a permit before installing a rooftop solar system. Get started today to ensure a
                            smooth and hassle-free installation process!</TextBox>
                    </div>
                    <ProceedButton onClick={navigateToMeter}>Apply For Permit</ProceedButton>
                </FooterSection>
            </Container>
        </>
    )
}

export default Quotation


const Container = styled.div`
display:flex;
flex-direction:column;
padding: 40px 100px;
font-family:${(props) => props.theme.fontFamily};
margin: auto;
`;

const Heading = styled.h2<{ $textSize: string }>`
  text-align: start;
  font-size: ${(props) => props.$textSize};
  font-weight: 600;
  margin-bottom: 15px;
   color:${(props) => props.theme.buttons.secondaryBackground};
 p{
margin:0;
padding:0;
font-size:14px;
&.bold{
font-weight:600;
}
`;

const DetailsLink = styled.p`
padding:0;
margin:0;
display:flex;
justify-content:start;
align-items:center;
gap:5px;
font-weight:600;
cursor:pointer;
text-decoration:underline;
color:${(props)=>props.theme.buttons.primaryBackground};
margin-left:auto;

margin-top:20px;
`;

const StyledDownloadIcon = styled.img`
width:15px;
height:15px;
filter: invert(50%) sepia(90%) saturate(2000%) hue-rotate(200deg) brightness(95%) contrast(100%);
`;

const Text = styled.p<{ $textColor: string, $fontWeight: string, $fontSize: string }>`
padding:0;
margin:0;
color:${(props) => props.$textColor};
font-weight:${(props) => props.$fontWeight};
font-size:${(props) => props.$fontSize};
`;

const Card = styled.div`
  background: ${(props) => props.theme.colors.primaryBackground};
  display: flex;
  flex-direction:column;
  justify-content: start;
  align-items: center; 
  padding:15px 20px;
  margin-bottom: 20px;
  margin-top:20px;
  flex-wrap: nowrap;
  min-height: 180px;
  background-color:${(props) => props.theme.colors.secondaryBackground};
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const HeaderSection = styled.div`
display:flex;
justify-content:start;
align-items:center;
gap:20px;
width:100%;
margin-bottom:10px;
`;

const StyledIcon = styled.img`
height:60px;
width:60px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 100%;
  margin: auto;
  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Single column layout for small screens */
  }
`;

const GridCard = styled.div`
display:flex;
justify-content:start;
align-items:start;
flex-direction:column;
  background: ${(props) => props.theme.colors.secondaryBackground};
  padding: 15px;
  text-align: start;
  font-size: 1.2rem;
  font-weight: bold;
  gap:10px;
`;

const TableWrapper = styled.div`
display:flex;
flex-direction:column;
border:2px solid${(props) => props.theme.buttons.primaryBackground};
border-radius:10px;
padding:20px 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
`;

const Th = styled.th`
  background: #F3F6F9;
  color: ${(props) => props.theme.colors.border};
  padding: 10px;
  font-size:14px;
  font-weight:600;
  text-align: center;
`;

const Td = styled.td`
  padding: 10px;
  font-size:13px;
  font-weight:600;
  color:#464E5F;
  text-align:center;
`;
const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding:40px;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
   width: 80%;
  flex-shrink: 0;
  font-size:13px;
`;

const ProceedButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: ${(props) => props.theme.buttons.secondaryBackground};
  color: #fff;
  padding: 10px 80px;
  border-radius: 50px;
  border: none;
  flex-shrink: 0;
  font-weight:600;
`;


