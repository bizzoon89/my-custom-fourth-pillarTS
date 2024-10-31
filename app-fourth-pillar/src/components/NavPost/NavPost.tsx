import { useState, useMemo } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import styles from './NavPost.module.scss'
import { ETypeCards } from '../../types'

interface INavPost {
  postType: ETypeCards
  arrLength: number
}

const NavPost = ({ postType, arrLength }: INavPost) => {
  const { idPost } = useParams<{ idPost: string }>()
  const navigate = useNavigate()

  const initialNavPost = useMemo(() => {
    return idPost ? Number(idPost) : 1
  }, [idPost])

  const [navPost, setNavPost] = useState<number>(initialNavPost)

  // useEffect(() => {
  //   if (idPost) {
  //     setNavPost(Number(idPost));
  //   }
  // }, [idPost]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const renderBackLink = () => {
    return postType === ETypeCards.Service ? (
      <Link to='/services'>Back to Our Services</Link>
    ) : (
      <Link to='/news'>Back to News</Link>
    )
  }

  const handleNavigation = (direction: 'prev' | 'next') => {
    let newPostNumber: number

    if (direction === 'next') {
      newPostNumber = navPost === arrLength ? 1 : navPost + 1
    } else {
      newPostNumber = navPost === 1 ? arrLength : navPost - 1
    }

    setNavPost(newPostNumber)
    const newRoute =
      postType === ETypeCards.Service
        ? `/services/${newPostNumber}`
        : `/news/${newPostNumber}`
    navigate(newRoute)

    scrollToTop()
  }

  const generateLink = (direction: 'prev' | 'next') => {
    const linkText = direction === 'prev' ? 'Previous page' : 'Next page'
    return (
      <button onClick={() => handleNavigation(direction)}>
        {postType === 'news' && direction === 'next' ? (
          <span>Next article</span>
        ) : null}
        {linkText}
      </button>
    )
  }

  return (
    <section className={styles.navigationHolder}>
      <div className={styles.containerMd}>
        <div className={styles.backLink}>{renderBackLink()}</div>
        <div className={styles.navigationSingle}>
          <div className={styles.prev}>
            {postType === ETypeCards.Service && generateLink('prev')}
          </div>
          <div className={styles.next}>{generateLink('next')}</div>
        </div>
      </div>
    </section>
  )
}

export default NavPost
