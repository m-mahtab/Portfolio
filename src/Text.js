import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Text() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div className='my-36'>
            <div >
                <div className='text-white '>
                    <div className='text-5xl sm:text-6xl lg:text-9xl xl:text-12xl font-thin'>

                        <div>
                            <h1 className='py-3 sm:py-4 lg:py-6 xl:py-9' data-aos="fade-up">P-Folio</h1>
                        </div>
                        <div>
                            <h1 className='py-7 text_stroke' data-aos="fade-up">Classic</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-base sm:text-3xl lg:text-4xl xl:text-5xl' data-aos="fade-up">THIS IS YOUR CHANCE TO</h1>
                    </div>
                </div>
                <div className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray font-thin' data-aos="fade-up">
                    <h1>jumpstart your business</h1>
                </div>
            </div>
        </div>
    )
}

export default Text

