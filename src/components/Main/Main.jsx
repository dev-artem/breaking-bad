import React from 'react';

import Button from '../UI/Button'

import './main.scss';


const Main = ({setBgc}) => {

    React.useEffect(() => {
        setBgc({"background-color": "transparent"})
        return () => {
            setBgc({'background-color': '#f7e135'})
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
                    <a href="#" className="main__btn">
                        <Button />
                        <div className="main__btn-text">WATCH TRAILER</div>
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Main;
