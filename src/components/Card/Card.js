import React, { useState } from 'react'
import './Card.css'

const Card = ({ headerText, title, subtitle, promo, weight, description, available }) => {
  const [isHover, setIsHover] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    setIsSelected(!isSelected)
    setIsHover(false)
  }

  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }

  // Приводим к нужному формату promo
  const FormattingPromo = ({ string, number }) =>
    number ? (
      <p>
        <strong>{number[0]}</strong>
        {string}
      </p>
    ) : (
      <p>{string}</p>
    );

  // Находим числа в строке promo с помощью regex
  const resultPromo = promo.map((string, index) => {
    let number;
    const regex = /\d+/;
    if (regex.test(string)) {
      number = string.match(regex);
      string = string.replace(regex, '');
    }
    return <FormattingPromo key={index} string={string} number={number} />;
  });


  return (
    <li className={
      isSelected
        ? 'card selected'
        : !available
          ? 'card disabled'
          : 'card'
    }>
      <div className={
        isHover
          ? 'card__container hovered'
          : 'card__container'
      }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}>

        <div className='card__header'>
          <p className='card__header-text'>
            {isSelected && isHover ? 'Котэ не одобряет?' : headerText}
          </p>
        </div>
        <div className='card__inner'>
          <h1 className='card__title'>{title}</h1>
          <h2 className='card__subtitle'>{subtitle}</h2>
          <div className='card__promo'>{resultPromo}</div>
          <div className='card__circle'>
            <p className='card__weight'>{weight}</p>
            <p className='card__kg'>кг</p>
          </div>
        </div>
      </div>
      {
        available
          ? isSelected
            ? <p className='card__description'>{description}</p>
            : (
              <p className='card__description'>
                Чего сидишь? Порадуй котэ,{' '}
                <span className='card__description_action' onClick={handleClick}>купи</span>.
              </p>
            )
          : <p className='card__description card__description_disabled '>
            {`Печалька, ${subtitle} закончился.`}
          </p>
      }
    </li>
  )
}

export default Card