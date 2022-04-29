/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
const HomePageView = () => {
  // Render Home page view
  return (
    <div>
      <h1>Home Page</h1>
      <h3>View Campuses and students</h3>
      <img
        src="https://thumbs.dreamstime.com/b/university-building-vector-illustration-cartoon-d-outside-front-view-high-elementary-school-college-academy-campus-186210510.jpg"
        alt="campus"
      />
    </div>
  );
};

export default HomePageView;
