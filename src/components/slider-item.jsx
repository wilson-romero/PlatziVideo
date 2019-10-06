import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/components/slider-item.scss';

const SliderItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='slider-item'>
    <img className='cover' src={cover} alt='galactica' />
    <div className='details'>
      <div className='actions'>
        <button type='button' className='btn btn-success btn-sm rounded-circle'>
          <FontAwesomeIcon icon={faPlay} size='xs' />
        </button>
        <button type='button' className='btn btn-success btn-sm rounded-circle'>
          <FontAwesomeIcon icon={faPlus} size='xs' />
        </button>
      </div>
      <div className='title'>{title}</div>
      <div className='subtitle'>
        <span>{year}</span>
        {` ${contentRating} ${duration} minutos`}
      </div>
    </div>
  </div>
);

SliderItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default SliderItem;
