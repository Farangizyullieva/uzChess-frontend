export default function BookInfoItem({icon, text1 , text2 }) {
    return <div className="border-r border-[#272B30] p-3 last:border-r-0">
        <div className="flex items-center gap-2 text-[#6D7274]">
            <img src={icon} alt="icon" />
            <p>{text1}</p>
        </div>
        <h2 className="text-[#F7F9FA]">{text2}</h2>
    </div>
   
}

 