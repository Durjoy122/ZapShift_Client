import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashBoardLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/sendParcel/sendParcel";
import MyParcels from "../Pages/DashBoard/MyParcels";
import Payment from "../Pages/DashBoard/Payment";
import PaymentSuccess from "../Pages/DashBoard/PaymentSuccess";
import PaymentCancelled from "../Pages/DashBoard/PaymentCancelled";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory";
import ApproveRiders from "../Pages/DashBoard/ApproveRiders";
import AssignRiders from "../Pages/DashBoard/AssignRiders";
import UserManagement from "../Pages/DashBoard/UserManagement";
import AssignedDeliveries from "../Pages/DashBoard/AssignedDeliveries";
import CompletedDeliveries from "../Pages/DashBoard/CompletedDeliveries";
import RiderRoute from "./RiderRoute";
import ParcelTrack from "../Pages/ParcelTrack/ParcelTrack";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true, 
                Component: Home
            },
            {
                path: 'rider',
                element: <PrivateRoute><Rider></Rider></PrivateRoute>,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
            },
            {
                path: 'send-parcel',
                element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
            },
            {
                path: 'coverage',
                Component: Coverage,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
            }
            ,
            {
                path: 'parcel-track/:trackingId',
                Component: ParcelTrack,
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'my-parcels',
                Component: MyParcels
            }
            ,
            {
                path: 'payment/:parcelId',
                Component: Payment
            }
            ,
            {
                path: 'payment-history',
                Component: PaymentHistory
            }
            ,
            {
                path: 'payment-success',
                Component: PaymentSuccess
            }
            ,
            {
                path: 'payment-cancelled', 
                Component: PaymentCancelled
            }
            ,
            {
                path:'approve-riders',
                element: <AdminRoute><ApproveRiders></ApproveRiders></AdminRoute>
            }
            ,
            {
                path:'assign-riders',
                element: <AdminRoute><AssignRiders></AssignRiders></AdminRoute>
            }
            ,
            {
                path:'users-management',
                element: <AdminRoute><UserManagement></UserManagement></AdminRoute>
            }
            ,
            {
                 path: 'assigned-deliveries',
                 element: <RiderRoute><AssignedDeliveries></AssignedDeliveries></RiderRoute>
            }
            ,
            {
                 path: 'completed-deliveries',
                 element: <RiderRoute><CompletedDeliveries></CompletedDeliveries></RiderRoute>
            }
        ]
    }
]);

export default router;