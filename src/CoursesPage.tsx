import Courses from "./Courses";

export default function () {
  return (
    <div style={{ padding: "16px", flex: 1, alignItems: "center", gap: '12px' }}>
      <div className="flex flex-row items-center " style={{ backgroundColor: "#272B30", width: "100%", height: "76px", borderRadius: "8px", }} >
        <img style={{ width: '104px', height: "35px" }} src="uzchess.svg" alt="icon" />
        <div style={{ width: '1px', height: '20px', backgroundColor: '#3D4549' }}></div>
        <p style={{ color: "#FFFFFF", fontFamily: 'Poppins, system-ui', fontWeight: 500, margin: '12px', }}>O'zbekcha</p>

        <div className=" header flex items-center" style={{ gap: "40px", marginLeft: "120px" }}>
          <p>Yangiliklar</p>
          <p >O'rganish</p>
          <p>Kutubxona</p>
          <p >Bog'lanish</p>
          <img className="icon" src="search.svg" alt="icon" />
          <img className="icon" src="basket.svg" alt="icon" />
          <img className="icon" src="notification.svg" alt="icon" />
          <p style={{ color: '#FFFFFF', fontWeight: '400' }}>Jasurbek Po'latov</p>
          <img src="Ellipse 3.png" alt="image" />

        </div>

      </div>

      <div
        className="flex flex-col"
        style={{
          backgroundColor: "#1F272A",
          borderRadius: "8px",
          gap: "12px",
          padding: "16px",
          width: "676px",
          margin: "20px auto",
        }}
      >
        <Courses title="Shaxmat donalari bilan tanishuv" author="Robert Fisher " Rprice="205.000.uzs" price="96 000.00 uzs" image="/CoursesP.png" />
        <div style={{ width: "100%", height: "1px", backgroundColor: "#3D4549", margin: "12px 0", }}></div>
        <Courses title="Shoxga hujum qilish" author="Andre Konfutsiy" Rprice="" price="96 000.00 uzs" image="/book2.png" />
      </div>


    </div>




  );
}

