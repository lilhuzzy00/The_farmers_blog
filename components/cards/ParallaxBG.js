const ParallaxBG = ({ url, children = "FARMING SPIRIT" }) => {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: "url( " + url + " )",
          backgroundAttachment: "fixed",
          padding: "100px 0px 200px 0px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          display: "block",
        }}
      >
        <h1 className="display-1 text-center p-5" style={{
                            fontWeight: "bold",
                            color: "green"
                        }}>{children}</h1>
      </div>
    );
  };
  
  export default ParallaxBG;