import React, { Component } from "react";
import { Navbar, Button } from 'react-bootstrap';
import Jumbotron from "./components/Jumbotron";
import Input from "./components/Input";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
// import { Container, Row, Col } from "./components/Grid";

import { Menu } from 'semantic-ui-react'


class App extends Component {
  state = {
    activeItem: 'Home',
    recipes: [],
    recipeSearch: "",
  }

    goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>    
        <Menu inverted>
          <Menu.Item name='Home' active={this.activeItem === 'home'} onClick={this.handleItemClick} />
          {
               !isAuthenticated() && (
                  <Menu.Item name='Log In' active={this.activeItem === 'messages'} onClick={this.login.bind(this)} /> 
                ) 
             }
             {
               isAuthenticated() && (
                  <Menu.Item name='Log Out' active={this.activeItem === 'friends'} onClick={this.logout.bind(this)} />
               )
             }
        </Menu>
             
         {/* <Jumbotron /> */}
      {/* <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search for drink by type or what ingredients you have"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row> 
          <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              ) : (
                <RecipeList>
                  {this.state.recipes.map(recipe => {
                    return (
                      <RecipeListItem
                        key={recipe.title}
                        title={recipe.title}
                        href={recipe.href}
                        ingredients={recipe.ingredients}
                        thumbnail={recipe.thumbnail}
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
      </Container> */}
    </div>
   );
  }
}

export default App;
