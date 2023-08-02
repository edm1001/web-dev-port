// import Button from 'react-bootstrap';

// import Button from 'react-bootstrap/button';
import  {Stack }  from 'react-bootstrap';

const Welcome =  () => {
    return (
        <section className='welcome'>
            <Stack  gap={2}>
                <div className='text-center'>
                 <h2 className="quote" style={{color:'white'}}> In all human affairs there are efforts and there are results, and the strength of the effort is the measure of the result </h2>
                 </div> 
                 <div><h4 className='text-center' style={{color:'red'}}> - James Allen</h4></div>
        {/* <FcGoogle size={50}/>
        <FaGithubAlt size={50}/>  */}
        
        </Stack>         
     
        </section>
    )
}
export default Welcome;