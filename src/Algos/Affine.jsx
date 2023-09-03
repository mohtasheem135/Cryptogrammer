import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: 10,
  });
const Main = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
});
export const Affine = () => {
    const [A, setA] = useState();
    const [B, setB] = useState();
    const [init, setInit] = useState(false);
    const [message, setMessage] = useState("");
    const [cipher, setCipher] = useState("");

    function onMessageChange(text){
      setMessage(text);
      console.log("Debug: Changes in message");
      let c1 = encryptMessage(text)
      setCipher(c1);
    }

    function onCipherChange(text){
      setCipher(text);
      console.log("Debug: Changes in cipher");
      let m1 = decryptCipher(text)
      setMessage(m1);
    }

    function changeValid(){
      setInit(true);
    }   
    function encryptMessage(msg)
    {
      return msg;
    }
    function decryptCipher(cipher)
    {
      return cipher;
    }
    return (<ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
        {init?(
          <>
          <Main>
            <TextField
              placeholder="Enter Message"
              multiline
              value={message}
              rows={10}
              style={{width: 400}}
              onChange={(e)=>onMessageChange(e.target.value)}
            />
            <TextField
              placeholder="Encoded Text"
              multiline
              value={cipher}
              rows={10}
              style={{width: 400}}
              onChange={(e)=>onCipherChange(e.target.value)}
            />
          </Main>
          </>
        ):(
          <>
            <TextField
              id="outlined"
              label="Input a"
              value={A}
              onChange={(e)=>setA(e.target.value)}
            />
            <TextField
              id="outlined"
              label="Input b"
              value={B}
              onChange={(e)=>setB(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={(e)=>changeValid()}>Continue</Button>
          </>
        )}
        </Container>
    </ThemeProvider>);
}
