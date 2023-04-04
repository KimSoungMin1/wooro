import React from "react";
import { Box, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      borderTop={"1px solid"}
      justifyContent={"center"}
      backgroundColor={"#F05D38"}
      color={"white"}
      padding={"40px 0"}
    >
      <Grid container item xs={10} sm={10} md={8} lg={8} xl={6}>
        <Grid item xs={12} sm={12} md={11} lg={8} xl={7} mt={6} mb={6}>
          <Box className="footer-box">
            <b>{"(주)"}우로테스트 </b>
            <br />
            경상북도 포항시 남구 청암로87, 체인지업그라운드 537
            <br /> 사업자등록번호: 493-86-02261
            <br />
            통신판매업신고번호:제 2023-경북포항-0036
            <br /> 문의사항 : info@woorotest.com | 대표 번호 : 054-277-0724
            <br />
            대표자 : 김남걸 | 이메일 : hijeff@woorotest.com | 전화번호 :
            010-5932-6024
            <br />
            COPYRIGHT © WOOROTEST co. Ltd. ALL RIGHTS RESERVED
          </Box>
        </Grid>
        <Grid item xs={10} sm={6} md={5} lg={4} xl={3.8} mb={8}>
          <ul className="footer-icon">
            <li>
              <Link href="https://www.instagram.com/woorotest/" target="_blank">
                <img
                  src={process.env.PUBLIC_URL + "/imgs/instagram.png"}
                  alt="img"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/people/%EC%9A%B0%EB%A1%9C%EB%A7%A4%EC%93%B0/100084510926662/"
                target="_blank"
              >
                <img
                  src={process.env.PUBLIC_URL + "/imgs/f_logo.png"}
                  alt="img"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/channel/UC3jSusK1NevpTVNVhhjz7yg"
                target="_blank"
              >
                <img
                  src={process.env.PUBLIC_URL + "/imgs/youtube.png"}
                  alt="img"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </li>

            <li>
              <Link href="https://pf.kakao.com/_pxoxdxixj" target="_blank">
                <img
                  src={process.env.PUBLIC_URL + "/imgs/kakaotalk.png"}
                  alt="img"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </li>
            <li>
              <Link href="https://blog.naver.com/woorotest" target="_blank">
                <img
                  src={process.env.PUBLIC_URL + "/imgs/naver blog.png"}
                  alt="img"
                  style={{ cursor: "pointer", borderRadius: "8px" }}
                />{" "}
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
