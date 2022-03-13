import styled from "styled-components";

export const CenterItem = styled.div``;

export const MultiItem = styled.div`
  color: #e67e22;
  opacity: 1;
  transform: scale(1.04);
`;

export const SlideContainer = styled.div`
  padding: 0 20px;

  /* width 옵션으로 전체 width 값을 지정할 수 있음 */
  /* width: 500px; */

  .center .slick-center ${MultiItem} {
    /* center 모드일때 center에게 강조할 경우 사용 */
    color: #e67e22;
    opacity: 1;
    transform: scale(1.06);
  }

  .center ${MultiItem} {
    /* center 모드일때 center 외 속성에게 사용 */
    opacity: 0.8;
    transition: all 300ms ease;
    transform: scale(0.99);
  }
`;

export const SlidePage = styled.div`
  text-align: center;

  background-color: skyblue;

  padding: ${(props) => props.padding};

  ${MultiItem} {
    /* center 옵션의 경우 MultiTem 속성을 추가로 사용해서 내부 옵션을 추가로 줘야함 */
    background: #00558b;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }
`;
