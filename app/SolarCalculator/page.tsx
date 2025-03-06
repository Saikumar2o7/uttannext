"use client"

import styled from "styled-components";
import Header from "../components/Header/Header";
// import Tick from '../assets/Icons/greenTick.png';
import Upload from "../../public/assets/Icons/Upload.png"
import RupeeIcon from '../../public/assets/Icons/RupeeIcon.png'
import { useEffect, useState } from "react";
import BookSiteVisitModal from "../modals/BookSiteVisitModal";
import Icon1 from '../../public/assets/Icons/HomeSection1Icon1.png'
import Icon2 from '../../public/assets/Icons/HomeSection1Icon3.png'
import Icon3 from '../../public/assets/Icons/HomeSection1Icon4.png'
import Icon4 from '../../public/assets/Icons/SolarPageIcon4.png'
import Icon5 from '../../public/assets/Icons/SolarPageIcon5.png'
import Icon6 from '../../public/assets/Icons/SolarPageIcon6.png'


const SolarCalculator = () => {

    const solarData = [
        { bill: 1500, systemSize: 3, panels: 8, area: 172, cost: [135000, 180000] },
        { bill: 2000, systemSize: 4, panels: 10, area: 215, cost: [180000, 240000] },
        { bill: 2500, systemSize: 5, panels: 13, area: 280, cost: [225000, 300000] },
    ];

    const [bill, setBill] = useState(1500);
    const [systemSize, setSystemSize] = useState(1);
    const [solarInfo, setSolarInfo] = useState(solarData[0]);
    const [bookSiteVisitModal, setBooksiteVisit] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
        const storeValue = localStorage.getItem('ElectricityBill');
        if (storeValue) {
            const storedBill = Number(storeValue);
            setBill(storedBill);
            const matchedInfo = solarData.find((data) => data.bill === storedBill);
            if (matchedInfo) {
                setSolarInfo(matchedInfo);
                localStorage.removeItem('ElectricityBill')
            }
        } else {
            setSolarInfo(solarData[0]);
        }
    }, []);

    useEffect(() => {
        const matchedInfo = solarData.find((data) => data.bill === bill);
        if (matchedInfo) {
            setSolarInfo(matchedInfo);
            setSystemSize(matchedInfo.systemSize);
        }
    }, [bill]);

    const handleBillChange = (increment: boolean) => {
        const billValues = solarData.map((data) => data.bill);
        const newBill = increment
            ? Math.min(Math.max(bill + 500, Math.min(...billValues)), Math.max(...billValues))
            : Math.max(Math.min(bill - 500, Math.max(...billValues)), Math.min(...billValues));

        setBill(newBill);
    };

    const handleSystemSizeChange = (increment: boolean) => {
        const availableSystemSizes = solarData.map((data) => data.systemSize);
        let newSize;

        if (increment) {
            const currentIndex = availableSystemSizes.indexOf(systemSize);
            newSize = availableSystemSizes[currentIndex + 1] || systemSize;
        } else {
            const currentIndex = availableSystemSizes.indexOf(systemSize);
            newSize = availableSystemSizes[currentIndex - 1] || systemSize;
        }
        setSystemSize(newSize);
    };

    const tableData = [
        { component: 'Solar Panels', specifications: 'Monocrystalline, 400W-450W', qty: 8, cost: '96,000 – 1,12,000' },
        { component: 'Solar Inverter', specifications: 'String Inverter, 4kW', qty: 1, cost: '35,000 – 45,000' },
        { component: 'Mounting Structure', specifications: 'GI/Aluminum, Fixed Tilt', qty: '1 Set', cost: '10,000 – 12,000' },
        { component: 'Wiring & Connectors', specifications: 'Solar DC + AC cables, MC4', qty: '1 Set', cost: '7,000 – 8,000' },
        { component: 'Protection Devices', specifications: 'Circuit Breakers, Isolators', qty: '1 Set', cost: '6,000 – 8,000' },
        { component: 'Installation Charges', specifications: 'Labor & Misc. Setup Costs', qty: '1 Set', cost: '10,000 – 12,000' },
    ];
    const data = [
        {
            icon: Icon1,
            title: 'Save ₹12.5 lakh in 25 years—₹50,000/year in savings!',
            description: `Save ₹50,000 annually, totaling ₹12.5 lakh in 25 years, significantly reducing electricity costs and ensuring long-term savings.`,
        },
        {
            icon: Icon2,
            title: 'Energy Independence: Power 85% of Your Needs!',
            description: 'Generate 9,000 kWh annually, cutting reliance on the grid and minimizing power outage worries.',
        },
        {
            icon: Icon3,
            title: 'Generate 9,000 kWh/year, covering 85% of your electricity. ',
            description: 'Produce 9,000 kWh/year, covering 85% of your power needs, reducing grid dependence, lowering electricity bills, and protecting against rising energy costs.',
        },
        {
            icon: Icon4,
            title: 'Cut 8 Tons of CO₂ = Plant 400 Trees Yearly!',
            description: 'Your system offsets as much carbon as planting 400 trees each year, making a real impact on the environment!',
        },
        {
            icon: Icon5,
            title: 'Huge Government Subsidy: Save ₹1,83,000!',
            description: 'Get ₹1,05,000 from the state and ₹78,000 from the center—covering nearly 40% of your cost upfront!',
        },
        {
            icon: Icon6,
            title: 'Earn Money from Excess Power:',
            description: 'Your system can sell unused electricity back to the grid through net metering, creating an additional income source.',
        },
    ];

    const groupedData = [];
    for (let i = 0; i < data.length; i += 2) {
        groupedData.push(data.slice(i, i + 2));
    }

    const handleCloseModal = () => {
        setBooksiteVisit(false)
    }
    return (
        <>
            <Header />
            <Container>
                <Heading className="main-header" $textSize="22px">Your Estimation</Heading>
                <CardContainer>
                    <CalculatorBox>
                        <Box>
                            <Value>₹{bill}</Value>
                            <AdjustInput>
                                <ArrowButton onClick={() => handleBillChange(true)}>▲</ArrowButton>
                                <ArrowButton onClick={() => handleBillChange(false)}>▼</ArrowButton>
                            </AdjustInput>
                        </Box>
                        <Label>Monthly Electricity Bill</Label>
                    </CalculatorBox>

                    <CalculatorBox>
                        <Box>
                            <Value>{systemSize} kW</Value>
                            <AdjustInput>
                                <ArrowButton
                                    disabled={systemSize === Math.max(...solarData.map((data) => data.systemSize))}
                                    onClick={() => handleSystemSizeChange(true)}>▲</ArrowButton>
                                <ArrowButton
                                    disabled={systemSize === Math.min(...solarData.map((data) => data.systemSize))}
                                    onClick={() => handleSystemSizeChange(false)}>▼</ArrowButton>
                            </AdjustInput>
                        </Box>
                        <Label>KWH</Label>
                    </CalculatorBox>

                    <CalculatorBox>
                        <Box>
                            <Value>{solarInfo.panels}</Value>
                        </Box>
                        <Label># of Solar Panels</Label>
                    </CalculatorBox>
                    <CalculatorBox>
                        <Box>
                            <Value>{solarInfo.area} Sqft</Value>
                        </Box>
                        <Label>Area Needed</Label>
                    </CalculatorBox>
                    <CalculatorBox>
                        <Box>
                            <Value>₹{` ${solarInfo.cost[0]}`}</Value>
                        </Box>
                        <Label>Estimated Cost</Label>
                    </CalculatorBox>
                </CardContainer>
                <Heading className="main-header" $textSize="22px">Solar = Savings! See How You Benefit</Heading>
                <Card>
                    {groupedData.map((pair, index) => (
                        <RowWrapper key={index}>
                            {pair.map((item, itemIndex) => (
                                <Row key={itemIndex}>
                                    <StyledIcon src={item.icon.src} alt="itemIcon" />
                                    <TextContainer>
                                        <HeadingText>{item.title}</HeadingText>
                                        <Sentence>
                                            {item.description}
                                        </Sentence>
                                    </TextContainer>
                                </Row>
                            ))}
                        </RowWrapper>
                    ))}
                </Card>
                <Heading className="main-header" $textSize="22px">Your Solar Setup Essentials</Heading>

                <TableWrapper>
                    <Table>
                        <thead>
                            <tr>
                                <Th>Component</Th>
                                <Th>Specifications</Th>
                                <Th>Qty</Th>
                                <Th>Cost (₹)</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, index) => (
                                <tr key={index}>
                                    <Td>{item.component}</Td>
                                    <Td>{item.specifications}</Td>
                                    <Td>{item.qty}</Td>
                                    <Td>{item.cost}</Td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <FirstSummarySection>
                        <SummaryItem>
                            <SummaryText>Total Cost (Before GST)</SummaryText>
                            <SummaryText>1,69,000 – 2,04,000</SummaryText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryText>GST @ 12%</SummaryText>
                            <SummaryText>Applied on total cost</SummaryText>
                            <SummaryText>20,280 – 24,480</SummaryText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryText>Total Cost (Incl. GST)</SummaryText>
                            <SummaryText>1,89,280 – 2,28,480</SummaryText>
                        </SummaryItem>
                    </FirstSummarySection>
                    <SummaryCard>
                        <p>Subsidy Details:</p>
                        <SummaryItem>
                            <SummaryText ><StyledIcon className="rupee" src={RupeeIcon.src} alt="rupeeIcon"/>Government Subsidy (~30%)</SummaryText>
                            <SummaryText>Applied on Total Cost</SummaryText>
                            <SummaryText>₹50,000 – ₹80,000</SummaryText>
                        </SummaryItem>
                    </SummaryCard>
                    <Line />
                    <FirstSummarySection>
                        <SummaryItem>
                            <SummaryText>Final Price (After Subsidy)</SummaryText>
                            <SummaryText>₹1,20,000 – ₹1,50,000</SummaryText>
                        </SummaryItem>
                    </FirstSummarySection>
                </TableWrapper>
                <SummaryItemButton className="buttons">
                    {/* <SureyButton>
                        <StyledIcon src={Upload.src} alt="uploadIcon" />Self Assisted Survey Video
                    </SureyButton> */}
                    <ProceedButton onClick={() => setBooksiteVisit(true)}>Book Your Site Visit</ProceedButton>
                </SummaryItemButton>
                <BookSiteVisitModal open={bookSiteVisitModal} onClose={handleCloseModal} />
            </Container>

        </>
    );
};

export default SolarCalculator;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 50px;
    font-family: ${(props) => props.theme.fontFamily};
    margin: auto;
`;

const Heading = styled.h2<{ $textSize: string }>`
    text-align: start;
    font-size: ${(props) => props.$textSize};
    font-weight: 600;
    margin-bottom: 20px;
    color: ${(props) => props.theme.buttons.secondaryBackground};
    &.main-header {
        text-align: center;
    }
`;

const Card = styled.div`
  background: ${(props) => props.theme.colors.secondaryBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  padding: 50px;
  margin-bottom: 20px;
  min-height: 200px;
  min-width:100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; 
  gap: 30px; 
  margin-bottom: 20px; 
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48%;
`;

const Icon = styled.img`
 width:65px;
height:100%;
  margin-right: 10px;
`;

const Sentence = styled.p`
  font-size: 14px;
  margin: 0;
  flex: 1;
  color:#444444;
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
  border-bottom:2px dashed ${(props) => props.theme.colors.lightBorder};
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

const FirstSummarySection = styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
  margin-top: 20px;
  padding:10px 120px;
  border-radius: 5px;
`;

const SummaryItem = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
&.buttons{
margin-top:38px;
margin:20px;
}
`;

const SummaryItemButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin : 1rem;
`

const SummaryText = styled.p`
  margin:0;
  padding:0;
  font-size:13px;
  font-weight:600;
  color:#464E5F;
`;
const SummaryCard = styled.div`
background-color:${(props) => props.theme.colors.secondaryBackground};
padding:10px 120px;
display:flex;
flex-direction:column;
gap:20px;
p{
margin:0;
padding:0;
font-weight:600;
font-size:14px;
}

`;
const Line = styled.div`
border-bottom:2px dashed ${(props) => props.theme.colors.lightBorder};
margin:20px;
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

// const SureyButton = styled.button`
//   display: flex;
//   gap:20px;
//   justify-content: center;
//   text-align: center;
//   background-color: ${(props) => props.theme.colors.primaryBackground};
//   color: ${(props) => props.theme.buttons.secondaryBackground};
//   padding: 10px 80px;
//   border-radius: 50px;
//   border: none;
//   flex-shrink: 0;
//   font-weight:600;
//   border:2px solid${(props) => props.theme.buttons.secondaryBackground};
// `;

const StyledIcon = styled.img`
width:65px;
height:65px;
&.rupee{
text-align:center;
margin-bottom:-8px;
margin-right:5px;
width:20px;
height:20px;
}
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const CalculatorBox = styled.div`
background-color:#F1F1F1;
border-radius:15px;
width:250px;
padding:10px 0px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border:2px solid${(props) => props.theme.buttons.secondaryBackground};
`;

const Value = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #328ebf;
  position: relative;
`;

const Label = styled.div`
  font-size: 14px;
  margin-top: 0px;
  font-weight:600;
`;

const AdjustInput = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;



const ArrowButton = styled.button`
&&{
  background: none;
  border: none;
  font-size: 18px;
  text-align:center;
  color: #7A7A7A;
  cursor: pointer;
  padding: 0 5px;
  font-weight: bold;
}
`;
const Box = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:10px;

`;

const TextContainer = styled.div`
display:flex;
flex-direction:column;
gap:10px;
height:100%;
width:100%;
margin-left:10px;
p {
font-size:12px;
padding:0;
margin:0;
}
`;

const HeadingText = styled.h2`
margin:0;
padding:0;
font-size:15px;
font-weight:600;
`;

