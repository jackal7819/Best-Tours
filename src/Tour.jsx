import { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
    const [readMore, setReadMore] = useState(false);

    const handleRemoveTour = () => {
        removeTour(id);
    };

    const toggleReadMore = () => {
        setReadMore(!readMore);
    };

    return (
        <article className='single-tour'>
            <img src={image} alt='name' className='img' />
            <span className='tour-price'>${price}</span>
            <div className='tour-info'>
                <h5>{name}</h5>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={toggleReadMore} className='info-btn'>
                        {readMore ? 'show less' : 'read more'}
                    </button>
                </p>
                <button
                    className='btn btn-block delete-btn'
                    onClick={handleRemoveTour}>
                    not interested
                </button>
            </div>
        </article>
    );
};

export default Tour;
