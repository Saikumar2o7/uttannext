"use client"
import styled from "styled-components";
import { useRouter } from "next/router";
import Success from "../../public/assets/success.png"
import { Modal } from "@mui/material";


interface SuccessModalProps {
    open: boolean;
    onClose: () => void
}

const SuccessModal: React.FC<SuccessModalProps> = ({ open, onClose }) => {
    const router = useRouter();

    const handleSubsidy = () => {
        router.push("/Subsidy")
    }

    return (
        <>
            <StyledModal open={open} onClose={onClose}>
                <Card>
                    <IconWrapper>
                        <StyledImage src={Success.src} alt="SuccessImg" />
                    </IconWrapper>
                    <Title>Order Placed Successfully!</Title>
                    <Message>Your Subsidy has Been Applied!</Message>
                    {/* <OrderID>Your Order ID <strong>#24465</strong> is confirmed</OrderID> */}
                    <Button onClick={handleSubsidy}>View Subsidy</Button>
                </Card>
            </StyledModal>
        </>

    );
};

export default SuccessModal;

const StyledModal = styled(Modal)`
&& {
display: flex;
justify-content: center;
font-family:${(props) => props.theme.fontFamily};
.modal-content {
background-color: ${(props) => props.theme.colors.primaryBackground};
border-radius: 8px;
padding: 10px 10px;
width: 80%;
max-width: 630px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
color: ${(props) => props.theme.colors.text}; 
}
MuiBackdrop-root {
// background-color: rgba(0, 0, 0, 0.5);
}
align-items: center;
}
`;
const Card = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
    background: white;
    padding:40px 80px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 500px;
    height:400px;
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e6f7ff;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto 20px;
`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #333;
`;

const Message = styled.p`
    font-size: 14px;
    color: ${(props)=>props.theme.buttons.primaryBackground};
    margin: 10px 0;
    font-weight:600;
    margin:0;
    padding:0;
`;

// const OrderID = styled.p`
//     font-size: 14px;
//     color: #000;
//     font-weight: 600;
// `;

const Button = styled.button`
    background: #1AAFD3;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    margin-top: 20px;
    width: 100%;
    &:hover {
        background: #0088cc;
    }
`;

const StyledImage = styled.img`
width:180px;
height:150px;
`