import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import bg from "./img/Birthday_2.jpg";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useState} from 'react';

const style = {
  background: "#FFFFFF",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: ".75vh",
  boxShadow: 24,
  width: "78%",
  height: "74%",
  fontFamily: "DM Sans",
  outline: "none",
  border: 'none',
  
  
}

function App() {

  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(false);
  }
  const [text] = useTypewriter({
    words: ['Chúc mừng sinh nhật Tlinh xinh nhé! Chúc em tuổi mới luôn hạnh phúc, tươi cười, và đạt được mọi thành công trong cuộc sống. Anh luôn sẵn sàng ở đây để giúp đỡ em bất cứ khi nào em cần. Có những lúc anh chưa làm tốt như em mong đợi, hy vọng chúng ta sẽ luôn cùng nhau chia sẻ và vượt qua. Chúc em bốn mùa xuân, hạ, thu, đông đều tràn ngập niềm vui và sự ấm áp. (Click vào từng ảnh và bé Cinnamoroll để coi nhaa, ảnh nào cũng xinhh hết nên anh lấy 8 bức anh thích nhấtt :>) Love you to the moon and back, my White Moon Light! ❤️'],
   
    typeSpeed: 50,
    deleteSpeed: 80,
  });
  
  return (
    <>
     
      <Modal
        open={open}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        <Button style = {{paddingTop: "5%",float: "right", color : "#000000" }} onClick={handleClick}><div>X</div></Button>
        <div  style = {{padding: "10%"}}>{text}</div>
        </Box>
      </Modal>
    
    <Gallery/>
    
 
    </>
  );
}

export default App;
