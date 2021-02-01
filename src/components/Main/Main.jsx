import React, {useState, useEffect} from 'react';
import ModalVideo from 'react-modal-video';

import Button from '../UI/Button'

import './main.scss';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const Main = ({setBgc}) => {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setBgc({"backgroundColor": "transparent"})
        return () => {
            setBgc({'backgroundColor': '#f7e135'})
        }
    }, [setBgc]);
    
    return (
        <section className="main">
            <div className="container">
                <div className="main__inner">
                    <h1 className="main__title">Breaking Bad</h1>
                    <div className="main__desc">
                        Walt White's transformation from a well-meaning family man to
                        ruthless drug kingpin is almost complete. Newly empowered and
                        increasingly remorseless, Walt finds himself attempting to
                        control a tenuous empire. But uneasy lies the head that wears
                        the crown.
                    </div>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="HhesaQXLuRY" onClose={() => setIsOpen(false)} />
                    <div onClick={()=> setIsOpen(true)} className="main__btn">
                        <Button />
                        <div className="main__btn-text">WATCH TRAILER</div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Main;
