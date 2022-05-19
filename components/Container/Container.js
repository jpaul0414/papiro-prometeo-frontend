import { ContainerWrapper } from "./Container.elements";

const Container = ({ children, md, lg, xl }) => {
  return (
    <ContainerWrapper md={md} lg={lg} xl={xl}>
      {children}
    </ContainerWrapper>
  );
};

export default Container;
