"use client"

import styled, { useTheme } from "styled-components";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Tick from '../assets/Icons/greenTick.png'
import { useRouter } from "next/navigation";
import TopBar from "../stepper/topBar";

interface HeadingProps {
    $textSize: string
}

interface TextProps {
    $textColor: string, $fontWeight: string, $fontSize: string
}

const Cart = () => {
    const theme = useTheme();
    const router = useRouter()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const navigateToPurchase = () => {
        router.push("/Purchase")
    }

    const products = [
        {
            category: "Solar Panels",
            items: [
                {
                    name: "Hypersol - Vikram Solar 540W Topcon",
                    price: "₹2,500",
                    specifications: [
                        { label: "Watt Peak (Wp)", value: "335W" },
                        { label: "Material", value: "Monocrystalline Silicon" },
                        { label: "Efficiency", value: "20.1%" }
                    ],
                    features: [
                        "Advanced PERC Technology for higher energy conversion",
                        "Anti-reflective glass to maximize sunlight absorption",
                        "25-year performance warranty with minimal degradation"
                    ]
                },
                {
                    name: "Luminous NXG 1800 Solar Hybrid Inverter",
                    price: "₹2,500",
                    specifications: [
                        { label: "Watt Peak (Wp)", value: "335W" },
                        { label: "Material", value: "Monocrystalline Silicon" },
                        { label: "Efficiency", value: "20.1%" }
                    ],
                    features: [
                        "Advanced PERC Technology for higher energy conversion",
                        "Anti-reflective glass to maximize sunlight absorption",
                        "25-year performance warranty with minimal degradation"
                    ]
                },
                {
                    name: "Waaree",
                    price: "₹18,000",
                    specifications: [
                        { label: "Watt Peak (Wp)", value: "330W" },
                        { label: "Material", value: "Polycrystalline Silicon" },
                        { label: "Efficiency", value: "17.5%" }
                    ],
                    features: [
                        "Affordable and budget-friendly option",
                        "Low-light performance for cloudy days",
                        "High mechanical strength for extreme weather durability"
                    ]
                },
                {
                    name: "Monofacial Paradea - Vikram Solar 540W Perc",
                    price: "₹2,500",
                    specifications: [
                        { label: "Watt Peak (Wp)", value: "335W" },
                        { label: "Material", value: "Monocrystalline Silicon" },
                        { label: "Efficiency", value: "20.1%" }
                    ],
                    features: [
                        "Advanced PERC Technology for higher energy conversion",
                        "Anti-reflective glass to maximize sunlight absorption",
                        "25-year performance warranty with minimal degradation"
                    ]
                },

            ]

        },
        {
            category: "Solar Inverters",
            items: [
                {
                    name: "Vikram Solar Eldora 335W Monocrystalline Panel",
                    price: "₹22,000",
                    specifications: [
                        { label: "Capacity", value: "1800VA" },
                        { label: "Type", value: "Hybrid" },
                        { label: "Efficiency", value: "92%" }
                    ],
                    features: [
                        "LED indicators for easy monitoring",
                        "Supports both solar & grid charging",
                    ]
                },
                {
                    name: "Microtek Solar PCU 3KW Off-Grid Inverter",
                    price: "₹2,500",
                    specifications: [
                        { label: "Capacity", value: "3KW" },
                        { label: "Type", value: "Off-Grid" },
                        { label: "Efficiency", value: "94%" }
                    ],
                    features: [
                        "Dual Charging mode, Solar + Battery",
                        "Auto-restart in case of power failure",
                    ]
                }
            ]
        },
        { category: "Mounting Structures", items: [] },
        { category: "Wiring & Connectors", items: [] },
        { category: "Protection Devices", items: [] }
    ];

    const [expanded, setExpanded] = useState<string | null>("");

    return (
        <>
            <Header />
            <Container>
                <TopBar currentStep={2}></TopBar>
                <Heading $textSize="22px">Select from our verified Solar Products</Heading>
                <Text $textColor={theme.colors.primaryText} $fontSize="15px" $fontWeight="600">
                    Quality, efficiency, and savings—customized for you!
                </Text>

                {products.map((section) => (
                    <Accordion key={section.category}>
                        <AccordionHeader onClick={() => setExpanded(expanded === section.category ? null : section.category)}>
                            {section.category}
                            <StyledExpandMoreIcon expanded={expanded === section.category} />
                        </AccordionHeader>

                        {expanded === section.category && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.10 }}
                            >
                                <>
                                    {section.items.length > 0 ? (
                                        section.items.map((product, index) => (
                                            <Card key={index}>
                                                <CardHeader>
                                                    <HeaderItem>
                                                        <ProductName>{product.name}</ProductName>
                                                        <StyledText>High-Efficiency Solar Panel for Maximum Power Output
                                                            <Rating>
                                                                <StyledStarICon src={theme.icons.Star} />
                                                                <span>4.5(16.k reviews)</span>
                                                            </Rating>
                                                        </StyledText>
                                                    </HeaderItem>
                                                    <HeaderItem className="last-section">
                                                        <Price>{product.price}</Price>
                                                        <SelectButton>Select</SelectButton>
                                                    </HeaderItem>
                                                </CardHeader>
                                                {/* <CardBody>
                                                    <Column>
                                                        <SectionTitle>Specifications</SectionTitle>
                                                        {product.specifications.map((spec, index) => (
                                                            <SpecItem key={index}>
                                                                <SpecLabel>{spec.label}:</SpecLabel>
                                                                <SpecValue>{spec.value}</SpecValue>
                                                            </SpecItem>
                                                        ))}
                                                    </Column>
                                                    <Column>
                                                        <SectionTitle>Features</SectionTitle>
                                                        {product.features.map((feature, index) => (
                                                            <FeatureItem key={index}><StyledTickImg src={Tick} /> {feature}</FeatureItem>
                                                        ))}
                                                    </Column>
                                                </CardBody> */}
                                            </Card>
                                        ))
                                    ) : (
                                        <EmptyMessage>No products available in this category.</EmptyMessage>
                                    )}
                                </>
                            </motion.div>
                        )}
                    </Accordion>
                ))}
                <SubmitButton onClick={navigateToPurchase}>Checkout</SubmitButton>
            </Container>
        </>
    );
};

export default Cart;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 100px;
    font-family: ${(props) => props.theme.fontFamily};
    margin: auto;
`;
const StyledText = styled.div`
margin:0;
padding:0;
display:flex;
justify-content:start;
align-items:center;
gap:10px;
border-bottom:2px dashed${(props) => props.theme.colors.lightBorder};

`
const Heading = styled.h2<HeadingProps>`
    text-align: start;
    font-size: ${(props) => props.$textSize};
    font-weight: 600;
    margin-bottom: 20px;
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
    margin-bottom:15px;
`;

const Accordion = styled.div`
    margin-top:10px;
    margin-bottom: 10px;
    background-color:${(props) => props.theme.colors.primaryBackground} !important;
    border-radius:10px;
    
`;

const AccordionHeader = styled.div`
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
box-shadow: 0px 2px 5px rgba(0.2, 0, 0.1, 0.2);
color:${(props) => props.theme.buttons.primaryBackground};
padding:20px 40px;
`;

const Card = styled.div`
    background: white;

    padding:15px 60px;
    border-radius: 8px;
    border: 1px solid${(props) => props.theme.colors.lightBorder};
    margin-top: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const HeaderItem = styled.div`
display:flex;
flex-direction:column;
gap:5px;
p{
padding:0;
margin:0;
font-size:14px;
padding:3px;
}
&.last-section{
align-items:center;
}
`;
const ProductName = styled.h3`
padding:0;
margin:0;
font-size: 17px;
font-weight: 600;
`;

const Price = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.buttons.primaryBackground};
`;

const SelectButton = styled.button`
    background: ${(props) => props.theme.buttons.secondaryBackground};
    color: white;
    font-weight:600;
    border: none;
    padding: 8px 35px;
    border-radius: 5px;
    cursor: pointer;
    border-radius:50px;
`;

// const CardBody = styled.div`
//     display: flex;
//     margin-top: 10px;
//     justify-content: space-between;
// `;

// const Column = styled.div`
//     flex: 1;
// `;

// const SectionTitle = styled.p`
// padding:0;
// margin:0;
// margin-top:10px;
// color:${(props) => props.theme.buttons.primaryBackground};
// font-weight: 600;
// margin-bottom: 5px;
// `;

// const SpecItem = styled.div`
//     display: flex;
//     gap: 20px;
// `;

// const SpecLabel = styled.span`
//     font-weight: 600;
//     font-size:15px;
//     margin-top:10px;
// `;

// const SpecValue = styled.span`
//     color:${(props) => props.theme.colors.primaryText};
//     margin-top:10px;
//     font-size:14px;
// `;

// const FeatureItem = styled.p`
//     font-size: 14px;
//     color: #555;
//     display:flex;
//     justify-content:start
//     gap:10px;
// `;

const EmptyMessage = styled.p`
    padding: 10px;
    text-align: center;
    color: #999;
`;


const StyledExpandMoreIcon = styled(ExpandMoreIcon).withConfig({shouldForwardProp : (prop) => prop !== "expanded"}) <{ expanded: boolean }>`
  && {
    width: 25px; 
    height: 25px;
    font-size: 24px; 
    border-radius: 50%;
    background-color: ${(props) => props.theme.buttons.secondaryBackground};
    color: ${(props) => props.theme.colors.secondaryText};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s ease-in-out; 
    transform: ${(props) => (props.expanded ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;
// const StyledTickImg = styled.img`
// width:18px;
// height:18px;
// margin-right:10px;
// `;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: ${(props) => props.theme.buttons.secondaryBackground};
  color: #fff;
  padding: 12px 60px;
  margin-top:10px;
  border-radius: 50px;
  border: none;
  margin-left:auto;
  flex-shrink: 0;
  font-weight:600;
`;

const Rating = styled.div`
display:flex;
justify-content:start;
align-items:center;
gap:5px;
font-size: 15px;
margin-bottom: -10px;
width:370px;
padding-bottom: 10px;
`;

const StyledStarICon = styled.img`
width:18px;
height:18px;
`;