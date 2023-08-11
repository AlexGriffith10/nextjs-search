import styles from './Card.module.css'
import Image from 'next/image'

import DirectionLogo from '../../../stories/assets/direction.svg'
import FlowLogo from '../../../stories/assets/flow.svg'

export interface CardProps {
  author: string
  body: string
  tag: string
  time: string
  title: string
  img?: string
}

const Card: React.FC<CardProps> = ({ author, body, tag, time, title, img }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <Image
            src={img ? img : FlowLogo}
            alt="card_image_direction"
            className={styles.cardImage}
            fill
          />
        </div>
        <div className={styles.cardBody}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.body}>{body}</p>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.userImage}>
            <Image
              src={img ? img : FlowLogo}
              alt="card_image_flow"
              className={styles.cardImage}
              width={40}
              height={40}
            />
            <div className={styles.userInfo}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
