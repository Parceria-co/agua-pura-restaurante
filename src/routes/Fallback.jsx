import { Navigate, useParams } from "react-router-dom";

export default function Fallback() {

    return <Navigate to={`/home`} replace />;
}