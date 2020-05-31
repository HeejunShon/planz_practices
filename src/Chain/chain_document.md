## Card Chaining

==> useSpring, useTrail, useTransition

==> 기술적 분석(interpolation), 구현 원리

### 0. 데이터 명세 [변수(states), props, components, useSpring]
- 불필요한 re-render 제거
- React 성능 최적화에 용이
- Title 컴포넌트 분리?
- setTimeout() 사용 시 clear()


### 1. Flow
- **첫 화면**
  - 상단 제목 내려오기,
    - useTransition() or useSpring()
  - 중간 동영상 자동재생, 반복
    - <video autoplay loop>
  - 동영상 오른쪽 모서리 접히기
    - CSS
  - 하단 화살표 위 아래 움직임
    - useTransition() or useSpring()

=> setTimeout() or async
=> setTimeout((), 3000) 후 두번째 화면 전환

- **두번째 화면**
  - 애니메이션 1
    - 내부 div 내려오기
      - useTransition()
    - 내부 div 오른쪽 모서리 접히기
      - CSS
  - 애니메이션 2
    - 제목 내려오기
      - useTransition()
    - = 아이콘 생기기
      - useTransition() (css rotation ?)
    - 본문 생기기
      - useTransition()

<br/>

=> 애니메이션 전환 useChain([..Ref, ..Ref])으로 묶기

