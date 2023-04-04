import { Box, Button, Grid, Link } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";

const MainView = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          height: "1080px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexFlow: "column",
        }}
      >
        <h1 className="bg-title">
          5 문제로 정확하게
          <br />
          실시간 학습능력 진단 서비스
        </h1>
        <Link
          className="button-wooro"
          href="https://wooromath.com/"
          target="_blank"
        >
          <span>진단하기</span>
          <EastIcon />
        </Link>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "125px",
          }}
        >
          <Button onClick={() => navigate("/page")}>
            <img
              src={process.env.PUBLIC_URL + "/imgs/appstore.png"}
              alt="img"
              width={"90%"}
            />
          </Button>
          <Button onClick={() => navigate("/page")}>
            <img
              src={process.env.PUBLIC_URL + "/imgs/googleplay.png"}
              alt="img"
              width={"90%"}
            />
          </Button>
          {/* <Link href="https://wooromath.com/" target="_blank">
            <img src="/imgs/appstore.png" alt="img" width={"90%"} />
          </Link>
          <Link href="https://wooromath.com/" target="_blank">
            <img src="/imgs/googleplay.png" alt="img" width={"90%"} />
          </Link> */}
        </Box>
      </Box>
      <Box className="content">
        <p>
          학생들에게 매번 숙제를 출제하고 채점하는데 드는 시간을 줄이고 싶다.
          <br />
          수학 성적이 잘 오르지 않고, 다양한 문제를 풀고 복습하고 싶다.
          <br /> 자녀의 진도나 성적 현황을 실시간으로 보고 싶다. <br /> 학생들을
          클래스로 더 효율적으로 관리하고 싶다.
        </p>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent={"center"}>
          <Grid
            container
            item
            xs={12} //모바일
            sm={12} //테블릿 세로
            md={12} //테블릿 가로
            lg={10} // 노트북
            xl={6} //32인치 1920px 이상
            //  xl={6}=>전체 12칸 기준 반을 컨테이너롤 잡는다
            className="grid_box"
          >
            <Grid item xs={12} sm={12} md={6} mt={14}>
              <h1 className="main-title">학생 · 서비스</h1>
              <h1 className="sub-title">한 눈에 보이는 내 실력</h1>
              <p className="sub-text">
                AI기반 알고리즘을 활용해 <br />
                내신·수능성적을 예측해 드립니다.
              </p>
            </Grid>

            <Grid item xs={12} sm={6} md={6} mb={22}>
              <Box color="info.contrastText">
                <img
                  src={process.env.PUBLIC_URL + "/imgs/main1.png"}
                  alt="img"
                  width={"100%"}
                  className={props.position >= 1000 ? "main-img" : "default"}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent={"center"}>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={10}
            xl={6}
            className="grid_box"
            direction="row-reverse"
            justifyContent={"space-between"}
          >
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} mt={14}>
              <h1 className="main-title">선생님 · 서비스</h1>
              <h1 className="sub-title">선생님 워라벨은 </h1>
              <p className="sub-text">
                문제은행 API를 통해 단원만 선택시 <br />
                자동으로 숙제 출제가 가능합니다.
              </p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} mb={22}>
              <Box color="info.contrastText">
                <img
                  src={process.env.PUBLIC_URL + "/imgs/main3.png"}
                  alt="img"
                  width={"100%"}
                  className={props.position >= 1900 ? "main-img2" : "default2"}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent={"center"}>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={10}
            xl={6}
            className="grid_box"
          >
            <Grid item xs={12} sm={12} md={6} mt={14}>
              <h1 className="main-title">학부모 · 서비스</h1>
              <h1 className="sub-title">우리 아이 실력은</h1>
              <p className="sub-text">
                학생의 숙제이력, 맞추고 틀린 문제에 대한
                <br /> 통계를 확인할 수 있습니다.
              </p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} mb={32}>
              <Box color="info.contrastText">
                <img
                  src={process.env.PUBLIC_URL + "/imgs/main2.png"}
                  alt="img"
                  width={"100%"}
                  className={props.position >= 2900 ? "main-img" : "default"}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent={"center"}>
          <Grid
            container
            item
            xs={10}
            sm={10}
            md={12}
            lg={10}
            xl={6}
            className="grid_box"
            justifyContent={"space-between"}
          >
            <Grid item xs={10} sm={8} md={5} mb={12}>
              <Box color="info.contrastText">
                <img
                  src={process.env.PUBLIC_URL + "/imgs/선생님2 1.png"}
                  alt="img"
                  width={"100%"}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} mb={32}>
              <Box pl={4}>
                <h1
                  style={{
                    color: "#F05D38",
                    fontSize: "60px",
                    fontFamily: "Pretendard",
                  }}
                >
                  우로 매쓰
                </h1>
                <div
                  style={{
                    width: "100%",
                    borderBottom: "2px solid #F05D38",
                    marginTop: "20px ",
                  }}
                ></div>
                <h2 style={{ margin: "30px 0", fontFamily: "Pretendard" }}>
                  나는 학습진단을 할테니, 너는 5문제만 풀거라!
                </h2>
                <ul>
                  <li className="wooro-list">
                    <h4
                      style={{
                        marginLeft: "5px",
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "Pretendard",
                      }}
                    >
                      <CheckIcon className="icon" />
                      10,000문제 제공
                    </h4>
                    <p style={{ marginLeft: "35px", fontFamily: "Pretendard" }}>
                      우로매쓰에서는 고등학교 수학 교육과정의 21개 단원, 49개
                      섹션에 대한 <br />
                      수학 10,000문항을 취향대로 풀어보실 수 있습니다.
                    </p>
                  </li>
                  <li className="wooro-list">
                    <h4
                      style={{
                        marginLeft: "5px",
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "Pretendard",
                      }}
                    >
                      <CheckIcon className="icon" />
                      1전국단위 및 권역별 상위도 추정 결과 제공
                    </h4>
                    <p style={{ marginLeft: "35px", fontFamily: "Pretendard" }}>
                      우로매쓰에서 수학 문제를 풀고 있는 학생은 본인의 전국 및
                      권역별 상위도를 <br />
                      추정한 결과를 제공받으실 수 있습니다.
                    </p>
                  </li>
                  <li className="wooro-list">
                    <h4
                      style={{
                        marginLeft: "5px",
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "Pretendard",
                      }}
                    >
                      <CheckIcon className="icon" />
                      맞춤형 학습 제공
                    </h4>
                    <p style={{ marginLeft: "35px", fontFamily: "Pretendard" }}>
                      학생 개인의 문제 풀이 정보를 활용하여 부족한 영역을
                      <br />
                      진단하고 맞춤형 학습을 제공합니다.
                    </p>
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={10}
            xl={6}
            className="grid_box"
          >
            <Grid item xs={12} sm={12} md={5}>
              <Box>
                <h2 className="app-title">
                  언제 어디서든 우로매쓰로 문제 풀기 <br />
                  우로매쓰 App 출시
                </h2>
              </Box>
              <Box mt={4}>
                <img src="/imgs/Group 82.png" alt="img" className="app-logo" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={7} mb={42}>
              <Box
                color="info.contrastText"
                display={"flex"}
                justifyContent={"space-between"}
              >
                <img
                  src={process.env.PUBLIC_URL + "/imgs/iPhone 15.png"}
                  alt="img"
                  width={"30%"}
                  className={
                    props.position >= 4880 ? "iPhone15" : "default-iPhone"
                  }
                />
                <img
                  src={process.env.PUBLIC_URL + "/imgs/iPhone 16.png"}
                  alt="img"
                  width={"30%"}
                  className={
                    props.position >= 4880 ? "iPhone16" : "default-iPhone"
                  }
                />
                <img
                  src={process.env.PUBLIC_URL + "/imgs/iPhone 17.png"}
                  alt="img"
                  width={"30%"}
                  className={
                    props.position >= 4880 ? "iPhone17" : "default-iPhone"
                  }
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MainView;
