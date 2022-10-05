import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
function MyLogin(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            MyLogin page
            <form>
            <TextField
                            label="Email/Username"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            size="small"
                            fullWidth
                        />
                <input type="password" value={password}></input>
                <button type="submit">login</button>
            </form>
        </div>
    );
}

export default MyLogin;