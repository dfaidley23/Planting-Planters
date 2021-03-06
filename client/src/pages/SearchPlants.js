import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useLazyQuery, useMutation } from '@apollo/client';
import { ADD_PLANT } from '../utils/mutations';
import Auth from '../utils/auth';
import { savePlantIds, getSavedPlantIds } from '../utils/localStorage';
import { GET_PLANT } from '../utils/queries';

const SearchPlants = () => {
  const [searchedPlants, setSearchedPlants] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [getPlant, { loading, data }] = useLazyQuery(GET_PLANT);


  
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
      const response = await getPlant({ variables :{
        name: searchInput,
      }});

      const { plant } = await response.data;
      setSearchedPlants(plant);
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
        <h2 className="text-center textWhite">
          {searchedPlants.length
            ? `Viewing ${searchedPlants.length} results:`
            : ''}
        </h2>
        <CardColumns>
          {[searchedPlants].map(({plantId, name, category, hardiness, sun, lifeSpan, image, scientificName, medianLifespan, firstHarvest, lastHarvest, height, spread}) => {
            return (
              <Card key={plantId} border='dark'>
                {image ? (
                  <Card.Img src={image} alt={`The cover for ${name}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>Category: {category}</Card.Text>
                  <Card.Text>Hardiness: {hardiness}</Card.Text>
                  <Card.Text>Sun: {sun}</Card.Text>
                  <Card.Text>Lifespan: {lifeSpan}</Card.Text>
                  <Card.Text>Scientific Name: {scientificName}</Card.Text>
                  <Card.Text>Average lifespan {medianLifespan} weeks </Card.Text>
                  <Card.Text>First Harvest {firstHarvest} weeks after planting</Card.Text>
                  <Card.Text>Last Harvest {lastHarvest} weeks after planting</Card.Text>
                  <Card.Text>Height: {height}</Card.Text>
                  <Card.Text>Spread: {spread}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedPlantIds?.some((savedPlantId) => savedPlantId === plantId)}
                      className='btn-block btn-info'
                      onClick={() => handleSavePlant(plantId)}>
                      {savedPlantIds?.some((savedPlantId) => savedPlantId === plantId)
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
