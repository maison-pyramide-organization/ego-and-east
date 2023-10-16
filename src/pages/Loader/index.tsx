import loaderStyle from "./LoaderStyle.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const LoaderComponent = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div>
      {isLoading && (
        <div className={loaderStyle.main}>
          <Logo />
        </div>
      )}
    </div>
  );
};

export default LoaderComponent;
