import  { useContext } from 'react';
import { BookContext } from '../../../context/BookContext';
import './pagination.css'
const Index = () => {
    let {booksPages,booksPerPage,setCurrPage,currPage}=useContext(BookContext);
    
  
   
    let pages=[];
    for(let i=1; i<=Math.ceil( booksPages?.length/booksPerPage);i++){
        pages.push(i)
    }

    const handlePageClick = (page) => {
        setCurrPage(page);
        
        console.log("currPage in pagination",currPage)
        window.scrollTo(0, 0); 
    }
    return (
        <div className='pagination'>
            {
                pages.map((page,index)=><button className={page==currPage?'active':''} key={index} onClick={()=>handlePageClick(page)}>{page}</button>)
            }
            
        </div>
    );
}

export default Index;
