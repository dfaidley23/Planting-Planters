import { useQuery, useMutation } from "@apollo/react-hooks";
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { REMOVE_PLANT } from "../utils/mutations";
import Auth from '../utils/auth';
import { removePlantId } from '../utils/localStorage';
import { GET_ME } from '../utils/queries';

const SavedPlants = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removePlant] = useMutation(REMOVE_PLANT);

  const userData = data?.me || [];

  // create function that accepts the bplantsook's mongo _id value as param and deletes the plant from the database
  const handleDeletePlant = async (plantId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removePlant({
        variables: { plantId },
      });

      removePlantId(plantId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved plants!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedPlants.length
            ? `Viewing ${userData.savedPlants.length} saved ${userData.savedPlants.length === 1 ? 'plant' : 'plants'}:`
            : 'You have no saved plants!'}
        </h2>
        <CardColumns>
          {userData.savedPlants.map((plant) => {
            return (
              <Card key={plant.plantId} border='dark'>
                {plant.image ? <Card.Img src={plant.image} alt={`The picture for ${plant.name}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{plant.name}</Card.Title>
                  {/* <p className='small'>Authors: {plant.authors}</p> */}
                  <Card.Text>{plant.scientificName}</Card.Text>
                  <Card.Text>{plant.category}</Card.Text>
                  <Card.Text>{plant.hardiness}</Card.Text>
                  <Card.Text>{plant.sun}</Card.Text>
                  <Card.Text>{plant.lifeSpan}</Card.Text>
                  <Card.Text>{plant.medianLifespan} weeks </Card.Text>
                  <Card.Text>{plant.firstHarvest} weeks after planting</Card.Text>
                  <Card.Text>{plant.lastHarvest} weeks after planting</Card.Text>
                  <Card.Text>{plant.height}</Card.Text>
                  <Card.Text>{plant.spread}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeletePlant(plant.plantId)}>
                    Delete this Plant!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedPlants;
