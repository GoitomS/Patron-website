"use client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
const isValidPhoneNumber = (phone: string): boolean => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Basic rules for international phone numbers:
    // - Minimum 8 digits (some countries like Bhutan)
    // - Maximum 15 digits (ITU-T recommendation)
    // - Can start with + or country code
    const phoneRegex = /^(\+?\d{1,4})?[\s.-]?\(?\d{1,}\)?[\s.-]?\d{1,}[\s.-]?\d{1,}$/;
    
    return phoneRegex.test(phone) && cleanPhone.length >= 8 && cleanPhone.length <= 15;
  }
  
const isValidCompanyEmail = (email: string): boolean => {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // List of common free email domains to reject
  const freeEmailDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "aol.com",
    "icloud.com",
    "mail.com",
    "protonmail.com",
    "zoho.com",
  ];

  // Check basic email format
  if (!emailRegex.test(email)) {
    return false;
  }

  // Extract domain from email
  const domain = email.toLowerCase().split("@")[1];

  // Return true if domain is not in the free email providers list
  return !freeEmailDomains.includes(domain);
};
interface RequestDemoModalProps {
  open: boolean;
  handleClose: () => void;
}
const RequestDemoModal = ({ open, handleClose }: RequestDemoModalProps) => {
  const [requestForm, setRequestForm] = React.useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    sector: "",
    country: "",
    companySize: "",
  });
  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [phoneError, setPhoneError] = React.useState<boolean>(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    setRequestForm({...requestForm, phone: phone});
    setPhoneError(!isValidPhoneNumber(phone));
  }  
  const handleEmailChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setRequestForm({ ...requestForm, email: email });
    setEmailError(!isValidCompanyEmail(email));
  };
  const handleSubmit = () => {
    console.log(requestForm);
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Request Demo
      </DialogTitle>
      <DialogContent>
        <Grid2 container spacing={2} px={2}>
          <Grid2 size={{ xs: 6 }} mt={2}>
            <FormControl fullWidth>
              <TextField
                size="small"
                id="full-name"
                label="Full Name *"
                variant="outlined"
                onChange={(e) =>
                  setRequestForm({ ...requestForm, fullName: e.target.value })
                }
              />
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 6 }} mt={2}>
            <FormControl fullWidth>
              <TextField
                size="small"
                id="email"
                label="Work Email *"
                variant="outlined"
                error={emailError}
                helperText={emailError ? "Please use your company email" : ""}
                onChange={handleEmailChange}
              />
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 6 }} mt={2}>
            <FormControl fullWidth>
            <TextField
  size="small"
  id="phone-number"
  label="Phone No. *"
  variant="outlined"
  error={phoneError}
  helperText={phoneError ? "Please enter a valid phone number" : ""}
  onChange={handlePhoneChange}
/>

            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 6 }} mt={2}>
            <FormControl fullWidth>
              <TextField
                size="small"
                id="companyName"
                label="Company Name *"
                variant="outlined"
                onChange={(e) =>
                  setRequestForm({ ...requestForm, company: e.target.value })
                }
              />
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 6 }} mt={2}>
            <FormControl fullWidth>
              <TextField
                size="small"
                id="industry-sector"
                label="Industry/Sector"
                variant="outlined"
                onChange={(e) =>
                  setRequestForm({ ...requestForm, sector: e.target.value })
                }
              />
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 6 }} mt={2}>
            <FormControl fullWidth>
              <TextField
                size="small"
                id="country"
                label="Country *"
                variant="outlined"
                onChange={(e) =>
                  setRequestForm({ ...requestForm, country: e.target.value })
                }
              />
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12 }} mt={2}>
            <FormControl fullWidth>
              <InputLabel id="company-size">Company Size</InputLabel>
              <Select
                size="small"
                labelId="company-size"
                value={requestForm.companySize}
                id="companySize"
                label="Company Size"
                onChange={(e) =>
                  setRequestForm({
                    ...requestForm,
                    companySize: e.target.value,
                  })
                }
              >
                <MenuItem value={"1-10"}>1-10 employees</MenuItem>
                <MenuItem value={"11-50"}>11-50 employees</MenuItem>
                <MenuItem value={"51-200"}>51-200 employees</MenuItem>
                <MenuItem value={"201+"}>201+ employees</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
        </Grid2>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={handleClose}
          sx={{
            textTransform: "none",
            borderRadius: "5px",
            backgroundColor: "",
            color: "#081334",
            borderColor: "#081334",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
              backgroundColor: "#CCD5F4",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          sx={{
            textTransform: "none",
            borderRadius: "5px",
            backgroundColor: "#081334",
            color: "white",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
              backgroundColor: "#132D7D",
            },
            "&:disabled": {
              backgroundColor: "#D9D9D9",
              color: "#999999",
            },
          }}
          disabled={
            !requestForm.fullName ||
            !requestForm.email ||
            !requestForm.company ||
            !requestForm.phone ||
            !requestForm.country ||
            !requestForm.companySize ||
            emailError || phoneError
          }
        >
          Get a Demo
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RequestDemoModal;
