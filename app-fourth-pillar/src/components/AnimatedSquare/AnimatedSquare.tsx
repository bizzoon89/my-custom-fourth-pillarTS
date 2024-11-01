import styles from './AnimatedSquare.module.scss';

interface IAnimatedSquare {
  positionClass: string;
}

export const AnimatedSquare = ({ positionClass }: IAnimatedSquare) => {
  return (
    <div className={`${styles.animatedSquare} ${styles[positionClass]}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
