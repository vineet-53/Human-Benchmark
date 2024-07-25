import Container from "../components/common/Container";
import CardsContainer from "../components/core/Dashboard/Cards/CardsContainer";
export default function Dashboard({ children }) {
  return (
    <>
      <div className="min-h-screen  grid grid-rows-7 grid-cols-1">
        <Container styles="bg-extreme-blue row-span-3">{children}</Container>
        <Container styles="bg-white row-span-4 py-20 flex justify-center items-center">
          <CardsContainer />
        </Container>
      </div>
    </>
  );
}
