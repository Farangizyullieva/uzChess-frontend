import { createRoot } from "react-dom/client";
import "./styles.css";
// import CoursesPage from "./CoursesPage";
// import TopBookItem from "./TopBookItem";
import CoursesPage from "./CoursesPage";
// import Courses from "./CoursesPage";
// // import CourseHeader from "./CourseHeader";

const root = createRoot(document.getElementById("root")!);

root.render(
    // <div className="p-7.75">
    //     <CourseHeader/>
    // </div>

    <div><CoursesPage/></div>
);