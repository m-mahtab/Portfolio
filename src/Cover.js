import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { TypeAnimation } from 'react-type-animation';


function openWhatsApp(phoneNumber) {
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    window.open(`whatsapp://send?phone=${encodedPhoneNumber}`, '_blank');
}


function Cover({ backgroundImage, TITLE, SUBTITLE, learnMoreText }) {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            5000,
        );
        return () => clearTimeout(intervalId);
    }, []);

    const coverStyle = {
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className='px-5 '>
            <div style={coverStyle} className='h-auto'>
                <div className="text-white">
                    <div className='font-thin relative bg-black bg-opacity-75 py-36'>
                        <h1 className='text-3xl sm:text-4xl lg:text-6xl xl:text-9xl  '>
                            <TypeAnimation
                                sequence={TITLE}
                                repeat={Infinity}

                            />
                        </h1>
                        <div className='pt-5 text-base sm:text-lg sm:my-10 lg:text-xl xl:text-2xl flex  justify-center'>
                            <h2>
                                A Picture is Worth a Thousand Words...!

                            </h2>
                            {/* <h2>
                                <TextTransition direction='up' springConfig={presets.slow}>{SUBTITLE[index % SUBTITLE.length]}</TextTransition>
                            </h2> */}

                        </div>
                        <span className='span'>

                            <button className='befor buttony-5 px-3 py-2  shadow-white  text-white  bg-gray' onClick={() => openWhatsApp('+923151721049')}><a className='befor'>{learnMoreText}</a></button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cover;
