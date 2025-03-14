//abdullah
import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSent();
        }
    };

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="User icon" />
            </div>
            <div className="main-container">
                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Abdullah</span></p>
                            <p>How can I assist you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places for an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="Compass icon" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="Light bulb icon" />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for a work retreat</p>
                                <img src={assets.message_icon} alt="Message icon" />
                            </div>
                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="Code icon" />
                            </div>
                        </div>
                        </>
                    :<div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading?
                            <div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            :<p dangerouslySetInnerHTML={{ __html:resultData }}></p>
                               }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Enter the command here"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="Gallery icon" />
                            <img src={assets.mic_icon} alt="Microphone icon" />
                           {input? <img onClick={() => onSent()} src={assets.send_icon} alt="Send icon" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Please note that Gemini may display inaccurate information. Verify responses, especially those concerning people, privacy, and the Gemini app.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;

