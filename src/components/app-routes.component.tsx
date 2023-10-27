import { Route, Routes } from "react-router-dom"
import { SignUp } from "./signup.components"
import { ResetPassword } from "./reset-password.component"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <SignUp />} />
            <Route path="/signup" element={ <SignUp />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
    )
}