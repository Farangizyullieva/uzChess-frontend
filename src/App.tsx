import CourseSectionItem from "./CourseSectionItems";

export default function App() {
    return <div className="p-7.75">
        <div className="w-256.5 bg-[#1A1D1F] rounded-lg border border-[#1F272A]">
            <CourseSectionItem />
            <CourseSectionItem />
            <CourseSectionItem />
        </div>
    </div>;
}