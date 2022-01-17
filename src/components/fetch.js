import React from "react";
import { Container, Button } from "../components/styles/container.styled";
import { Image } from "../components/styles/image.styled";
import { Headline } from "../components/styles/headline.styled";
import { Data } from "../components/styles/data.styled";

const max = 19;
const randomNumber = Math.floor(Math.random() * max);

const maxSite = 41;
const randomNumberSite = Math.floor(Math.random() * maxSite);

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url =
      "https://rickandmortyapi.com/api/character/?page=" + randomNumberSite;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      person: data.results[randomNumber],
      loading: false,
    });

    var array = new Uint8Array(1);
    window.self.crypto.getRandomValues(array);

    console.log("The Number is");
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }

    //this.setState({ person: null, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.person) {
      return <div>didn't get a character</div>;
    }
    return (
      <Container>
        <Headline>Random Rick and Morty Character</Headline>
        <Button>Favorites</Button>
        <Data>Name: {this.state.person.name}</Data>
        <Data>ID: {this.state.person.id}</Data>
        <Data>Status: {this.state.person.status}</Data>
        <Data>Species: {this.state.person.species}</Data>
        <Data>Gender: {this.state.person.gender}</Data>
        <Data>Location: {this.state.person.location.name}</Data>
        <Image src={this.state.person.image} alt={this.state.person.name} />
        <Button onClick={() => window.location.reload()}>
          New random character
        </Button>
        <Button>Add to Favorites</Button>
      </Container>
    );
  }
}
