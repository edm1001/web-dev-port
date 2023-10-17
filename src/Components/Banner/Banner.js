import bgVideo from '../../Assets/videos/welcome-video.mp4' 


const Banner = () => {
    return (
     <section>
        <div className='welcome-banner'> 
            <video id='banner-bg' src={bgVideo} autoPlay loop muted/>
            <div className='banner-content'>
                 <h2 className="quote" style={{color:'white'}}> In all human affairs there are efforts and there are results, and the strength of the effort is the measure of the result </h2>

                 <h4 className='text-cente quote' style={{color:'red'}}> -James Allen</h4>
                    

                </div>         
            </div>
        </section>
    )
}

export default Banner;