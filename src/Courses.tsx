export default function Courses({title,author, Rprice , price, image}) {
    return <div className="flex flex-row gap-5  " style={{ flex : 1, padding:'16px', height:'160px',  alignItems: "center",gap:'12px'}}>
        <div>
            <img  style={{ width: "156px", height: "120px",objectFit: "contain", borderRadius: "8px"}}src={image} alt="image"></img></div>



        <div className="flex flex-col" style={{ gap: "4px" }}>
            <h2  style={{color: "#FCFCFC",fontSize: "20px",fontWeight: 700,}}>{title}</h2>
            <p style={{ color: "rgba(240,240,240,0.72)", fontSize: "14px" }}>{author}</p>
            <p className=" text-[rgba(240,240,240,64%)] text-[12px]">{Rprice}</p>
            <p style={{ color : "#82CC27", fontFamily: 'Poppins, system-ui', fontSize: '16px', fontWeight: '700'}}>{price}</p>

        </div>
        
       

    </div>




}