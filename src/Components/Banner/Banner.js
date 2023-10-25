import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
// import bgVideo from '../../Assets/videos/welcome-video.mp4' 


const Banner = () => {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

    return (
     <section>
        <div className="wrapper bg-dark">
      <motion.div
        className="container"
        style={{
          scale
        }}
      >
        <motion.div
          className="item bg-secondary"
          style={{
            scaleY: scrollYProgress
          }}
        >
        <motion.item>
            <div className='banner-content px-2'>
                 <h2 className="quote"> In all human affairs there are efforts and there are results, and the strength of the effort is the measure of the result </h2>

                 <h4 className='quote text-danger'> -James Allen</h4>
                </div>      

        </motion.item>
        </motion.div>
      </motion.div>
    </div>
    

        {/* <div className='welcome-banner'> 
            <video id='banner-bg' src={bgVideo} autoPlay loop muted/>
            <div className='banner-content px-2'>
                 <h2 className="quote" style={{color:'white'}}> In all human affairs there are efforts and there are results, and the strength of the effort is the measure of the result </h2>

                 <h4 className='quote text-danger'> -James Allen</h4>
                    

                </div>         
            </div> */}
        </section>
    )
}

export default Banner;