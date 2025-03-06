import { Box, Step, StepConnector, Stepper } from "@mui/material";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/navigation";

interface CustomStepIconProps {
  completed?: boolean;
  stepSize?: string;
}

interface StepType {
  label: string;
  value: number;
  stepSize?: string;
  url?: string;
}

interface StepperProps {
  steps: StepType[];
  activeStep?: number;
}

const StepperComponent = ({ steps, activeStep }: StepperProps) => {
  const router = useRouter();

  const CustomStepIcon = ({ completed, stepSize }: CustomStepIconProps) => {
    const size = stepSize || "large";
    return (
      <StyledStepIcon $completed={completed} $stepSize={size}>
        <CheckIcon className="check-icon" />
      </StyledStepIcon>
    );
  };

  return (
    <StyledBox>
      <StyledStepper
        activeStep={activeStep}
        alternativeLabel
        connector={<StyledStepConnector />}
      >
        {steps.map((step: StepType, index: number) => (
          <StyledStep key={index}>
            <StepContent
              onClick={() => {
                if (step.url) router.push(step.url);
              }}
            >
              <CustomStepIcon completed={index <= (activeStep || 0)} stepSize={step.stepSize} />
              <Label>{step.label}</Label>
            </StepContent>
          </StyledStep>
        ))}
      </StyledStepper>
    </StyledBox>
  );
};

export default StepperComponent;

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  background-color: #f0f0f0;
  padding: 40px 70px;
  border-radius: 5px;
  margin: 0;
  height: 75px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledStepper = styled(Stepper)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledStep = styled(Step)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Label = styled.span`
  margin-top: 2px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme?.colors?.text};
`;

const StyledStepIcon = styled.div<{ $completed?: boolean; $stepSize?: string }>`
  background-color: ${({ $completed }) => ($completed ? "#328EBF" : "#CCCCCC")};
  color: white;
  border-radius: 50%;
  width: ${({ $stepSize }) => ($stepSize === "large" ? "26px" : "19px")};
  height: ${({ $stepSize }) => ($stepSize === "large" ? "26px" : "19px")};
  border: ${({ $completed, theme }) =>
    $completed
      ? `3px solid ${theme.colors.background}`
      : `3px solid ${theme.colors.lightBorder}`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $stepSize }) => ($stepSize === "large" ? "16px" : "12px")};
  z-index: 3;

  .check-icon {
    font-weight: 500;
    display: ${({ $completed, $stepSize }) =>
      $completed && $stepSize === "large" ? "block" : "none"};
    color: white;
    font-size: ${({ $stepSize }) => ($stepSize === "large" ? "16px" : "12px")};
  }
`;

const StyledStepConnector = styled(StepConnector)(({ theme }) => ({
  [`& .MuiStepConnector-line`]: {
    borderWidth: "2px",
    zIndex: 0,
    marginTop: "3px",
  },
  [`&.Mui-active .MuiStepConnector-line`]: {
    borderColor: theme.buttons.primaryBackground,
  },
  [`&.Mui-completed .MuiStepConnector-line`]: {
    borderColor: "#328EBF",
  },
}));