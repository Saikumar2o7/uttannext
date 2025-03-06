import StepperComponent from "./stepper";

interface TopBarProps {
    currentStep: number;
  }
  

const TopBar = ({currentStep}:TopBarProps)=>{
  const steps = [
    { label: 'Book Feasibility Test', value: 1, stepSize: "large",url:"/Vendor" },
    { label: 'Apply for Permit', value: 2, stepSize: "large",url:"/ApplyForMeter" },
    { label: 'Purchase and Finance', value: 3, stepSize: "large",url:"/Cart" },
    { label: 'Installation and Subsidy', value: 4, stepSize: "large",url:"/Subsidy" },
  ];
    return (
        <StepperComponent steps={steps} activeStep={currentStep}/>
    )
}


export default TopBar