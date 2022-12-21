import { Route, Routes } from "react-router-dom";
import CreateEvent from "./CreateEvent";
import EventDetails from "./EventDetails";
import EventsPage from "./EventsPage";
import Login from "./Login";
import PrivateRouter from "./PrivateRouter";
import Signup from "./Signup";

export default function AllRouter(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/events" element={<PrivateRouter> <EventsPage /> </PrivateRouter>} />
            <Route path="/events/:id" element={ <PrivateRouter> <EventDetails /> </PrivateRouter>} />
            <Route path="/add_event" element={ <PrivateRouter> <CreateEvent /> </PrivateRouter>} />
        </Routes>
    )
}