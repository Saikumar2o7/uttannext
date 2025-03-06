'use client'; 

import styled from "styled-components";
import { forwardRef, useState } from "react";
import { useRouter } from "next/navigation"; 

const HomeThirdSection = forwardRef<HTMLDivElement>((_, ref) => {
  const [electricityBill, setElectricityBill] = useState<string>('');
  const router = useRouter(); 

  const consumerCategories = [
    {
      heading: 'Residential',
      description: 'Individual houses, apartment owners or housing societies.',
      selected: true
    },
    {
      heading: 'Commercial',
      description: 'Offices, commercial establishments, institutions, hotels, etc.',
      selected: false
    },
    {
      heading: 'Industrial',
      description: 'Small and large industries',
      selected: false
    }
  ];

  const [selectedCard, setSelectedCard] = useState<string>(consumerCategories[0].heading);

  const handleCalculationClick = () => {
    localStorage.setItem('ElectricityBill', electricityBill);
    router.push('/SolarCalculator');
  };

  return (
    <Container ref={ref}>
      <SectionHeading>Your Solar Calculator</SectionHeading>
      <Content>
        <CenterBox>
          <h2>Please Select Your Consumer Category Below:</h2>
          <Cards>
            {consumerCategories.map((item) => (
              <SelectionBox
                key={item.heading}
                selected={item.heading === selectedCard}
                onClick={() => setSelectedCard(item.heading)}
              >
                <h2>{item.heading}</h2>
                <p>{item.description}</p>
              </SelectionBox>
            ))}
          </Cards>
          <InputWrapper>
            <Icon src="/assets/Icons/Location.png" alt="Location" />
            <StyledInput placeholder="Your Location" />
            <DetectButton>Detect</DetectButton>
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setElectricityBill(e.target.value)}
              placeholder="Your Average monthly electricity bill"
            />
          </InputWrapper>
          <EstimationButton onClick={handleCalculationClick}>
            Get Quick Estimation
          </EstimationButton>
        </CenterBox>
      </Content>
    </Container>
  );
});

export default HomeThirdSection;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryBackground};
  padding: 50px 100px;
  height: auto;
`;

const SectionHeading = styled.h2`
  font-size: 22px;
  font-weight: 600;
  padding: 40px 20px;
  padding-top: 0;
  padding-bottom: 30px;
  margin: 0px;
  margin-bottom: 0px;
  text-align: start;
`;

const Content = styled.div`
  padding: 0px 150px;
  height: 100%;
`;

const CenterBox = styled.div`
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: start;
  border: 2px solid ${(props) => props.theme.colors.lightBorder};
  background-color: #fbfbfb;
  padding: 30px 80px;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: 600;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 40px 20px;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 100%;

  @media (max-width: 1024px) {
    justify-content: space-evenly;
    padding: 30px 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
  }
`;

const SelectionBox = styled.div<{ selected: boolean }>`
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 30px;
  border: 2px solid ${(props) => (props.selected ? props.theme.buttons.primaryBackground : '#fff')};
  background-color: ${(props) => (props.selected ? '#f9f9fb' : '#fff')};
  position: relative;
  transition: transform 0.3s ease;

  flex-basis: 30%;
  max-width: 320px;
  min-height: 100px;

  &:hover {
    transform: translateY(-10px);
  }

  h2 {
    margin: 0;
    padding: 0;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    position: absolute;
    top: 20px;
  }

  p {
    text-align: center;
    padding: 0;
    font-size: 14px;
    margin-top: 25px;
    flex-grow: 1;
  }

  @media (max-width: 1024px) {
    flex-basis: 30%;
    max-width: 300px;
    min-height: 230px;

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }
  }

  @media (max-width: 768px) {
    flex-basis: 80%;
    max-width: 300px;
    min-height: 230px;
    padding: 20px;

    h2 {
      font-size: 16px;
      top: 15px;
    }

    p {
      font-size: 12px;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #f4f6f8;
  border-radius: 50px;
  border: 1px solid #e5e5eb;
  padding: 10px 30px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
`;

const DetectButton = styled.button`
  && {
    margin: 0;
    padding: 0;
    font-size: 17px;
    font-weight: 600;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.buttons.secondaryBackground};
  }
`;

const EstimationButton = styled.button`
  && {
    width: 100%;
    height: 60px;
    padding: 0px 60px;
    background-color: ${(props) => props.theme.buttons.secondaryBackground};
    border: none;
    border-radius: 50px;
    font-size: 18px;
    color: ${(props) => props.theme.colors.secondaryText};
  }
`;