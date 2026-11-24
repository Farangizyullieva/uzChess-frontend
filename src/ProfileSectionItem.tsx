export default function ProfileSectionItem({icon, text}) {
    return <div className="flex flex-row gap-2 bg-[#13181C] w-71.5 h-15 rounded-xl border border-[#1F272A] px-4.5 items-center hover:border-[#1C92E0] hover:drop-shadow-[#1C92E0]/16 hover:drop-shadow-[0px_4px_32px] group">
        <img src={icon} alt="icon" />
        <h2 className="group-hover:text-white text-[#9DA1A3] text-[16px] font-medium">{text}</h2>
    </div>
}