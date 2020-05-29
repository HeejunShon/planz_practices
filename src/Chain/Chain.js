/** @jsx jsx */
import { useState, useEffect, useRef, useCallback } from "react";
import { jsx, css } from "@emotion/core";
import { useSpring, useTransition, useChain, animated } from "react-spring";

const Chain = () => {
  const [titles, setTitles] = useState([]);
  const ref = useRef([]);

  // 제목 useTransition
  const titleTransitions = useTransition(titles, null, {
    from: { transform: "translateY(-20px)" },
    enter: { transform: "translateY(0px)" },
    leave: { transform: "translateY(0px)" },
  });

  // 제목 한줄씩 update
  const updateTitles = useCallback(() => {
    ref.current.map(() => {
      console.log("clearTimeout 실행");
      clearTimeout();
    });
    ref.current = [];
    setTitles([]);
    ref.current.push(setTimeout(() => setTitles(["URBAINA"]), 500));
    ref.current.push(
      setTimeout(() => setTitles(["URBAINA", "SANS FILTER"]), 800)
    );
  }, []);

  useEffect(() => {
    updateTitles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 화살표 useSpring
  const arrowSpring = useSpring({
    from: { bottom: "40px" },
    to: async (next) => {
      while (1) {
        await next({ bottom: "30px" });
        await next({ bottom: "40px" });
      }
    },
  });

  return (
    <div css={chain}>
      {/* 첫번째 화면 */}
      <div css={card}>
        {console.log("title", titleTransitions)}
        <div css={title}>
          {titleTransitions.map(({ item, props }) => (
            <animated.p style={props}>{item}</animated.p>
          ))}
        </div>
        <video css={video} autoPlay loop muted>
          <source
            src="https://image.converse.co.kr/product/167853C_167853C_1.mp4"
            type="video/mp4"
          />
        </video>
        <div css={foldedCorner}></div>
        {/* <span css={arrow}>
          <i class="fas fa-arrow-up"></i>
        </span> */}
        <animated.div css={arrow} style={arrowSpring}>
          <i class="fas fa-arrow-up"></i>
        </animated.div>
      </div>
      {/* 두번째 화면 */}
      <div css={[card, two]}>
        <div css={inner}>
          <div css={innerTitle}>
            <p>Place aux</p>
            <p>idees</p>
          </div>
          <div css={equal}>
            <i class="fas fa-equals"></i>
          </div>
          <div css={description}>
            <p>Les retombees generees par les</p>
            <p>entreprises deconomie sociale profitent</p>
            <p>a toute la communaute, car elles sont</p>
            <p>reinvesties dans leur mission.</p>
          </div>
          <div css={tree}>
            <i class="fas fa-tree"></i>
          </div>
          <div css={innerFoldedCorner}></div>
        </div>
      </div>
    </div>
  );
};

export default Chain;

const chain = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const card = css`
  margin: 3em;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 340px;
  height: 600px;
  /* 첫번째 화면 배경 */
  background-color: #90071b;
  /* 두번째 화면 배경 */
  /* background-color: #f7dadf; */
`;

const title = css`
  z-index: 10;
  position: absolute;
  top: 55px;
  color: #e1a0a0;
  font-weight: 900;
  line-height: 1;
  font-size: 39px;
  text-align: center;
`;

const video = css`
  position: relative;
  width: 280px;
  height: 370px;
  object-fit: cover;
  background-color: blue;
`;

const foldedCorner = css`
  position: absolute;
  align-self: flex-end;
  bottom: 113px;
  right: 0;
  margin-right: 29px;
  padding: 22px;
  background: linear-gradient(315deg, transparent 50%, #fe4046 50%),
    linear-gradient(45deg, transparent, transparent),
    linear-gradient(135deg, transparent, transparent),
    linear-gradient(225deg, #90071b 25px, #90071b 10px);
  background-size: 44px 44px, 100px 100px, 100px 100px, 100% 100%; /*앞 두 속성 = 크기 */
  background-position: 100% 0, 0 0, 100% 100%, 100% 0;
  background-repeat: no-repeat;
`;

const arrow = css`
  position: absolute;
  bottom: 45px;
  font-size: 27px;
  color: white;
`;

// 두번째

const two = css`
  background-color: #f7dadf;
`;

const inner = css`
  position: relative;
  top: -32px;
  width: 310px;
  height: 535px;
  padding: 50px 25px 0;
  background-color: #90071b;
`;

const innerTitle = css`
  /* position: relative; */
  color: #e3bebe;
  font-weight: 900;
  line-height: 1;
  font-size: 39px;
`;

const equal = css`
  position: relative;
  margin: 16px 0;
  background-color: orange;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 19px;
  color: white;
  padding-top: 9px;
  text-align: center;
`;

const description = css`
  font-size: 14px;
  color: #efefef;
`;

const tree = css`
  text-align: center;
  font-size: 150px;
  color: #5fb91c;
`;

const innerFoldedCorner = css`
  position: absolute;
  align-self: flex-end;
  bottom: 0;
  right: 0;
  padding: 22px;
  background: linear-gradient(315deg, transparent 50%, #fe4046 50%),
    linear-gradient(45deg, transparent, transparent),
    linear-gradient(135deg, transparent, transparent),
    linear-gradient(225deg, #f7dadf 25px, #f7dadf 10px);
  background-size: 44px 44px, 100px 100px, 100px 100px, 100% 100%; /*앞 두 속성 = 크기 */
  background-position: 100% 0, 0 0, 100% 100%, 100% 0;
  background-repeat: no-repeat;
`;
