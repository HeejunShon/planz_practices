/** @jsx jsx */
import { useRef } from "react";
import { jsx, css } from "@emotion/core";
import { useSpring, useTrail, useChain, animated } from "react-spring";

const Chain = () => {
  /** 첫번째 화면 */

  // title useTrail
  const titles = ["URBAINA", "SANS FILTER"];
  const titleTrailRef = useRef();
  const titleTrail = useTrail(titles.length, {
    ref: titleTrailRef,
    config: { duration: 600 },
    transform: "translateY(0px)",
    opacity: 1,
    from: { transform: "translateY(-30px)", opacity: 0 },
  });

  // 화살표 useSpring
  const arrowSpring = useSpring({
    from: { bottom: "40px" },
    to: async (next) => {
      while (true) {
        await next({ bottom: "40px" });
        await next({ bottom: "60px" });
      }
    },
  });

  /** 두번째 화면 */

  const secondDivUpSpringRef = useRef();
  const secondDivUpSpring = useSpring({
    ref: secondDivUpSpringRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  // inner Div useSpring
  const innerSpringRef = useRef();
  const innerSpring = useSpring({
    ref: innerSpringRef,
    config: { duration: 1000 },
    from: { transform: "translateY(-80px)" },
    to: { transform: "translateY(0)" },
  });

  // 우하단 cocrner useSpring
  const cornerSpringRef = useRef();
  const cornerSpring = useSpring({
    ref: cornerSpringRef,
    config: { duration: 1500 },
    from: { padding: "0px", backgroundSize: "0px 0px" },
    to: { padding: "35px", backgroundSize: "70px 70px" },
  });

  // 내부 Title useTrail
  const innerTitles = ["Place aux", "idees"];
  const innerTitleTrailRef = useRef();
  const innerTitleTrail = useTrail(innerTitles.length, {
    ref: innerTitleTrailRef,
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
  });

  // = 동그라미 useSpring
  const equalSpringRef = useRef();
  const equalSpring = useSpring({
    ref: equalSpringRef,
    from: { scale: 0, opacity: 0 },
    to: { scale: 1, opacity: 1 },
  });

  // description useTrail
  const descriptions = [
    "Les retombees generees par les",
    "entreprises deconomie sociale profitent",
    "a toute la communaute, car elles sont",
    "reinvesties dans leur mission.",
  ];
  const descriptionTrailRef = useRef();
  const descriptionTrail = useTrail(descriptions.length, {
    ref: descriptionTrailRef,
    config: { duration: 400 },
    from: { transform: "translateY(20px)", opacity: 0 },
    to: { transform: "translateY(0px", opacity: 1 },
  });

  useChain(
    [
      titleTrailRef,
      secondDivUpSpringRef,
      innerSpringRef,
      cornerSpringRef,
      innerTitleTrailRef,
      equalSpringRef,
      descriptionTrailRef,
    ],
    [1, 4, 4, 4.1, 4.5, 5.2, 5.4]
  );

  return (
    <div css={chain}>
      {/* 첫번째 화면 */}
      <div css={card}>
        <video css={video} autoPlay loop muted>
          <source
            src="https://image.converse.co.kr/product/167853C_167853C_1.mp4"
            type="video/mp4"
          />
        </video>
        <div css={title}>
          {/* {titleTransitions.map(({ item, props }) => (
            <animated.p style={props}>{item}</animated.p>
          ))} */}

          {titleTrail.map((props, index) => (
            <animated.p style={props} key={index}>
              {titles[index]}
            </animated.p>
          ))}
        </div>
        <div css={foldedCorner}></div>
        <animated.div css={arrow} style={arrowSpring}>
          <i class="fas fa-arrow-up"></i>
        </animated.div>
      </div>
      {/* 두번째 화면 */}
      <animated.div style={secondDivUpSpring}>
        <div css={[card, two]}>
          {/* 내부 div */}
          <animated.div style={innerSpring}>
            <div css={inner}>
              <div css={innerTitle}>
                {/* 제목 */}
                {innerTitleTrail.map((props, index) => (
                  <animated.p style={props} key={index}>
                    {innerTitles[index]}
                  </animated.p>
                ))}
              </div>
              {/* = 동그라미 */}
              <animated.div
                style={{
                  transform: equalSpring.scale.interpolate(
                    (s) => `scale(${s})`
                  ),
                  width: "fit-content",
                }}
              >
                <div css={equal}>
                  <i class="fas fa-equals" />
                </div>
              </animated.div>
              <div css={description}>
                {descriptionTrail.map((props, index) => (
                  <animated.p style={props} key={index}>
                    {descriptions[index]}
                  </animated.p>
                ))}
              </div>
              <div css={tree}>
                <i class="fas fa-tree"></i>
              </div>
              <animated.div css={innerFoldedCorner} style={cornerSpring} />
            </div>
          </animated.div>
        </div>
      </animated.div>
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
  /* margin: 3em; */
  display: flex;
  position: absolute;
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
  /* z-index: 2; */
  position: absolute;
  top: 55px;
  color: #ed7bc3;
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
  right: -1px;
  margin-right: 29px;
  padding: 22px;
  background: linear-gradient(315deg, transparent 50%, #fe4046 51%),
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
  z-index: 5;
  position: relative;
  background-color: #f7dadf;
  overflow: hidden;
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
  left: 0;
  margin: 17px 0 10px;
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
  bottom: -1px;
  right: -1px;
  padding: 22px;
  background: linear-gradient(315deg, transparent 50%, #fe4046 51%),
    linear-gradient(45deg, transparent, transparent),
    linear-gradient(135deg, transparent, transparent),
    linear-gradient(225deg, #f7dadf 25px, #f7dadf 10px);
  background-size: 44px 44px, 100px 100px, 100px 100px, 100% 100%; /*앞 두 속성 = 크기 */
  background-position: 100% 0, 0 0, 100% 100%, 100% 0;
  background-repeat: no-repeat;
`;
