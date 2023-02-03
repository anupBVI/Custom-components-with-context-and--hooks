import classNames from "classnames";
import useNavigation from "../Hooks/useNavigation";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const handleClick = (e) => {
    if (e.ctrlKey == true) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {" "}
      {children}
    </a>
  );
};
export default Link;
