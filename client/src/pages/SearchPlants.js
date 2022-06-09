import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_PLANT } from '../utils/mutations';
import Auth from '../utils/auth';
import { searchPlantDB } from '../utils/API';
import { savePlantIds, getSavedPlantIds } from '../utils/localStorage';

const SearchPlants = () => {
  const [searchedPlants, setSearchedPlants] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const [savedPlantIds, setSavedPlantIds] = useState(getSavedPlantIds());
  const [addPlant] = useMutation(ADD_PLANT);

  useEffect(() => {
    return () => savePlantIds(savedPlantIds);
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchPlantDB(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const plantData = items.map((plant) => ({
        plantId: plant.id,
        name: plant.name || ['No plant to display'],
        scientificName: plant.scientificName,
        category: plant.category,
        image: plant.imageLinks?.thumbnail || '',
      }));

      setSearchedPlants(plantData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSavePlant = async (plantId) => {
    const plantToSave = searchedPlants.find((plant) => plant.plantId === plantId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await addPlant({
        variables: { input: plantToSave },
      });

      setSavedPlantIds([...savedPlantIds, plantToSave.plantId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className='text-light text-center background'>
    <h1 className="textWhite">Find your Area</h1>
    <iframe scrolling="no" frameBorder="0" title="Hardiness Map" height="650px" width="1100px" data-src="https://usdaars.maps.arcgis.com/apps/webappviewer/index.html?id=00a463f18c254d39b5dd6274cc4f92f9" src="https://usdaars.maps.arcgis.com/apps/webappviewer/index.html?id=00a463f18c254d39b5dd6274cc4f92f9"></iframe>
        <Container>
          <h1>Search for Plants!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a plant'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedPlants.length
            ? `Viewing ${searchedPlants.length} results:`
            : 'Search for a plant to begin'}
        </h2>
        <CardColumns>
          {searchedPlants.map((plant) => {
            return (
              <Card key={plant.plantId} border='dark'>
                {plant.image ? (
                  <Card.Img src={plant.image} alt={`The cover for ${plant.name}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{plant.name}</Card.Title>
                  {/* <p className='small'>Authors: {plant.authors}</p> */}
                  <Card.Text>{plant.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedPlantIds?.some((savedPlantId) => savedPlantId === plant.plantId)}
                      className='btn-block btn-info'
                      onClick={() => handleSavePlant(plant.plantId)}>
                      {savedPlantIds?.some((savedPlantId) => savedPlantId === plant.plantId)
                        ? 'This plant has already been saved!'
                        : 'Save this Plant!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchPlants;
