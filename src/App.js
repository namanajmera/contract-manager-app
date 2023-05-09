import React from "react";
import CustomAccordion from "./Accordion";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";

function App() {
  const [contractType, setContractType] = useState(null);
  const [du, setDU] = useState(null);
  const [subDU, setSubDU] = useState(null);
  const [location, setLocation] = useState(null);
  const [salesPerson, setSalesPerson] = useState(null);
  const [solutioningPerson, setSolutioningPerson] = useState(null);
  const [preSalesPerson, setPreSalesPerson] = useState(null);
  const [projectManager, setProjectManager] = useState(null);
  const [customerName, setCustomerName] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [contractEffectiveDate, setContractEffectiveDate] = useState(null);
  const [contractValidTill, setContractValidTill] = useState(null);  

  const handleContractTypeChange = (event, newValue) => {
    setContractType(newValue);
  };

  const handleDUChange = (event, newValue) => {
    setDU(newValue);
  };

  const handleSubDUChange = (event, newValue) => {
    setSubDU(newValue);
  };

  const handleLocationChange = (event, newValue) => {
    setLocation(newValue);
  };

  const handleSalesPersonChange = (event, newValue) => {
    setSalesPerson(newValue);
  };

  const handleSolutioningPersonChange = (event, newValue) => {
    setSolutioningPerson(newValue);
  };

  const handlePreSalesPersonChange = (event, newValue) => {
    setPreSalesPerson(newValue);
  };

  const handleProjectManagerChange = (event, newValue) => {
    setProjectManager(newValue);
  };

  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleCustomerEmailChange = (event) => {
    setCustomerEmail(event.target.value);
  };

  const handleCustomerPhoneChange = (event) => {
    setCustomerPhone(event.target.value);
  };

  const handleContractEffectiveDateChange = (date) => {
    setContractEffectiveDate(date);
  };

  const handleContractValidTillChange = (date) => {
    setContractValidTill(date);
  };

  const contractTypeOptions = [
    { label: "Type A" },
    { label: "Type B" },
    { label: "Type C" },
  ];

  const duOptions = [{ label: "DU A" }, { label: "DU B" }, { label: "DU C" }];

  const subDuOptions = [
    { label: "Sub DU A" },
    { label: "Sub DU B" },
    { label: "Sub DU C" },
  ];

  const locationOptions = [
    { label: "Location A" },
    { label: "Location B" },
    { label: "Location C" },
  ];

  const salesPersonOptions = [
    { label: "John Doe" },
    { label: "Jane Doe" },
    { label: "Mike Smith" },
  ];

  const solutioningPersonOptions = [
    { label: "John Smith" },
    { label: "Jane Smith" },
    { label: "Mike Johnson" },
  ];

  const preSalesPersonOptions = [
    { label: "John Johnson" },
    { label: "Jane Johnson" },
    { label: "Mike Davis" },
  ];

  const projectManagerOptions = [
    { label: "John Davis" },
    { label: "Jane Davis" },
    { label: "Mike Brown" },
  ];

  const customerNameOptions = [
    { label: "Customer A" },
    { label: "Customer B" },
    { label: "Customer C" },
  ];

  return (
    <div>
      <CustomAccordion title="Contract Details">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ flexBasis: "25%", paddingRight: "8px" }}>
            <TextField label="Contract ID" fullWidth />
          </div>
          <div style={{ flexBasis: "25%", paddingRight: "8px" }}>
            <TextField label="CRM ID" fullWidth />
          </div>
          <div style={{ flexBasis: "25%", paddingRight: "8px" }}>
            <Autocomplete
              options={contractTypeOptions}
              getOptionLabel={(option) => option.label}
              value={contractType}
              onChange={handleContractTypeChange}
              renderInput={(params) => (
                <TextField {...params} label="Contract Type" fullWidth />
              )}
            />
          </div>
          <div style={{ flexBasis: "25%" }}>
            <TextField label="Strategic DU" fullWidth />
          </div>
          <div style={{ flexBasis: "25%", paddingRight: "8px" }}>
            <Autocomplete
              options={duOptions}
              getOptionLabel={(option) => option.label}
              value={du}
              onChange={handleDUChange}
              renderInput={(params) => (
                <TextField {...params} label="DU" fullWidth />
              )}
            />
          </div>
          <div style={{ flexBasis: "25%", paddingRight: "8px" }}>
            <Autocomplete
              options={subDuOptions}
              getOptionLabel={(option) => option.label}
              value={subDU}
              onChange={handleSubDUChange}
              renderInput={(params) => (
                <TextField {...params} label="Sub DU" fullWidth />
              )}
            />
          </div>
          <div style={{ flexBasis: "25%" }}>
            <TextField label="Contract Name" fullWidth />
          </div>
          <div style={{ flexBasis: "25%", paddingRight: "8px" }}>
            <TextField label="Total Contract Value" fullWidth />
          </div>
          <div style={{ flexBasis: "25%", paddingRight: "8px" }}>
            <Autocomplete
              options={locationOptions}
              getOptionLabel={(option) => option.label}
              value={location}
              onChange={handleLocationChange}
              renderInput={(params) => (
                <TextField {...params} label="Location" fullWidth />
              )}
            />
          </div>
          <div style={{ flexBasis: "25%" }}>
            <TextField
              label="Contract Description"
              multiline
              rows={4}
              fullWidth
            />
          </div>
          <div style={{ flexBasis: "25%", paddingRight: "8px" }}>
            <Autocomplete
              options={salesPersonOptions}
              getOptionLabel={(option) => option.label}
              value={salesPerson}
              onChange={handleSalesPersonChange}
              renderInput={(params) => (
                <TextField {...params} label="Sales Person Name" fullWidth />
              )}
            />
          </div>
          <div style={{ flexBasis: "25%", paddingRight: "8px" }}>
            <Autocomplete
              options={solutioningPersonOptions}
              getOptionLabel={(option) => option.label}
              value={solutioningPerson}
              onChange={handleSolutioningPersonChange}
              renderInput={(params) => (
                <TextField {...params} label="Solutioning Person Name" fullWidth />
              )}
            />
          </div>
          <div style={{ flexBasis: "25%" }}>
            <Autocomplete
              options={projectManagerOptions}
              getOptionLabel={(option) => option.label}
              value={projectManager}
              onChange={handleProjectManagerChange}
              renderInput={(params) => (
                <TextField {...params} label="Project Manager Name" fullWidth />
              )}
            />
          </div>
          <div style={{ flexBasis: "25%", paddingRight: "8px" }}>
            <Autocomplete
              options={customerNameOptions}
              getOptionLabel={(option) => option.label}
              value={customerName}
              onChange={handleCustomerNameChange}
              renderInput={(params) => (
                <TextField {...params} label="Customer/Account/Vendor Name" fullWidth />
              )}
            />
          </div>
          <div style={{ flexBasis: "25%", paddingRight: "8px" }}>
            <TextField
              label="Customer/Account Email"
              fullWidth
              value={customerEmail}
              onChange={(event) => setCustomerEmail(event.target.value)}
            />
          </div>

          <div style={{ flexBasis: "25%", paddingRight: "8px" }}>
            <TextField
              label="Customer/Account Phone"
              fullWidth
              value={customerPhone}
              onChange={(event) => setCustomerPhone(event.target.value)}
            />
          </div>
        </div>
      </CustomAccordion>
      <CustomAccordion title="Contract Compliance"></CustomAccordion>
      <CustomAccordion title="Contract Collaborators"></CustomAccordion>
      <CustomAccordion title="Contract Reviewer"></CustomAccordion>
    </div>
  );
}

export default App;
