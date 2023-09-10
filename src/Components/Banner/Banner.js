import bgVideo from '../../Assets/videos/welcome-video.mp4' 
import {FcGoogle} from 'react-icons/fc';
import {FaGithubAlt} from 'react-icons/fa';

const Banner = () => {
    return (
     <section>
        <div className='welcome-banner'> 
            <video id='intro-vid' src={bgVideo} autoPlay loop muted/>
            <div className='intro-content'>
                 <h2 className="quote" style={{color:'white'}}> In all human affairs there are efforts and there are results, and the strength of the effort is the measure of the result </h2>

                 <h4 className='text-center' style={{color:'red'}}> -James Allen</h4>
                    <FcGoogle size={50}/>
                    <FaGithubAlt size={50}/>  

                </div>         
            </div>
        </section>
    )
}

export default Banner;