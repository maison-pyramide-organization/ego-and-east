import loaderStyle from "./LoaderStyle.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import {
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";
import React from "react";

const LoaderComponent = ({ isLoading }: { isLoading: boolean }) => {
  const [hideWhole, setHideWhole] = React.useState(false);
  if (!isLoading) {
    setTimeout(() => {
      setHideWhole(true);
    }, 500);
  }

  return (
    <div>
      <TransitionGroup>
        {!hideWhole && (
          <CSSTransition key={2} timeout={500} classNames={"item"}>
            <div className={loaderStyle.main}>
              <h1 className={loaderStyle.h1}>
                {/* MAISON
                <br />
                PYRAMIDE */}
               <Logo className={loaderStyle.logo}/>
                {/* <Image src={logo} unoptimized={true} className={loaderStyle.logo} layout="responsive"></Image> */}
              </h1>
              <br />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default LoaderComponent;
