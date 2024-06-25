import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { blogList, remove } from '../../Redux/crudSlice';
import { reset_redirectTo } from '../../Redux/authSlice';
import { productu } from '../../Redux/helper';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,TableContainer,Paper,Table,TableHead,TableBody,TableRow,TableCell } from '@mui/material';


import SweetAlertComponent from '../../../src/Sweetalert/Sweetalert';
import { MusicNote } from '@mui/icons-material';

export default function Product() {
  const dispatch = useDispatch();
  const [currentPage,setCurrentPage]=useState(1)
  const [delete_id, setDelete_id] = useState('');
  const [delete_title, setDelete_title] = useState('');
  const [isDelete, setIsDelete] = useState(false);
  const { det2,totalRecords2 } = useSelector((state) => state.Crud);
  const itemPerPage=6

  useEffect(() => {
    dispatch(blogList());
  }, []);

  const delete_func = () => {
    if (delete_id !== '') {

      const savedBlogsByCategory = JSON.parse(localStorage.getItem('savedBlogsByCategory')) || {};
      if (savedBlogsByCategory[delete_title]) {
        console.log("from Delete",delete_title)
        delete savedBlogsByCategory[delete_title];
        localStorage.setItem('savedBlogsByCategory', JSON.stringify(savedBlogsByCategory));
      }

      dispatch(remove({ id: delete_id })).then(() => {
        dispatch(blogList());
      });
    }
    setDelete_id('');
    setIsDelete(false);
    setDelete_title('')
    
  };



  const onChangeHandle=(event,page)=>{
   
    setCurrentPage(page)
}



  const updateButtonStyle = {
    backgroundColor: '#1976D2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#115293',
    },
    marginRight:'10px'
  };

  const deleteButtonStyle = {
    backgroundColor: '#D32F2F',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#9A0007',
    },
  };


const tableCellStyle={ fontWeight: 'bold', color:"#4E2161", fontSize: '1.2rem' }
const tableCellStyle2 = {
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  maxWidth: '200px', 
};


  return (
    <>
     
      
        <div className='container' style={{ marginTop: "5.5rem", marginBottom: "5.5rem" ,marginRight:"10px",marginLeft:"10px",paddingBottom: '500px' }}>

          





 













<TableContainer component={Paper} sx={{ border: '1px solid #ccc', backgroundImage: 'url("843717.jpg")', backgroundSize: 'cover',  }}>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: '' }}>
          <TableRow>
            <TableCell sx={tableCellStyle} >Title</TableCell>
            <TableCell  sx={tableCellStyle} >Description</TableCell>
            
            <TableCell align="right" sx={tableCellStyle}>Image</TableCell>
            <TableCell align="right" sx={tableCellStyle}>Actions</TableCell>
          </TableRow>
        </TableHead>
        

       


<TableBody>
  {det2 && totalRecords2 > 0 ? (
    det2?.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage).map((item, index) => (
      <TableRow
        key={item.name}
        sx={{
          '&:nth-of-type(odd)': { backgroundColor: 'white' },
          '&:nth-of-type(even)': { backgroundColor: '#F1EEDC' },
          '&:hover': { backgroundColor: '#BED7DC' },
          '&:last-child td, &:last-child th': { border: 0 },
        }}
      >
        <TableCell component="th" scope="row">
          {item.title}
        </TableCell>
        <TableCell sx={tableCellStyle2}>{item.description}</TableCell>
        <TableCell align="right">
          <img src={productu(item.image)} alt="Class" style={{ width: 50, height: 50, borderRadius: '10%' }} />
        </TableCell>
        <TableCell align="right">
          <Button
            component={Link}
            to={`/productupdate/${item._id}`}
            size="small"
            sx={updateButtonStyle}
          >
            Update
          </Button>
          <Button
            onClick={() => {
              setDelete_id(item._id);
              setIsDelete(true);
              setDelete_title(item.title);
            }}
            size="small"
            sx={deleteButtonStyle}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={4} align="center">
        <Typography variant="body1" sx={{ padding: '16px' }}>
          No records found
        </Typography>
      </TableCell>
    </TableRow>
  )}
</TableBody>


















      </Table>
    </TableContainer>


         
          <Pagination count={Math.ceil(det2.length/itemPerPage)} onChange={onChangeHandle} ></Pagination>
        </div>
      

      {isDelete && (
        <SweetAlertComponent
          confirm={delete_func}
          cancel={() => setIsDelete(false)}
          title="Are you sure?"
          subtitle="You will not be able to recover!"
        />
      )}
    </>
  );
}
