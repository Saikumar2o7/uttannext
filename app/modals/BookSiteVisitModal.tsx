"use client";

import { Close } from "@mui/icons-material";
import { IconButton, Modal } from "@mui/material";
import styled, { useTheme } from "styled-components";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import { useRouter } from "next/navigation"; 

interface TextProps {
    $textColor : string;
    $fontSize : string
}

interface BookSiteViewModalProps {
  open: boolean;
  onClose: () => void;
}

const BookSiteVisitModal: React.FC<BookSiteViewModalProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const router = useRouter(); 

  const [selectedSlot, setSelectedSlot] = useState("");

  const timeSlots = [
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "12:00 PM - 12:30 PM",
    "1:00 PM - 1:30 PM",
    "2:00 PM - 2:30 PM",
    "3:00 PM - 3:30 PM",
    "4:00 PM - 4:30 PM",
    "5:00 PM - 5:30 PM",
    "6:00 PM - 6:30 PM",
  ];

  const handleBook = () => {
    router.push('/Vendor'); 
  };

  return (
    <StyledModal open={open} onClose={onClose}>
      <div className="modal-content">
        <StyledCloseButton aria-label="close" onClick={onClose}>
          <StyledClose />
        </StyledCloseButton>
        <Body>
          <InputSection>
            <InputItem>
              <Text $fontSize="12px" $textColor={theme.colors.primaryText}>Address</Text>
              <StyledInput placeholder="Address" />
            </InputItem>
            <InputItem>
              <Text $fontSize="12px" $textColor={theme.colors.primaryText}>Pin Code</Text>
              <StyledInput placeholder="Pin Code" />
            </InputItem>
          </InputSection>
          <InputSection>
            <InputItem>
              <Text $fontSize="12px" $textColor={theme.colors.primaryText}>Date</Text>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StyledDatePicker
                  format="DD-MM-YYYY"
                  label="Pickup Date"
                />
              </LocalizationProvider>
            </InputItem>
          </InputSection>
          <Text className="start" $fontSize="12px" $textColor={theme.colors.primaryText}>Pick a Timeslot</Text>
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
          </TimeSlotContainer>
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

const StyledCloseButton = styled(IconButton)`
  && {
    left: 580px;
    font-size: 8px !important;
    display: flex;
    top: 5px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  && {
    width: 265px;
    height: 38px;
    border: 1px solid ${(props) => props.theme.colors.lightBorder};
    padding: 0px 30px;
    border-radius: 50px;
    background-color: ${(props) => props.theme.colors.secondaryBackground};
  }
`;

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const Text = styled.p<TextProps>`
  padding: 0;
  margin: 0;
  margin-left: 10px;
  margin-top: 15px;
  color: ${(props) => props.$textColor};
  font-size: ${(props) => props.$fontSize};

  &.start {
    margin-right: auto;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  && {
    .MuiOutlinedInput-root {
      background-color: ${(props) => props.theme.colors.secondaryBackground};
      width: 265px;
      height: 38px;
      padding: 0px 30px;
      border: 1px solid ${(props) => props.theme.colors.lightBorder};
      border-radius: 50px;
    }

    .MuiInputBase-root {
      height: 38px;
      width: 265px;
    }

    .MuiFormLabel-root {
      text-align: center;
      margin-top: -6px;
      font-size: 14px;
      margin-left: -10px;
      width: 100%;
    }
  }
`;

const TimeSlotContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightBorder};
`;

const TimeSlotButton = styled.button<{ selected: boolean }>`
  padding: 10px 15px;
  width: 165px;
  border: 1px solid ${(props) => props.theme.buttons.secondaryBackground};
  border-radius: 20px;
  background: ${(props) => (props.selected ? props.theme.buttons.primaryBackground : "transparent")};
  color: ${(props) => (props.selected ? props.theme.colors.secondaryText : props.theme.buttons.secondaryBackground)};
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;
  outline: none;

  &:hover {
    background: ${(props) => (props.selected ? "#1976d2" : "#e3f2fd")};
  }
`;

const BookButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  padding: 10px 20px;
  background: ${(props) => props.theme.buttons.secondaryBackground};
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 20px;

  &:hover {
    background: #1976d2;
  }
`;

