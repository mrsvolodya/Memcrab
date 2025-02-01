import style from "./IconButton.module.scss";
type IconButtonProps = {
  onClick: () => void;
  icon: string;
  title?: string;
  className?: string;
};
export const IconButton = ({
  onClick,
  icon,
  title,
  className = "",
}: IconButtonProps) => {
  return (
    <button onClick={onClick} className={`${style.iconBtn} ${className}`}>
      <div className={style.iconBtn_container}>
        {title && <span className={style.iconBtn_title}>{title}</span>}
        <img src={icon} alt={title} />
      </div>
    </button>
  );
};
