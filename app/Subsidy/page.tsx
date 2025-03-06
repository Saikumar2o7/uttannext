"use client"

import styled, { useTheme } from "styled-components";
import Header from "../components/Header/Header";
// import Download from "../../public/assets/Icons/download (1).png"
// import Tick from "../../public/assets/Icons/greenTick.png"
import TopBar from "../stepper/topBar";
import { useEffect } from "react";

interface HeadingProps {
    $textSize : string
}

interface TextProps {
    $textColor: string, $fontWeight: string, $fontSize: string
}

const SubsidyAndFinance = () => {
    const theme = useTheme()

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    const materialsData = [
        {
            material: "Solar Panel Cost (6kW @ ₹30,000/kW)",
            specifications: "400W Monocrystalline",
            qty: "15",
            cost: "₹1,80,000",
        },
        {
            material: "Rest of Material Cost",
            specifications: "6kW Hybrid Inverter",
            qty: "1 Set",
            cost: "₹1,50,000",
        },
        {
            material: "Installation & Labor Charges",
            specifications: "Ballasted Racking",
            qty: "1 set",
            cost: "₹50,000",
        },
        {
            material: "Application & Permit Fees",
            specifications: "Copper Wiring & MC4 Connectors",
            qty: "As required",
            cost: "₹5,000",
        },
    ];
    return (
        <>
            <Header />
            <Container>
            <TopBar currentStep={3}></TopBar>
                <Heading $textSize="21px">Your Solar Subsidy Details</Heading>
                <Card>
                    <HeaderSection>
                        <Heading $textSize="16px">Rooftop Solar Details</Heading>
                        <Text $fontSize="14px" $fontWeight="500" $textColor={theme.colors.primaryText}>
                            <strong>Status:</strong>
                            <span style={{ color: theme.buttons.secondaryBackground, gap: "10px", marginLeft: "10px", fontWeight: "600" }}>Applied</span>
                        </Text>
                    </HeaderSection>
                    <Text $fontSize="13px" $fontWeight="500" $textColor={theme.colors.primaryText}>
                        <strong>Application Name</strong>: Aman Verma
                    </Text>

                    <Text $fontSize="13px" $fontWeight="500" $textColor={theme.colors.primaryText}>
                        <strong>Property Address</strong>: #1002 Brigade Metropolis, ITPL Main Road, Whitefield Bangalore
                    </Text>
                    <br />
                    <Text $fontSize="13px" $fontWeight="500" $textColor={theme.colors.primaryText}>
                        <strong>BESCOM Customer ID</strong>: 123456789
                    </Text>

                    <Text $fontSize="13px" $fontWeight="500" $textColor={theme.colors.primaryText}>
                        <strong>Solar System Size</strong>: 6 kW
                    </Text>
                    <br />
                    <Text $fontSize="13px" $fontWeight="500" $textColor={theme.colors.primaryText}>
                        <strong>Estimated Annual Energy Production</strong>: 9,000 kWh
                    </Text>

                    <Text $fontSize="13px" $fontWeight="500" $textColor={theme.colors.primaryText}>
                        <strong>Total Project Cost</strong>: ₹7,00,000
                    </Text>

                    <Text $fontSize="13px" $fontWeight="500" $textColor={theme.colors.primaryText}>
                        <strong>Eligible Subsidy Amount</strong>: ₹1,05,000 (Karnataka) + ₹78,000 (Central)
                    </Text>
                </Card>
                <Heading $textSize="21px">Project Cost & Subsidy Breakdown</Heading>
                <TableWrapper>
                    <Table>
                        <thead>
                            <tr>
                                <Th>Cost Component</Th>
                                <Th>Specifications</Th>
                                <Th>Qty</Th>
                                <Th>Amount (₹)</Th>
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
                    <Line />
                    <HeaderSection className="total">
                        <Text $fontSize="14px" $fontWeight="600" $textColor={theme.colors.primaryText}>Total Cost (Before GST)</Text>
                        <Text $fontSize="14px" $fontWeight="600" $textColor={theme.colors.primaryText}>₹5,00,000</Text>

                    </HeaderSection>
                    <Card className="summary">
                        <Text $fontSize="14px" $fontWeight="600" $textColor={theme.colors.primaryText}>Subsidy Details:</Text>
                        <HeaderSection className="summary">
                            <Text $fontSize="14px" $fontWeight="600" $textColor={theme.colors.primaryText}>Karnataka State</Text>
                            <Text $fontSize="14px" $fontWeight="600" $textColor={theme.colors.primaryText}>₹17,500</Text>
                        </HeaderSection>
                        <HeaderSection className="summary border">
                            <Text $fontSize="14px" $fontWeight="600" $textColor={theme.colors.primaryText}>Central</Text>
                            <Text $fontSize="14px" $fontWeight="600" $textColor={theme.colors.primaryText}>₹42,500</Text>
                        </HeaderSection>
                        <Line />
                        <HeaderSection>
                            <Text $fontSize="14px" $fontWeight="600" $textColor={theme.colors.primaryText}>Total Subsidy</Text>
                            <Text $fontSize="14px" $fontWeight="600" $textColor={theme.colors.primaryText}>₹60,000</Text>
                        </HeaderSection>
                    </Card>
                </TableWrapper>
                {/* <Heading $textSize="22px">Documents Submitted</Heading>
                <CardGrid>
                    <GridCard>
                        <div>
                            <StyledDownloadIcon src={Tick.src} />
                            <span>Solar Feasibility Report</span>
                        </div>
                        <StyledDownloadIcon src={Download.src} />
                    </GridCard>
                    <GridCard>
                        <div>
                            <StyledDownloadIcon src={Tick.src} />
                            <span>Purchase Proof of Solar Equipment</span>
                        </div>
                        <StyledDownloadIcon src={Download.src} />
                    </GridCard>
                    <GridCard>
                        <div>
                            <StyledDownloadIcon src={Tick.src} />
                            <span>Final Quotation & Invoice</span>
                        </div>
                        <StyledDownloadIcon src={Download} />
                    </GridCard>
                    <GridCard>
                        <div>
                            <StyledDownloadIcon src={Tick.src} />
                            <span>Latest Electricity Bill</span>
                        </div>
                        <StyledDownloadIcon src={Download} />
                    </GridCard>
                    <GridCard>
                        <div>
                            <StyledDownloadIcon src={Tick.src} />
                            <span>Permit Approval from BESCOM</span>
                        </div>
                        <StyledDownloadIcon src={Download} />
                    </GridCard>
                    <GridCard>
                        <div>
                            <StyledDownloadIcon src={Tick.src} />
                            <span>Bank Account Details for Direct Transfer</span>
                        </div>
                        <StyledDownloadIcon src={Download} />
                    </GridCard>
                    
                </CardGrid> */}
            </Container>
        </>
    )
}

export default SubsidyAndFinance

    const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding: 40px 100px;
    font-family:${(props) => props.theme.fontFamily};
    margin: auto;
    `;

    const Heading = styled.h2<HeadingProps>`
    text-align: start;
    font-size: ${(props) => props.$textSize};
    font-weight: 600;
    margin-bottom: 20px;
    color:${(props) => props.theme.buttons.secondaryBackground};
    p{
    margin:0;
    padding:0;
    font-size:14px;
    &.bold{
    font-weight:600;
    }
    `;

const Card = styled.div`
  background: ${(props) => props.theme.colors.primaryBackground};
  display: flex;
  flex-direction:column;
  justify-content: start;
  align-items: start; 
  padding:15px 40px;
  margin-bottom: 15px;
  margin-top:20px;
  gap:10px;
  flex-wrap: nowrap;
  background-color:${(props) => props.theme.colors.secondaryBackground};
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
    &.summary{
    margin-top:0px;
    

    }
`;
const HeaderSection = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
margin-bottom:5px;
&.summary{
margin-top:0px;
gap:10px;
padding:0px 0px;
}
&.total{
padding:10px 40px;
}
&.border {
border-bottom:2px dashed #333;
padding-bottom: 20px;
}
`;

const Text = styled.p<TextProps>`
padding:0;
margin:0;
color:${(props) => props.$textColor};
font-weight:${(props) => props.$fontWeight};
font-size:${(props) => props.$fontSize};
`;

const TableWrapper = styled.div`
display:flex;
flex-direction:column;
border:2px solid${(props) => props.theme.buttons.primaryBackground};
border-radius:10px;
padding:10px;
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


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-bottom:2px dashed ${(props) => props.theme.colors.lightBorder};
`;

const Line = styled.div`
border-bottom:2px dashed #333;
margin:10px;

`;


// const CardGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 40px;
//   width: 100%;
//   margin: auto;
//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const GridCard = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: ${(props) => props.theme.colors.primaryBackground};
//   padding: 15px;
//   text-align: start;
//   font-size: 1.2rem;
//   font-weight: bold;
//   gap: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   border-radius: 5px;
//   border:2px solid${(props) => props.theme.colors.lightBorder};
//   span {
//   padding:0;
//   margin:0;
//   font-size:15px;
//   font-weight:600;
//   margin-left:10px;
//   text-align:center;
//   }
// `;

// const StyledDownloadIcon = styled.img`
// width:20px;
// height:20px;
// `
