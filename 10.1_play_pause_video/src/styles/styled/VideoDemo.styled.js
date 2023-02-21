import styled from 'styled-components';

const Wrapper = styled.div`
width: 60vw;
padding: 3rem;
margin: 5rem auto;
border-radius: 25px;
box-shadow: 0px 0px 30px 8px #fff;  

 video {
    width: 100%;
    border-radius: 25px;
     box-shadow: 0px 0px 30px 8px #fff;     
   
  }
  .buttons-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-item: center;    
    gap: 100px;
    
      button {
        cursor: pointer;
        box-shadow: 0px 0px 8px 3px #fff;     
        color: white;
        width: 6rem;
        height: 3.5rem;
        margin-top: 3rem;
        font-size: 1.5rem;
        background-color: transparent;
        border-radius: 70px;
        }

      button:hover {
          color: #0ff;
         box-shadow: 0px 0px 15px 8px #0ff;  
          
        }
      button:active {
        color: #f90618;
          box-shadow: 0px 0px 20px 10px #f90618;  
      }
      
      .videoBoxBlue {
             box-shadow: 0px 0px 30px 8px #fff;     

      }
      
      .videoBoxRed{
             box-shadow: 0px 0px 30px 8px #f90618;      

      }
      
      .videoBoxBlue {
             box-shadow: 0px 0px 30px 8px #0ff;    

      }
}
`;
export default Wrapper;
