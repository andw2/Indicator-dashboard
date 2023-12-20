import { Card, Stack, Typography } from "@mui/joy";


export default function PermanentIndicator({data, visibility}) {
  return (
    <>
      <Card sx={{ width:"300px" }}>
          <Stack direction="column">
            <Stack id="headerIndicator" direction="row" alignItems="center" justifyContent="space-between">
              <Typography sx={{fontWeight:600, fontFamily:"Inter, sans-serif", fontSize:"21px"}}>Perm. Indicator Title</Typography>
              <Typography sx={{fontFamily:"Inter, sans-serif", fontSize:"21px"}}>200</Typography>
            </Stack>
            <Card sx={{ width:"100%", height:150, boxSizing:"border-box" }}>
              <Typography sx={{textAlign:"center"}}>Graph/Visualization</Typography>
            </Card>
            <Typography level="body-sm" sx={{fontFamily:"Inter", textAlign:"center", marginTop:"8px"}}>Sort By: <strong>Ward</strong></Typography>
            <Stack direction="column">
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography level="body-md" sx={{fontFamily:"Inter", fontWeight:600 }}>Area 1</Typography>
                <Typography level="body-md" sx={{fontFamily:"Inter"}}>100</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography level="body-md" sx={{fontFamily:"Inter", fontWeight:600 }}>Area 2</Typography>
                <Typography level="body-md" sx={{fontFamily:"Inter"}}>100</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography level="body-md" sx={{fontFamily:"Inter", fontWeight:600 }}>Area 3</Typography>
                <Typography level="body-md" sx={{fontFamily:"Inter"}}>100</Typography>
              </Stack>
            </Stack>
          </Stack>
      </Card>
    </>
  );
}