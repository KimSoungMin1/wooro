import { Link, Grid } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

const ServiceView = (props) => {
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
          xl={10}
          justifyContent={"center"}
        >
          <Grid item xs={8.3} md={8.5} xl={7.5} mt={16}>
            <h1 style={{ fontSize: "45px" }}>학생</h1>
          </Grid>
          <Grid item xs={8.3} md={8.5} lg={7} xl={5.8} mt={2} mb={4}>
            <p className="service-text">
              문제를 풀 때,답 체크만 하는 것이 아닌 선생님이 풀이 과정도 확인할
              수 있도록 화면 위 메모장을 이용 할 수 있습니다.
              <b>
                <br />
                "휴대폰이나 태블릿/PC로 언제 어디서든 간편하게 숙제를 할 수
                있습니다!"
              </b>
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={10}
          xl={10}
          justifyContent={"center"}
        >
          <Grid item xs={8.3} md={8.5} xl={7.5} mt={16}>
            <h1 style={{ fontSize: "45px" }}>선생님</h1>
          </Grid>
          <Grid item xs={8.3} md={8.5} lg={7} xl={5.8} mt={2} mb={4}>
            <p className="service-text">
              소단원 기재 후 난이도 정하기,문제 수 정하기 숙제 기한 정하기,전달
              사항적고 완료하기 <br />
              <b>"간편하게 10초면 숙제 내기가 가능합니다!"</b>
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={10}
          xl={10}
          justifyContent={"center"}
        >
          <Grid item xs={8.3} md={8.5} xl={7.5} mt={16}>
            <h1 style={{ fontSize: "45px" }}>학부모</h1>
          </Grid>
          <Grid item xs={8.3} md={8.5} lg={7} xl={5.8} mt={2} mb={4}>
            <p className="service-text">
              자녀에게 더 이상 말로 스트레스를 주지 않으셔도 됩니다 실시간으로
              숙제 완료 여부와 학습 활동을 확인 할 수 있습니다.
              <br />
              <b>
                "학부모님은 자녀의 성적, 진도, 숙제 관리 과정을 실시간으로
                모니터링이 가능합니다!"
              </b>
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent={"center"} padding={"350px 0"}>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          justifyContent={"space-between"}
        >
          <Grid item xs={12} md={12} xl={12} mt={16} textAlign={"center"}>
            <h1 className="fee-title">
              학생수에 따른 차등 요금제로 업그레이드
            </h1>
          </Grid>
          <Grid item xs={12} md={12} xl={12} mt={2} textAlign={"center"}>
            <p className="fee-text">
              학생수 15인 미만은 무료로 서비스를 제공합니다.
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={11.8}
          md={11.5}
          lg={11.8}
          xl={10}
          className="fee-box"
        >
          {props.fee.map((list, i) => (
            <Grid
              item
              xs={10}
              sm={5.8}
              md={5.8}
              lg={2.8}
              xl={2.8}
              mt={16}
              className="fee"
              key={i}
            >
              <div>
                <h1>{list.title}</h1>
                <h2>{list.subTitle}</h2>
                <p>{list.condition}</p>
                <ul>
                  <li className="fee-list">
                    <span>{list.icon1}</span>
                    {list.list1}
                  </li>
                  <li className="fee-list">
                    <span>{list.icon2}</span>
                    {list.list2}
                  </li>
                  <li className="fee-list">
                    <span>{list.icon3}</span>
                    {list.list3}
                  </li>
                  <li className="fee-list">
                    <span>{list.icon4}</span>
                    {list.list4}
                  </li>
                  <li className="fee-list">
                    <span>{list.icon5}</span>
                    {list.list5}
                  </li>
                </ul>

                <Link href="https://wooromath.com/" target="_blank">
                  {list.button}
                  <EastIcon sx={{ marginLeft: "5px" }} />
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceView;
