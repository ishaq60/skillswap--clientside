import { createBrowserRouter, Route } from "react-router-dom";
import Main from "../Components/Main/Main";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/login/Login";
import CourseDetails from "../Components/CoursesDetails/CoursesDetails";
import PaymentPage from "../Components/PaymentPage";
import SignUp from "../Pages/SignUp/Signup";
import CouresePage from "../Pages/Scourse/Courese";
import CoursePage from "../Components/CoursesPage/CoursePage";
// import Courese from "../Pages/Scourse/Courese";
// import CouresePage from "../Pages/Scourse/Courese";

// import SignUp from "../Authentication/SignUP/SignUp";
// import Design from "../Course/Design";
// import Courses from "../Pages/Courses/CoursesDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      // {
      //   path: '/courses',
      //   element: <Courses />
      // },
      // {
      //   path: "/courses/design",
      //   element: <Design />
      // },
      {
        path: '/courseDetails/:id',
        element: <CourseDetails />,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:5000/courses/${params.id}`);
          if (!res.ok) {
            throw new Response('Failed to load course', { status: res.status });
          }
          return res.json();
        }
      },
      {
        path: '/payment/:id',
        element: <PaymentPage />,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:5000/courses/${params.id}`);
          if (!res.ok) {
            throw new Response('Failed to load course', { status: res.status });
          }
          return res.json();
        }
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: "/courses/:category",
        element: <CoursePage/>,
      
      }
,      


      {
        path: '/signup',
        element: <SignUp/>
      },
    ]
  }
]);

export default router;
