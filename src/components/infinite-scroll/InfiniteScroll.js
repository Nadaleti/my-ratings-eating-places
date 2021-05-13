import React, { useEffect, useRef } from "react";

import useOnScreen from "../../hooks/useOnScreen";

import "./InfiniteScroll.css";

const InfiniteScroll = (props) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible && props.hasMore) props.loadMore();
  }, [isVisible]);

  const loader = <div class="Loader_container">
    <div class="Loader_dot1"></div>
    <div class="Loader_dot2"></div>
    <div class="Loader_dot3"></div>
  </div>;

  const lastItem = <div key="lastItem" ref={ref} className="IS_lastItem">
    {props.hasMore ? loader : null}
  </div>

  return <>
    {props.children}
    {lastItem}
  </>;
}

export default InfiniteScroll;
