import React from 'react'

import './episodecard.scss'

const EpisodeCard = ({episodeItem}) => {
    const {title, episode, season} = episodeItem;
    return (
        <div className="episode-card">
            <div className="episode-card__img">
                <img src="https://m.media-amazon.com/images/M/MV5BNTZlMGY1OWItZWJiMy00MTZlLThhMGItNDQ2ODM3YzNkOWU5XkEyXkFqcGdeQXVyNzgyOTQ4MDc@._V1_UY268_CR147,0,182,268_AL_.jpg" alt="episode"/>
            </div>
            <div className="episode-card__title">{title}</div>
            <div className="episode-card__season">Season: {season} </div>
            <div className="episode_card__episode">Episode: {episode}</div>
        </div>
    )
}

export default EpisodeCard
