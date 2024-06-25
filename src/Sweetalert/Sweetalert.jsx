// import SweetAlert from "react-bootstrap-sweetalert";
// function SweetAlertComponent({ confirm, cancel, title, subtitle, type }) {
//     return (
//         <SweetAlert
//             style={{ zIndex: "1" }}
//             title={title}
//             onConfirm={confirm}
//             // type="danger"
//             type={type !== undefined ? type : "danger"}
//             showCancel={true}
//             confirmBtnStyle={{ backgroundColor: "#024b98" }}
//             onCancel={cancel}
//         >
//             <h5> {subtitle} </h5>
//         </SweetAlert>
//     );
// }

// export default SweetAlertComponent;


import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

function SweetAlertComponent({ confirm, cancel, title, subtitle, type }) {
  return (
    <Dialog open={true} onClose={cancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{subtitle}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancel} color="secondary">
          Cancel
        </Button>
        <Button onClick={confirm} variant="contained" style={{ backgroundColor: '#024b98', color: '#fff' }}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SweetAlertComponent;
