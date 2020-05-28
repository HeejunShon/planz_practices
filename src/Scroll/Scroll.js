/** @jsx jsx */
import { useState, useEffect } from "react";
import { jsx, css } from "@emotion/core";
import { useSpring, animated } from "react-spring";

const Scroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const handleScrollY = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  const HEIGHT = 1080;
  const START = 0.3;
  const END = 0.7;
  const duration = 800;

  // useSpring for time
  const { year, month, date } = useSpring({
    config: { duration },
    year:
      scrollY > HEIGHT * START
        ? scrollY > HEIGHT * END
          ? 0
          : new Date().getFullYear()
        : 0,
    month:
      scrollY > HEIGHT * START
        ? scrollY > HEIGHT * END
          ? 0
          : new Date().getMonth() + 1
        : 0,
    date:
      scrollY > HEIGHT * START
        ? scrollY > HEIGHT * END
          ? 0
          : new Date().getDate()
        : 0,
    from: { year: 0, month: 0, date: 0 },
  });

  // 숫자 width 길이만큼 반환 (앞 0)
  const numberPad = (n, width) => {
    n = n + "";

    //변수로 수정
    const zeroToNumFront =
      n.length >= width ? n : new Array(width - n.length + 1).join("0") + n;

    return zeroToNumFront;
  };

  return (
    <div css={scroll}>
      {console.log("scroll,,,", scrollY)}
      {console.log("Y...", month.value > 0 ? month.value : 0)}
      <div css={half}></div>
      <animated.span css={time}>
        {year.interpolate((year) => numberPad(Math.floor(year), 4))}
      </animated.span>
      <animated.span css={time}>
        {month.interpolate((month) => numberPad(Math.floor(month), 2))}
      </animated.span>
      <animated.span css={time}>
        {date.interpolate((date) => numberPad(Math.floor(date), 2))}
      </animated.span>
    </div>
  );
};

export default Scroll;

const scroll = css`
  display: block;
  text-align: center;
  margin: 0 auto;
  width: 1920px;
  height: 2160px;
  border: 1px solid blue;
`;

const half = css`
  width: 100%;
  height: 50%;
  border: 1px solid green;
`;

const time = css`
  position: relative;
  font-size: 6em;
  top: -0.6em;

  &:not(:last-child) {
    margin-right: 2em;
  }
`;
