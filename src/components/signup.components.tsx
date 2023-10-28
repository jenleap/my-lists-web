import { Alert, Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);


    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            setMessage("Password does not match.")
        } else {
            const userData = {
                'email': email,
                'username': username,
                'password': password
            };
            const res = await fetch("http://localhost:3003/user", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
           });

            const json = await res.json();
            if (json.token) {
                setSuccess(true);
            }
        }
    }

    return (
        <Paper elevation={3} sx={{ width: "40%", margin: "50px auto", padding: "30px"}}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px"}}>
                    <TextField
                        key="username"  
                        label="Username" 
                        variant="outlined"
                        value={ username }
                        onChange={(e) => setUsername(e.target.value)}
                    />    
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

                    <Button sx={{ width: '30%'}} variant="contained" onClick={ handleSubmit }>Sign Up</Button>

                    {success && <Alert severity="success">User successfully created!</Alert>}

                    <Link style={{ textDecoration: 'none'}} to={ "forgot-password"}>
                        <Typography variant="overline">Forgot password?</Typography>
                    </Link>
            </Box>
        </Paper>
    )
}