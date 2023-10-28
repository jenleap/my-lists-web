import { Alert, Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = async () => {
            const userData = {
                'email': email
            };
            const res = await fetch("http://localhost:3003/request-reset", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
           });

            if (res.ok) {
                setMessage("Password reset submitted. Please check your email for a reset link.");
            }
        
    }

    return (
        <Paper elevation={3} sx={{ width: "40%", margin: "50px auto", padding: "30px"}}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px"}}>
                    <Typography variant="subtitle2">Forgot Password?</Typography>
                    <TextField 
                        key="email"  
                        label="Email" 
                        variant="outlined"
                        value={ email }
                        onChange={(e) => setEmail(e.target.value)}
                    />    

                    <Button sx={{ width: '50%'}} variant="contained" onClick={ handleSubmit }>Submit Reset Request</Button>

                    {message && <Alert severity="success">{ message }</Alert>}
            </Box>
        </Paper>
        )
}