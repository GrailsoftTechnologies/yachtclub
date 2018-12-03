import React from 'react';
import { Container, Col, Row } from 'reactstrap';

export default function Menu (props) {
  return(
    <Container className="Menu" id="DrinkSpecials">
      <Row>
        <Col xl="6">
          <h1>These Days</h1>
          <h3>Sunday</h3>
          <h4>$5 slushees all day</h4>
          <h3>Monday</h3>
          <h4>$5 margaritas</h4>
          <h3>Tuesday</h3>
          <h4>$5 tecate + tequila</h4>
        </Col>
        <Col xl="6">
          <h1>All Days</h1>
          <h3>Underberg - $2</h3>
          <h3>Glenfiddich Scotch & Soda - $7</h3>
          <h3>House Mojito - $7</h3>
          <h3>Slushy - $8</h3>
        </Col>
      </Row>
      <Row className="justify-content-center" id="Cocktails">
        <Col xl="12">
          <h1>Cocktails</h1>
        </Col>
        <Col xl="6">
          <h3>The Margarita - $7</h3>
          <p>lunazul blanco, lime, agave, orange liquor, salted rim</p>
        </Col>
        <Col xl="6">
          <h3>Beg Borrow and Steal - $9</h3>
          <p>tequila, mezcal, mint, lime, sugar, bitters - $9</p>
        </Col>
        <Col xl="6">
          <h3>The 6AM to Iceland - $7</h3>
          <p>reyka vodka, lime, orange bitters, cock n bull</p>
        </Col>
        <Col xl="6">
          <h3>Salem, OR - $9</h3>
          <p>whiskey, elderflower liquer, lemon, cucumber, sugar</p>
        </Col>
        <Col xl="6">
          <h3>Porch Swing - $9</h3>
          <p>gin, combier peche liquer, lemon, agave, large rock</p>
        </Col>
        <Col xl="6">
          <h3>Gorgeous George - $9</h3>
          <p>marionberry whiskey, lemon, peychaud's, angostura, float champagne</p>
        </Col>
        <Col xl="6">
          <h3>Impala - $8</h3>
          <p>lunazul blanco, motelobos mezcal, lime, orange bitters, agave, squirt, tajin salt rim</p>
        </Col>
        <Col xl="6">
          <h3>Old Highway 395 - $9</h3>
          <p>lunazul, mezcal, ancho reyes, agave, angostura, big rock</p>
        </Col>
        <Col xl="6">
          <h3>The Shipwreck - $7</h3>
          <p>Rum, lime, peach, peychaud's, agave</p>
        </Col>
      </Row>
      <Row className="justify-content-center" id="BoilerMakers">
        <Col xl="12">
          <h1>Boiler Makers</h1>
        </Col>
        <Col xl="6">
          <h3>#1 Tullamore Dew + Olympia - $6</h3>
        </Col>
        <Col xl="6">
          <h3>#2 Milagro Silver + Tecate - $7</h3>
        </Col>
        <Col xl="6">
          <h3>#3 Jack Daniels + Bud Bottle - $6</h3>
        </Col>
        <Col xl="6">
          <h3>#4 Monkey Shoulder + Cider Back - $7</h3>
        </Col>
        <Col xl="6">
          <h3>#5 Jameson + Mini High Life - $7</h3>
        </Col>
      </Row>
      <Row className="justify-content-center" id="NoProof">
        <Col xl="12">
          <h1>No Proof</h1>
        </Col>
        <Col xl="6">
          <h3>Cock N Bull - $2</h3>
        </Col>
        <Col xl="6">
          <h3>Squirt - $2</h3>
        </Col>
        <Col xl="6">
          <h3>Mojito - $4</h3>
          <p>fresh mint syrup, lime, agave, soda</p>
        </Col>
      </Row>
      <Row className="justify-content-center" id="BeerWine">
        <Col xl="12">
          <h1>Beer & Wine</h1>
        </Col>
        <Col xl="6">
          <h3>Cans</h3>
          <p>Tecate $3</p>
          <p>PBR $3</p>
          <p>Olympia $2</p>
          <p>Montucky $3</p>
          <p>Stiegl Raddler $5</p>
          <p>2 Towns Bright Cider $5</p>
        </Col>
        <Col xl="6">
          <h3>Bottles</h3>
          <p>Budweiser $3</p>
          <p>Dos XX $3</p>
          <p>Stella $5</p>
        </Col>
        <Col xl="6">
          <h3>Wine</h3>
          <p>Firesteed Pinot Noir - $7</p>
          <p>Cooper Hill Pinot Gris - $7</p>
          <p>Acrobat Rose $8</p>
        </Col>
      </Row>
      <Row id="Starters">
        <Col xl="12">
          <h1>Starters</h1>
        </Col>
        <Col xl="6">
          <h3>House Cut Fries (V)</h3>
          <p>Small - $3</p>
          <p>Large - $5.50</p>
        </Col>
        <Col xl="6">
          <h3>Onion Rings (V)</h3>
          <p>Small - $5</p>
          <p>Large - $7</p>
        </Col>
        <Col xl="6">
          <h3>Eat Your Greens (V) - $5</h3>
          <p>Baby greens, beets, cucumbers, croutons and other seasonal vegetables, vegan ranch</p>
        </Col>
        <Col xl="6">
          <h3>Poutine (V) or (VEG) - $7</h3>
          <p>House-cut fries with cheese, gravy and green onions</p>
        </Col>
        <Col xl="6">
          <h3>The Vegan Wedge - $7</h3>
          <p>iceberg with vegan ranch, cucumber, radishes, sun dried tomatoes, and croutons</p>
        </Col>
        <Col xl="6">
          <h3>Wedge Salad - $9</h3>
          <p>iceberg lettuce with green goddess, blue cheese, chopped hard egg, cucumber, radishes, pork belly, sun dried tomatoes, and croutons</p>
        </Col>
      </Row>
      <Row className="justify-content-center" id="Entrees">
        <Col xl="12">
          <h1 >Entrees</h1>
        </Col>
        <Col xl="6">
          <h3>Thunderburger (V) - $8</h3>
          <p>Vegan patty, lettuce, onion, house made pickles, thundersauce</p>
        </Col>
        <Col xl="6">
          <h3>Foster Burger - $7</h3>
          <p>Lettuce, onion, house made pickles and thundersauce</p>
        </Col>
        <Col xl="6">
          <h3>Smoke Stack - $11</h3>
          <p>Double foster with smoked cheddar cheese, house cured prok belly, onion ring, and chiptole bbq sauce</p>
        </Col>
        <Col xl="6">
          <h3>Old Reliable (V) -$11</h3>
          <p>Homegrown smoker seitan patty, chao cheese, giatn onion ring, chiptole bbq sauce, and a big side of pickled jalapenos</p>
        </Col>
        <Col xl="6">
          <h3>BBQ Bowl(V) (GF) - $9</h3>
          <p>Brown rice, homegrown smoker bbq tempeh ribs, tequila jalapeno slaw, avocado</p>
        </Col>
        <Col xl="6">
          <h3>FoPo Bowl(V) (GF) - $9</h3>
          <p>tofu, brown rice, broccoli, peanuts, shredded carrots, peanut sauce</p>
        </Col>
        <Col xl="6">
          <h3>Brussels Bowl(V) (GF) - $10</h3>
          <p>tofu, brussel sprouts, brown rice, kale, avocado, bbq sauce</p>
        </Col>
        <Col xl="6">
          <h3>Old Reliable(V) - $10</h3>
          <p>homegrown smoker seitan patty, chao cheese, onion ring, chipotle bbq sauce, and side pickled jalapenos</p>
        </Col>
        <Col xl="6">
          <h3>Willamette Valley Portobello Burger (V) - $10</h3>
          <p>Braised portobello mushroom, grilled squash, mama lil's peppers, beets, miso cheese spread</p>
        </Col>
        <Col xl="6">
          <h3>Add Ons</h3>
          <Container style={{paddingRight : '0px', paddingLeft : '0px'}}>
            <Row style={{marginRight : '0px', marginLeft : '0px'}}>
              <Col style={{paddingRight : '0px', paddingLeft : '0px'}}>
                <h4>$0.50</h4>
                <p>Ranch -V-</p>
                <p>BBQ -V-</p>
              </Col>
              <Col style={{paddingRight : '0px', paddingLeft : '0px'}}>
                <h4>$1</h4>
                <p>Chao, Beets, Onion Ring, Egg, American, Swiss, Cheddar, Pepperjack</p>
              </Col>
              <Col style={{paddingRight : '0px', paddingLeft : '0px'}}>
                <h4>$2</h4>
                <p>Avocado</p>
                <p>Bacon</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="justify-content-center" id="Impossible">
        <Col xl="12">
          <h1>Impossible Burger</h1>
          <h4>Sliders</h4>
          <p>(2 per order)</p>
        </Col>
        <Col xl="6">
          <h3>House - $7</h3>
          <p>lettuce, onion, house-made pickles, on Philippe's pub bun, sd thundersauce</p>
          <p>add chao $1</p>
        </Col>
        <Col xl="6">
          <h3>Garden Party - $8</h3>
          <p>lettuce, onion, house-made pickles,avocado, tomato</p>
          <p>add chao $1</p>
        </Col>
        <Col xl="6">
          <h3>Old Impossible - $8</h3>
          <p>chao cheese, onion ring, chiptole bbq sauce, and pickled jalapenos</p>
        </Col>
      </Row>
      <Row className="justify-content-center" id="LateNite">
        <Col xl="12">
          <h1>Late-Nite Menu</h1>
          <h4>9pm to close</h4>
        </Col>
        <Col xl="6">
          <h3>Hand-Cut Fries - $1</h3>
        </Col>
        <Col xl="6">
          <h3>Onion Rings (V) - $4</h3>
          <p>served with vegan ranch</p>
        </Col>
        <Col xl="6">
          <h3>Eat Your Greens (V) - $4</h3>
        </Col>
        <Col xl="6">
          <h3>Poutine (V) or (VEG) - $7</h3>
          <p>House-cut fries with cheese, gravy and green onions</p>
        </Col>
        <Col xl="6">
          <h3>BBQ Chik'n Sliders (V) - $8</h3>
          <p>fried chik'n patty, lettuce, pickles, chao, bbq sauce</p>
        </Col>
        <Col xl="6">
          <h3>FoPo Sliders (V) - $8</h3>
          <p>fried chik'n patty, slaw, jalapeno bbq sauce, vegan ranch</p>
        </Col>
        <Col xl="6">
          <h3>Grilled Cheese - $4</h3>
          <p>melted american on Philippe's pullman bread</p>
        </Col>
      </Row>
    </Container>
  );
};
