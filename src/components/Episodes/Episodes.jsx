import React, {useState, useEffect} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Slider from 'react-slick'
import actions from '../../redux/actions';
import Spinner from '../UI/Spinner';
import EpisodeCard from '../EpisodeCard';

import './episodes.scss'
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Episodes = ({episodes, getEpisodes}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [season, setSeason] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        getEpisodes().then(() => setIsLoading(false));
    }, [getEpisodes]);

    useEffect(() => {
        const filtred = episodes.filter(item => parseInt(item.season) === season);
        setData(filtred)
    }, [season, episodes])

    const toggleMenu = () => {
        const menu = document.querySelector('.dropdown__menu');
        if(menu.classList.contains('open')){
            menu.classList.remove('open');
        } else {
            menu.classList.add('open')
        }
    }

    const chooseSeason = (e) => {
        const menu = document.querySelector('.dropdown__menu');
        if(menu.classList.contains('open')){
            menu.classList.remove('open');
        } else {
            menu.classList.add('open')
        }
        setSeason(e.target.value);
    }

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    const content = isLoading ? (
        <Spinner />
    ) : (<Slider {...sliderSettings}>
            {data.map(item => <EpisodeCard key={item.episode_id} episodeItem={item} />)}
        </Slider>);

    return (
        <div className="episodes">
            <div className="container">
                <div className="episodes__inner">
                    <div className="episodes__dropdown dropdown" >
                        <div className="dropdown__title" onClick={toggleMenu} >Select season</div>
                        <ul className="dropdown__menu" onClick={chooseSeason}>
                            <li value="1">Season 1</li>
                            <li value="2">Season 2</li>
                            <li value="3">Season 3</li>
                            <li value="4">Season 4</li>
                            <li value="5">Season 5</li>
                        </ul>
                    </div>
                    {content}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ episodesReducer }) => {
    return {
        episodes: episodesReducer.episodes,
    };
};

const mapDispatchToProps = (dispatch) => {
    const { getEpisodes } = bindActionCreators(actions, dispatch);
    return {
        getEpisodes,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
