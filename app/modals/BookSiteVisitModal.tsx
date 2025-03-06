"use client";

import { Close } from "@mui/icons-material";
import { IconButton, Modal } from "@mui/material";
import styled, { useTheme } from "styled-components";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import { useRouter } from "next/navigation";

interface BookSiteViewModalProps {
  open: boolean;
  onClose: () => void;
}

const BookSiteVisitModal: React.FC<BookSiteViewModalProps> = ({ open, onClose }) => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [address, setAddress] = useState("")
  const [showError, setShowError] = useState(false)
  const theme = useTheme();
  const router = useRouter();

  // const [selectedSlot, setSelectedSlot] = useState("");

  // const timeSlots = [
  //   "10:00 AM - 10:30 AM",
  //   "11:00 AM - 11:30 AM",
  //   "12:00 PM - 12:30 PM",
  //   "1:00 PM - 1:30 PM",
  //   "2:00 PM - 2:30 PM",
  //   "3:00 PM - 3:30 PM",
  //   "4:00 PM - 4:30 PM",
  //   "5:00 PM - 5:30 PM",
  //   "6:00 PM - 6:30 PM",
  // ];

  const handleBook = () => {
    if (!name || !phone || !address || !email || !zipCode) {
      setShowError(true)
    } else {
      setShowError(false)
      router.push('/Vendor');
    }
  };

  return (
    <StyledModal open={open} onClose={onClose}>
      <div className="modal-content">
        <Header>
          <HeaderContainer>
          <Title>Book Feasibility Test</Title>
          <StyledCloseButton aria-label="close" onClick={onClose}>
            <StyledClose />
          </StyledCloseButton>
          </HeaderContainer>
        </Header>
        <Body>
          <InputSection>
            <InputItem>
              <Label>
                <Span>Name</Span>*
              </Label>
              <StyledInput placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} $error={!name && showError} />
            </InputItem>
            <InputItem>
              <Label>
                <Span>Phone Number</Span>*
              </Label>
              <StyledInput placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} $error={!phone && showError} />
            </InputItem>
            <InputItem>
              <Label>
                <Span>Email</Span>*
              </Label>
              <StyledInput placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} $error={!email && showError} />
            </InputItem>
            <InputItem>
              <Label>
                <Span>PinCode</Span>*
              </Label>
              <StyledInput placeholder="PinCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} $error={!zipCode && showError} />
            </InputItem>
            <InputItem>
              <Label>
                <Span>Address</Span>*
              </Label>
              <StyledInput value={address} onChange={(e) => setAddress(e.target.value)} $error={!address && showError} />
            </InputItem>
            <InputItem>
              <Label>
                <Span>Notes</Span>
              </Label>
              <StyledTextArea placeholder="Add notes" />
            </InputItem>
          </InputSection>

          <InputSection>
            <InputItem>
              {/* <Text $fontSize="12px" $textColor={theme.colors.primaryText}>Date</Text>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StyledDatePicker
                  format="DD-MM-YYYY"
                  label="Pickup Date"
                />
              </LocalizationProvider> */}
            </InputItem>
          </InputSection>
          {/* <Text className="start" $fontSize="12px" $textColor={theme.colors.primaryText}>Pick a Timeslot</Text>
          <TimeSlotContainer>
            {timeSlots.map((slot) => (
              <TimeSlotButton
                key={slot}
                selected={selectedSlot === slot}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </TimeSlotButton>
            ))}
          </TimeSlotContainer> */}
          {showError &&
            <ErrorMessage>
              One or more field(s) are missing
            </ErrorMessage>
          }
          <BookButton onClick={handleBook}>Book</BookButton>
        </Body>
      </div>
    </StyledModal>
  );
};

export default BookSiteVisitModal;


const StyledModal = styled(Modal)`
  && {
    display: flex;
    justify-content: center;
    font-family: ${(props) => props.theme.fontFamily};
    align-items: center;

    .modal-content {
      background-color: ${(props) => props.theme.colors.primaryBackground};
      border-radius: 8px;
      padding: 10px 10px;
      width: 80%;
      max-width: 630px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 23px 50px;
  align-items:center;
  width: 100%;
  padding : 0 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 81%;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${(props)=> props.theme.colors.lightBorder}
`

const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primaryText};
`;

const StyledCloseButton = styled(IconButton)`
  && {
    padding: 0;
    margin: 0;
    font-size: 8px !important;
    display: flex;
    border: 1px solid ${(props) => props.theme.colors.lightBorder} !important;
    border-radius: 100%;
    width: 18px;
    height: 18px;
  }
`;

const StyledClose = styled(Close)`
  && {
    padding: 0;
    margin: 0;
    font-size: 10px !important;
  }
`;

const Body = styled.div`
  padding: 0px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputSection = styled.div`
  display: grid;
  margin-left: 80px;
  grid-template-columns: repeat(2, 220px);
  gap: 25px; 
  width: 100%;
  
  & > :nth-child(5),
  & > :nth-child(6) {
    grid-column: 1 / -1;
  }
`;

const ErrorMessage = styled.div`
  color : #CA1407;
  font-size: .8rem;
  margin-top: 1.2rem;
`


const StyledInput = styled.input<{ $error?: boolean }>`
  && {
    width: 100%;
    height: 38px;
    border: 1px solid ${(props) => props.$error ? "#CA1407" : props.theme.colors.lightBorder};
    padding: 0px 22px;
    font-size: 14px; 
    border-radius : 0.5rem;
    background-color: ${(props) => props.theme.colors.primaryBackground};
  }
`;

const StyledTextArea = styled.textarea`
  && {
    width: 100%;
    height: 100px;
    padding: 22px;
    border: 1px solid ${(props) => props.theme.colors.lightBorder};
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.colors.secondaryBackground};
    resize: none; 
    font-family: inherit;
    font-size: 14px;
    margin-bottom: 1rem;
  }
`;


const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  width: 100%; 
`;

const Label = styled.div`
  font-style : Poppins;
  display: flex;
  gap: 2px;
  color: #CA1407;
  font-size: 12px;
`;

const Span = styled.div`
  color: #22242F;
  font-weight : 550;
  text-size : 1rem
`


// const Text = styled.p`
//   font-style : poppins;
//   padding: 0;
//   margin: 0;
//   font-size: 12px;
//   margin-top: 15px;
//   font-weight : 600;
//   color: #22242F;
//   &.start {
//     margin-right: auto;
//   }
// `;

// const StyledDatePicker = styled(DatePicker)`
//   && {
//     .MuiOutlinedInput-root {
//       background-color: ${(props) => props.theme.colors.secondaryBackground};
//       width: 265px;
//       height: 38px;
//       padding: 0px 30px;
//       border: 1px solid ${(props) => props.theme.colors.lightBorder};
//       border-radius: 50px;
//     }

//     .MuiInputBase-root {
//       height: 38px;
//       width: 265px;
//     }

//     .MuiFormLabel-root {
//       text-align: center;
//       margin-top: -6px;
//       font-size: 14px;
//       margin-left: -10px;
//       width: 100%;
//     }
//   }
// `;

// const TimeSlotContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
//   margin-top: 20px;
//   margin-bottom: 20px;
//   padding-bottom: 20px;
//   border-bottom: 1px solid ${(props) => props.theme.colors.lightBorder};
// `;

// const TimeSlotButton = styled.button<{ selected: boolean }>`
//   padding: 10px 15px;
//   width: 165px;
//   border: 1px solid ${(props) => props.theme.buttons.secondaryBackground};
//   border-radius: 20px;
//   background: ${(props) => (props.selected ? props.theme.buttons.primaryBackground : "transparent")};
//   color: ${(props) => (props.selected ? props.theme.colors.secondaryText : props.theme.buttons.secondaryBackground)};
//   cursor: pointer;
//   font-size: 14px;
//   transition: 0.3s;
//   outline: none;

//   &:hover {
//     background: ${(props) => (props.selected ? "#1976d2" : "#e3f2fd")};
//   }
// `;

const BookButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  padding: 10px 20px;
  background: ${(props) => props.theme.buttons.secondaryBackground};
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom : 1rem;
  margin-top: .3rem;
  &:hover {
    background: #1976d2;
  }
`;

