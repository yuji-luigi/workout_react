import { useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const SettingInputs = () => {
  const [sets, setSets] = useState("");
  const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleChange = (event) => {
    setSets(event.target.value);
  };
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <div className="">
          <InputLabel id="demo-simple-select-standard-label">sets</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={sets}
            onChange={handleChange}
            label="sets"
          >
            <MenuItem value="">
              <em>Sets</em>
            </MenuItem>
            {array10.map((key) => (
              <MenuItem value={key}>{key}</MenuItem>
            ))}
          </Select>
        </div>
        <InputLabel className="" id="demo-simple-select-standard-label">
          sets
        </InputLabel>
      </FormControl>
      <FormControl>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sets}
          onChange={handleChange}
          label="sets"
        >
          <MenuItem value="">
            <em>Sets</em>
          </MenuItem>
          {array10.map((key) => (
            <MenuItem value={key}>{key}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}></FormControl>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SettingInputs;
