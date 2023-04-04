import { Box, ButtonBase, Grid } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

const TeamView = (props) => {
  return (
    // 날짜 글자 짤라서 정렬
    <>
      <Box
        sx={{
          height: "1080px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "url(imgs/BG2.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          marginBottom: "250px",
        }}
      >
        <h1 className="team-banner-title">
          저희 서비스를 이용하시는 모든 고객님의 실력이
          <br /> '우상향' 할 수 있도록 전직원이 최선을 다하겠습니다.
        </h1>
      </Box>

      <Grid container className="grid-list" justifyContent={"center"}>
        {props.list.map((list, i) => (
          <Grid
            container
            item
            key={i}
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={12}
            justifyContent={"center"}
            className="list-box"
          >
            <Grid item xs={1} sm={2} md={1} xl={5}>
              <h1 className="date">{list.date}</h1>
            </Grid>
            <Grid item xs={0} sm={1} md={2} lg={1} xl={1}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexFlow: "column",
                }}
              >
                <span className="line2"></span>
                <div className="out-one">
                  <span className="in-one"></span>
                </div>
                <span className="line"></span>
              </div>
            </Grid>
            <Grid item xs={12} sm={9} md={8} lg={8} xl={6}>
              <div
                className={props.position >= 50 ? "detail" : "detail-hidden"}
              >
                <div style={{ width: "68px", margin: "0 4px" }}>
                  <span>{list.date1}</span>
                  <br />
                  <span>{list.date2}</span>
                  <br />
                  <span>{list.date3}</span>
                  <br />
                  <span>{list.date4}</span>
                </div>
                <div>
                  <span>{list.text1}</span>
                  <br />
                  <span>{list.text2}</span>
                  <br />
                  <span>{list.text3}</span>
                  <br />
                  <span>{list.text4}</span>
                </div>
              </div>
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Box className="team-banner">
        저희는 여러분 한 분 한 분의 학습 목적에 부합하는 가장 이상적인 <br />
        수학 테스트를 제공하기 위해 최선을 다하겠습니다.
      </Box>
      <Grid container justifyContent={"center"} paddingBottom={"150px"}>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={10}
          xl={7.3}
          justifyContent={"space-between"}
        >
          <Grid item xs={12} xl={7.1}>
            <h1 style={{ fontSize: "30px", fontFamily: "Pretendard" }}>
              대표님이 직접 소개해주시는 리얼한 우로테스트
            </h1>
          </Grid>
          <Grid item xs={12} xl={7} mb={6}>
            <p style={{ fontFamily: "Pretendard" }}>STARTUP FOR STUDENTS</p>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={11}
          lg={10}
          xl={7.3}
          justifyContent={"space-between"}
        >
          <Grid item xs={11} md={5.3} lg={5} xl={5.1} ml={2}>
            <iframe
              width="100%"
              height="366px"
              src="https://www.youtube.com/embed/VAxUYZzhw88"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            xl={6}
            ml={2}
            sx={{
              display: "flex",
              flexFlow: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "98%",
                height: "70px",
                color: "white",
                alignItems: "center",
                position: "relative",
                marginBottom: "30px",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/imgs/right.png"}
                alt="img"
                width={"100%"}
                height={"70px"}
              />
              <div
                style={{
                  color: "white",
                  width: "100%",
                  textAlign: "center",
                  position: "absolute",
                  fontSize: "20px",
                }}
              >
                우로테스트는 어떤기업인가요?
              </div>
            </div>

            <div
              style={{
                display: "flex",
                width: "98%",
                height: "70px",
                color: "white",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/imgs/left.png"}
                alt="img"
                width={"100%"}
                height={"70px"}
              />
              <div
                style={{
                  color: "white",
                  width: "100%",
                  textAlign: "center",
                  position: "absolute",
                  fontSize: "20px",
                }}
              >
                우로테스트는 어떤 목표를 가졌나요?
              </div>
            </div>
            <ButtonBase
              sx={{
                width: "180px",
                backgroundColor: "#f05d38",
                color: "white",
                padding: "15px",
                fontSize: "16px",
                marginTop: "30px",
                borderRadius: "10px",
                fontWeight: "500",
              }}
              href="https://wooromath.com/"
              target="_blank"
            >
              우로매쓰 바로가기
              <EastIcon sx={{ marginLeft: "5px" }} />
            </ButtonBase>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        paddingBottom={"300px"}
      >
        <Grid container item xs={12} sm={12} md={12} lg={10} xl={7.5}>
          <Grid item xs={12}>
            <h1 className="partner">PARTNERS</h1>
            <p
              style={{
                fontWeight: "400",
                fontFamily: "Pretendard",
                marginLeft: "45px",
                marginBottom: "30px",
              }}
            >
              다양한 파트너들과 협력하여 변화를 만듭니다.
            </p>
          </Grid>
          {props.partner.map((list, i) => (
            <Grid item xs={6} sm={6} md={3} key={i}>
              <Box sx={{ textAlign: "center", height: "100%" }}>
                <img src={list.img} alt="" className="partner-img" />
                <p className="partner-title">{list.title}</p>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default TeamView;
