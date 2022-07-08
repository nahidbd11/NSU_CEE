import Login from "../components/admin/auth/Login";
import Create from "../components/admin/pages/semester/Create";
import Edit from "../components/admin/pages/semester/Edit";
import Index from "../components/admin/pages/semester/Index";
import CoIndex from "../components/admin/pages/co/Index";
import CoCreate from "../components/admin/pages/co/Create";
import CoEdit from "../components/admin/pages/co/Edit";
import PoEdit from "../components/admin/pages/po/Edit";
import PoCreate from "../components/admin/pages/po/Create";
import PoIndex from "../components/admin/pages/po/Index";
import CourseIndex from "../components/admin/pages/course/Index";
import CourseCreate from "../components/admin/pages/course/Create";
import CourseEdit from "../components/admin/pages/course/Edit";
import UserIndex from "../components/admin/pages/users/Index";
import UserEdit from "../components/admin/pages/users/Edit";
import UserCreate from "../components/admin/pages/users/Create";
import StudentsIndex from "../components/admin/pages/students/Index";
import StudentsCreate from "../components/admin/pages/students/Create";
import StudentsEdit from "../components/admin/pages/students/Edit";
import Main from "../components/admin/pages/Home/Main";
import StudentCourseOutcome from "../components/admin/pages/student co/StudentCourseOutcome";
import COGraph from "../components/admin/pages/graph/cograph/Graph";
import POGraph from "../components/admin/pages/graph/pograph/Graph";

import Demo from "../components/admin/pages/graph/Demo";

export const routesData = [
    {
        path: "/",
        component: <Main />,
        isAuthRequired: true,
    },
    {
        path: "/login",
        component: <Login />,
        isAuthRequired: false,
    },
    {
        path: "/semester",
        component: <Index />,
        isAuthRequired: true,
    },
    {
        path: "semester/create",
        component: <Create />,
        isAuthRequired: true,
    },
    {
        path: "semester/edit",
        component: <Edit />,
        isAuthRequired: true,
    },
    {
        path: "/co",
        component: <CoIndex />,
        isAuthRequired: true,
    },
    {
        path: "/co/create",
        component: <CoCreate />,
        isAuthRequired: true,
    },
    {
        path: "/co/edit",
        component: <CoEdit />,
        isAuthRequired: true,
    },
    {
        path: "/po",
        component: <PoIndex />,
        isAuthRequired: true,
    },

    {
        path: "/po/create",
        component: <PoCreate />,
        isAuthRequired: true,
    },
    {
        path: "/po/edit",
        component: <PoEdit />,
        isAuthRequired: true,
    },
    {
        path: "/course",
        component: <CourseIndex />,
        isAuthRequired: true,
    },
    {
        path: "/course/create",
        component: <CourseCreate />,
        isAuthRequired: true,
    },
    {
        path: "/course/edit",
        component: <CourseEdit />,
        isAuthRequired: true,
    },
    {
        path: "/users",
        component: <UserIndex />,
        isAuthRequired: true,
    },
    {
        path: "/users/create",
        component: <UserCreate />,
        isAuthRequired: true,
    },
    {
        path: "/users/edit",
        component: <UserEdit />,
        isAuthRequired: true,
    },
    {
        path: "/students",
        component: <StudentsIndex />,
        isAuthRequired: true,
    },
    {
        path: "/students/create",
        component: <StudentsCreate />,
        isAuthRequired: true,
    },
    {
        path: "/students/edit",
        component: <StudentsEdit />,
        isAuthRequired: true,
    },
    {
        path: "/studentCo",
        component: <StudentCourseOutcome />,
        isAuthRequired: true,
    },
    {
        path: "/graph/cograph",
        component: <COGraph />,
        isAuthRequired: true,
    },
    {
        path: "/graph/pograph",
        component: <POGraph />,
        isAuthRequired: true,
    },
    {
        path: "/demograph",
        component: <Demo />,
        isAuthRequired: true,
    },
];
