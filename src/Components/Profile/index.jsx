import { Container, Table, Button, Modal, Box, Typography, TableCell, TableBody, TableRow, TableHead, TableContainer, Snackbar,  Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import api from '../../Interceptors/Auth';
import classes from './profile.module.css';
import BubbleLoading from '../staticComponents/bubbleLoading';
import One from '../../assets/imgs/One.jpg'; 
import Review from './Review';

const Profile = () => {
  
  const [user, setUser] = useState();
  const [showReviewModal, setShowReviewModal] = useState(false); 
  const [selectedBookId, setSelectedBookId] = useState(null); 
  const [showSnackbar, setShowSnackbar] = useState(false);
  const[bookName,setBookName]=useState();
  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get('http://localhost:3000/user/profile');
      setUser(res.data);
    };
    fetchData();
  }, [setUser]);
  const handleCloseModal = () => {
    setShowReviewModal(false);
  };
  const addReview = (bookId,bookName) => {
    setSelectedBookId(bookId); 
    setBookName(bookName)
 
    setShowReviewModal(true); 
  };

  if (!user) return <BubbleLoading/>;

  return (
    <Container className={classes.profileContainer}>
           <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Review added successfully!
        </Alert>
        
      </Snackbar>
        {/* <Snackbar
        open={showSnackbar}
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        message="Review added successfully!"
        sx={{
            backgroundColor: 'var(--profile) !important', 
            color: '#ffffff !important', 
        }}
        action={
          <IconButton 
          
          size="small" aria-label="close" color="inherit"
          sx={{
            backgroundColor: 'var(--profile) !important', 
            color: '#ffffff !important', 
        }}
          onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      /> */}
      <div className={classes.profileHeader}>
        <div className={`mb-3 ${classes.userImage}`}>
          <img src={One} alt="Profile Image" className={classes.profileImage} />
        </div>
        <h1 className="user-name display-2">{user?.name}</h1>
        <p className="user-email fs-5">{user?.email}</p>
      </div>
      <div className="user-books">
        <h2 className="text-center mb-4 mt-5 fs-1">My Books</h2>
        <div className="table-responsive">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user.purchased?.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.book.title}</TableCell>
                    <TableCell>{item.book.price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{new Date(item.date).toISOString().split('T')[0]}</TableCell>
                    <TableCell>
                      <Button
                        className={classes.reviewBtn}
                        onClick={() => addReview(item.book._id,item.book.title)}
                      >
                        Add Review
                        
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
 
      <Modal
        open={showReviewModal}
        onClose={() => setShowReviewModal(false)} 
      >
        <Box className={classes.modalContainer}>
          <Typography sx={{textAlign:'center', fontWeight:'bold'}}  variant="h6" gutterBottom>
            Add Review on {bookName} Book
          </Typography>
         
          <Typography id="modal-modal-description" sx={{ }}>
      <Review handleCloseModal={handleCloseModal} bookId={selectedBookId} setShowSnackbar={setShowSnackbar}/>
    </Typography>
      
         
        </Box>
      </Modal>
    </Container>
  );
};

export default Profile;
