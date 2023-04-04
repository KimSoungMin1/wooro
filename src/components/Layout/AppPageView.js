const AppPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img src={process.env.PUBLIC_URL + "imgs/free-icon.png"} />
      <div
        style={{
          display: "flex",
          textAlign: "center",
          margin: "140px 0 0 0",
        }}
      >
        <h1 className="page-title">서비스 준비중</h1>
        <span
          className="page-title"
          style={{
            color: "#A4A4A4",
          }}
        >
          입니다
        </span>
      </div>
      <p className="page-subtitle">
        보다 나은 서비스 제공을 위하여 페이지 준비중에 있습니다.
        <br />
        빠른 시일내에 준비 하요 찾아뵙겠습니다
      </p>
    </div>
  );
};

export default AppPage;
