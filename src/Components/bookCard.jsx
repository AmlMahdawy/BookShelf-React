import "bootstrap/dist/css/bootstrap.min.css";

function BookCard() {
  return (
    <div>
      <div className="bookCard d-flex flex-column  justify-content-center align-items-center  border border-2 border-danger  p-3" style={{width:'fit-content'}}>
        <img
        className="my-2"
          src="https://www.4readlib.com/uploads/images/1532191169.jpg"
          style={{ width: "200px", height: "300px",borderRadius:'15px' }}
        />
        <div className="category mt-2 mt-4" style={{color:'#a757bf',fontSize:'small',fontWeight:'bold'}}>Self Development</div>
        <h5 className="title my-1" style={{fontWeight:'bold'}}>Atomic Habits</h5>
        <div className="auther mb-1" style={{color:'#8f8f8f'}}>James Clear</div>
        <h5 className="price my-3 px-3" style={{color:'#a757bf',fontWeight:'bold',border:'1px #8f8f8f solid',padding:'10px',borderRadius:'10px'}}>120 L.E</h5>
      </div>
    </div>
  );
}

export default BookCard;
