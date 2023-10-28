import { Route, Routes } from "react-router-dom"
import { SignUp } from "./signup.components"
import { ResetPassword } from "./reset-password.component"
import { ForgotPassword } from "./forgot-password.component"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <SignUp />} />
            <Route path="/signup" element={ <SignUp />} />
            <Route path="/forgot-password" element={ <ForgotPassword />} />
            <Route path="/reset-password/:tokenId" element={<ResetPassword />} />
        </Routes>
    )
}