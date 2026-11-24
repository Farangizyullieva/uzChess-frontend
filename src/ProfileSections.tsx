import ProfileSectionItem from "./ProfileSectionItem";

export default function ProfileSections() {
    return <div>
    <div className="p-7.75">
        <div className="flex flex-col gap-3 bg-[#1A1D1F] w-81.5 rounded-2xl border border-[#1F272A] p-5">
            
            <ProfileSectionItem icon="/purchased.svg" text="Sotib olingan kurslar"/>
            <ProfileSectionItem icon="/orders.svg" text="Buyurtmalar"/>
            <ProfileSectionItem icon="/saved.svg" text="Saqlanganlar"/>
            <ProfileSectionItem icon="/general-settings.svg" text="Umumiy sozlamalar"/>
           
        </div>
    </div>
    </div>
}