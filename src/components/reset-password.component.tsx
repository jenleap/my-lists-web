import { Alert, Box, Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const { tokenId } = useParams();

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            setMessage("Password does not match.")
        } else {
            const userData = {
                'email': email,
                'newPassword': password,
                'resetToken': tokenId
            };
            const res = await fetch("http://localhost:3003/reset", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
           });
            if (res.ok) {
                setSuccess(true);
            } else {
                setMessage("Error resetting password.")
            }
        }
    }

    return (
        <Paper elevation={3} sx={{ width: "40%", margin: "50px auto", padding: "30px"}}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px"}}>
                    <TextField 
                        key="email"  
                        label="Email" 
                        variant="outlined"
                        value={ email }
                        onChange={(e) => setEmail(e.target.value)}
                    />    
                    
                    <TextField
                        key="password"  
                        label="Password" 
                        type="password"
                        variant="outlined"
                        value={ password }
                        onChange={(e) => { setPassword(e.target.value); setMessage("")}}
                    />    
                    <TextField
                        key="confirmPassword"  
                        label="Confirm Password"
                        type="password" 
                        variant="outlined"
                        value={ confirmPassword }
                        onChange={(e) => {setConfirmPassword(e.target.value); setMessage("")}}
                    />    

                    {message && <Alert severity="error">{ message }</Alert>}

                    <Button sx={{ width: '30%'}} variant="contained" onClick={ handleSubmit }>Reset Password</Button>

                    {success && <Alert severity="success">Password successfully reset.</Alert>}
            </Box>
        </Paper>
        )
}