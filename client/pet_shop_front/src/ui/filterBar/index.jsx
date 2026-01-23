import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  Select,
  MenuItem,
} from '@mui/material'

function FilterBar() {
  return (
    <Box mb={5}>
      <Stack direction="row" alignItems="center" spacing={4}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="filterTitle">Price</Typography>
          <TextField
            sx={{
              maxWidth: 112,
            }}
            placeholder="from"
          />
          <TextField
            sx={{
              maxWidth: 112,
            }}
            placeholder="to"
          />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="filterTitle">Discounted items</Typography>
          <FormControlLabel control={<Checkbox />} />
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="filterTitle">Sorted</Typography>
          <Select size="small" defaultValue="default">
            <MenuItem value="default">by default</MenuItem>
            <MenuItem value="price_asc">price: high-low</MenuItem>
            <MenuItem value="price_desc">price: low-high</MenuItem>
          </Select>
        </Stack>
      </Stack>
    </Box>
  )
}
export default FilterBar
