import "./Dashboard.css";
import edit from './edit.png';
export default function Dashboard() {
  let data = [
    {
      title: "How to Start a Youtube Channel",
      price: 290,
      description: "90+ Minutes of In-Depth Content On How I Built My Channel",
    },
    {
      title: "How to Start a Youtube Channel",
      price: 290,
      description: "90+ Minutes of In-Depth Content On How I Built My Channel",
    },
    {
      title: "How to Start a Youtube Channel",
      price: 290,
      description: "90+ Minutes of In-Depth Content On How I Built My Channel",
    },
  ];

  return (
    <div class="flex flex-col align-center" className="dashboard-wrapper">
      <h1 className="welcome-txt">Welcome Aaron!</h1>
      <div class="flex justify-between px-8">
        <h2 className="course-msg">Your Courses</h2>
        <h2 className="add-course">Add Course</h2>
      </div>
      <div className="divider"></div>
      <div className="data-container">
        {data.map((item) => {
          return <Course item={item} />;
        })}
      </div>
    </div>
  );
}

const Course = ({ item }) => {
  return (
    <div className="course">
      <div className="course-text">
        <div className="data-title">{item.title}</div>
        <h1>{item.description}</h1>
      </div>
      <div className="course-right">
        <h1>{item.price}</h1>
        <img src={edit} />
      </div>
    </div>
  );
};
