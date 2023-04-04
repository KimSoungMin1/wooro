import {
  Box,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ContactView = (props) => {
  return (
    <>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={10}
          xl={12}
          justifyContent={"center"}
        >
          <Grid item xs={8.3} md={8.5} xl={6.3} mt={16} mb={4}>
            <h1>자주 묻는 질문 </h1>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            xl={9}
            mb={30}
            sx={{
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
            }}
          >
            {props.questionList.map((data, i) => (
              <Accordion className="qa-list" key={i}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ display: "flex" }}>
                    <span>Q.</span>
                    <span style={{ fontWeight: "700", margin: "0 5px " }}>
                      {data.title}
                    </span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ fontWeight: "500", width: "90%" }}>
                    {data.text}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          padding: "150px 0",
          backgroundColor: "#F05D38",
          textAlign: "center",
        }}
      >
        <h2 className="contact-banner">
          우로테스트는 모든 문의와
          <br />
          파트너십을 환영합니다.
        </h2>
      </Box>
      <Grid container justifyContent={"center"}>
        <Grid
          container
          item
          xs={11}
          sm={10}
          md={10}
          lg={10}
          xl={6}
          p={3}
          margin={"272px 0 28px 0"}
          backgroundColor={"#ECECEC"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item xs={12} sm={4} md={5} lg={6} xl={5}>
            <h2 className="contact-title">
              우로매쓰 홈페이지에 광고를 넣고 싶어요.
            </h2>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid
          container
          item
          xs={11}
          sm={10}
          md={10}
          lg={10}
          xl={6}
          p={3}
          margin={"28px 0"}
          backgroundColor={"#ECECEC"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item xs={12} sm={4} md={5} lg={6} xl={5}>
            <h2 className="contact-title">
              우로테스트와 MOU 협약을 맺고 싶어요.
            </h2>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid
          container
          item
          xs={11}
          sm={10}
          md={10}
          lg={10}
          xl={6}
          p={3}
          margin={"28px 0 60px 0"}
          backgroundColor={"#ECECEC"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item xs={12} sm={4} md={5} lg={6} xl={5}>
            <h2 className="contact-title">
              우로테스트에 관한 기사를 쓰고 싶어요.
            </h2>
          </Grid>
        </Grid>
      </Grid>

      <h1 style={{ textAlign: "center", fontSize: "40px" }}>위 상담 문의</h1>

      <Grid container justifyContent={"center"} margin={"60px 0 120px 0"}>
        <Grid container item xs={11} sm={10} md={10} lg={10} xl={6}>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className="contact">
            <img
              src={process.env.PUBLIC_URL + "imgs/Subtract.png"}
              alt=""
              width={"125px"}
              height={"125px"}
            />
            <p className="contact-name">방문상담</p>
            <p style={{ fontWeight: "500" }}>
              경상북도 포항시 남구 청암로87, 체인지업그라운드 537
            </p>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className="contact">
            <img
              src={process.env.PUBLIC_URL + "imgs/Vector 189.png"}
              alt=""
              width={"125px"}
              height={"125px"}
            />
            <p className="contact-name">유선 상담</p>
            <p style={{ fontWeight: "500" }}>Tel:054-277-0724</p>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className="contact">
            <img
              src={process.env.PUBLIC_URL + "imgs/Message.png"}
              alt=""
              width={"125px"}
              height={"125px"}
            />
            <p className="contact-name">이메일</p>
            <p style={{ fontWeight: "500" }}>info@woorotest.com</p>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactView;
