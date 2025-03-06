"use client"
import styled, { useTheme } from "styled-components"
import Header from "../components/Header/Header";
import { useRouter } from "next/navigation";
import TopBar from "../stepper/topBar";
import { useEffect } from "react";
import Badge from "../../public/assets/Icons/Badge.png"

const Vendor = () => {
  const theme = useTheme()
  const router = useRouter()

  const navigateToQuotation = () => {
    router.push("/Quotation")
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const providers = [
    {
      name: "SunPeakSolutions",
      service: "Site Analysis, Material List, Design with Report",
      rating: 4.86,
      reviews: "16k reviews",
      details: [
        "Evaluating rooftop or ground conditions for optimal solar panel placement.",
        "current energy consumption assessment & potential savings estimation"
      ],
      price: "₹250"
    },
    {
      name: "SuryaShakti Solar",
      service: "Inspection and Material Report",
      rating: 4.86,
      reviews: "16k reviews",
      details: [
        "Expert site analysis",
        "RComprehensive Feasibility Study report"
      ],
      price: "₹200"
    },
    {
      name: "EcoRoof",
      service: "Survey, Material List and Design",
      rating: 4.86,
      reviews: "16k reviews",
      details: [
        "Assessing energy needs and recommending the best solar solution.",
        "End-to-end setup with long-term maintenance services."
      ],
      price: "₹220"
    }
  ];


  return (
    <>
      <Header />
      <Container>
        <TopBar currentStep={-1}></TopBar>
        <Heading>Thinking About Going Solar? Start with a Feasibility Study!</Heading>
        <DescriptionSection>
          <p>Before making the switch to solar, it’s essential to know if your rooftop is a perfect fit. During the study, our experts will assess your roof’s structural suitability, available sunlight exposure, and any possible shading obstructions. We’ll evaluate your current energy consumption, 
            estimate potential savings, and recommend an optimal solar system size tailored to your needs.
           <strong><br/> No guesswork, just facts. Book your feasibility study today and take the first step toward clean, cost-saving energy!</strong></p>
          {/* <p>The process includes an on-site inspection, a review of technical and financial feasibility, and a detailed report outlining expected energy output, installation costs, return on investment, and available incentives.</p> */}
          <p className="bold"></p>
        </DescriptionSection>
        {/* <Heading >Select one of our empanelled experts in your location </Heading> */}
       <HeaderSection>
       <h2>Select Your Surveyor</h2>
       <p>Choose from one of our empanelled experts from your location</p>
       </HeaderSection>
        {providers.map((provider, index) => (
          <Card key={index}>
            <StyledIconContainer>
              <StyledHeaderIcon src={Badge.src} alt="badgeIcon" />
            </StyledIconContainer>
            <Content>
              <ProviderName>
                {provider.name} - <ServiceDescription>{provider.service}</ServiceDescription>
              </ProviderName>
              <Rating>
                <StyledStarICon src={theme.icons.Star} />
                <span>{provider.rating}</span> ({provider.reviews})
              </Rating>
              <Details>
                {provider.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </Details>
              <ViewMore>View More</ViewMore>
            </Content>
            <PriceSection>
              <Price>{provider.price}</Price>
              <BookButton onClick={navigateToQuotation}>Book Now</BookButton>
            </PriceSection>
          </Card>
        ))}
      </Container>
    </>
  )
}

export default Vendor


const Container = styled.div`
display:flex;
flex-direction:column;

  margin: auto;
  padding: 40px 100px;
  font-family:${(props) => props.theme.fontFamily};
`;

const Heading = styled.h2`
  text-align: start;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 30px;
   color:${(props) => props.theme.buttons.secondaryBackground};

`;
const HeaderSection = styled.div`
display:flex;
flex-direction:column;
h2{
 text-align: start;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 0px;
   color:${(props) => props.theme.buttons.secondaryBackground};
}
p{
margin:0;
padding:0;
margin-bottom:20px;
}
`;
const Card = styled.div`
  background: ${(props) => props.theme.colors.primaryBackground};
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  flex-wrap: nowrap;
  min-height: 180px;
  border:1px solid${(props) => props.theme.colors.lightBorder};
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Content = styled.div`
  flex: 2;
  min-width: 60%;  
  max-width: 70%;  
  overflow: hidden; 
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
const Rating = styled.div`
display:flex;
justify-content:start;
align-items:center;
gap:5px;
font-size: 15px;
margin-bottom: 8px;
border-bottom:2px dashed ${(props) => props.theme.colors.lightBorder};
width:370px;
padding-bottom: 10px;
`;

const Details = styled.ul`
  font-size: 14px;
  color: #555;
  padding-left: 18px;
  margin-bottom: 8px;
`;

const ViewMore = styled.p`
  color: ${(props) => props.theme.colors.instructionText};
  font-weight: 600;
  cursor: pointer;
  margin:0;
  padding:0;
  font-size:14px;
  margin-left:5px;
  text-decoration:underline;
`;

const PriceSection = styled.div`
  flex: 1;
  min-width: 30%; 
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center; 
  word-wrap: break-word;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    min-width: 100%;
    margin-top: 15px;
  }
`;
const Price = styled.p`
  font-size: 22px;
  margin:14px;
  padding:0;
  font-weight: 600;
`;

const BookButton = styled.button`
  background: #1AAFD3;
  color: white;
  border: none;
  padding: 12px 35px;
  border-radius: 50px;
  font-size: 16px;
  font-weight:600;
  cursor: pointer;
  transition: 0.3s;
font
  &:hover {
    background: #1AAFD3;
  }
`;

const StyledStarICon = styled.img`
width:18px;
height:18px;
`;

const DescriptionSection = styled.div`
display:flex;
flex-direction:column;
gap:20px;
padding-bottom:0px;
p{
margin:0;
padding:0;
font-size:14px;
&.bold{
font-weight:600;
}
}

`;

const StyledIconContainer = styled.div`
margin-bottom:auto;
margin-right:18px;
`
const StyledHeaderIcon = styled.img`
width:44px;
height:52px;
`
