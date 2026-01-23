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
import boxNormal from '../../assets/check box=normal.svg'
import boxActive from '../../assets/check box=active.svg'
import { styled } from '@mui/material/styles'

const FilterTextField = styled(TextField)(({ theme }) => ({
  width: 90,
  [theme.breakpoints.up('sm')]: {
    width: 100,
  },
  [theme.breakpoints.up('md')]: {
    width: 112,
  },
  '& .MuiInputBase-root': {
    height: 36,
  },
  '& input': {
    padding: '0 12px',
  },
}))

function FilterBar() {
  return (
    <Box mb={5}>
      <Stack direction="row" alignItems="center" spacing={4} flexWrap="wrap">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="filterTitle">Price</Typography>
          <FilterTextField placeholder="from" />
          <FilterTextField placeholder="to" />
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="filterTitle">Discounted items</Typography>
          <FormControlLabel
            control={
              <Checkbox
                icon={<img src={boxNormal} width={36} height={36} />}
                checkedIcon={<img src={boxActive} width={36} height={36} />}
              />
            }
          />
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="filterTitle">Sorted</Typography>
          <Select
            size="small"
            sx={{
              height: 36,
              minWidth: 200,
              fontWeight: 500,
            }}
            defaultValue="default"
          >
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
