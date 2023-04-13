import AddCourseModal from "../components/AddCourseModal";
import Courses from "../components/Courses";

export default function Home() {
  return (
    <>
    <div className="d-flex gap-3 mb-4">
        <AddCourseModal />

        </div>
        <hr/>
        <Courses />

    </>
  );
}
