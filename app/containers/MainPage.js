import React from "react";
import {Container, Content, Text, Header, Body, Title, Button} from 'native-base';

export default MainPage = () =>
    <Container>
        <Header><Body><Title>menago</Title></Body></Header>
        <Content>
            <Button>
                <Text>Welcome to Main page</Text>
            </Button>
        </Content>
    </Container>