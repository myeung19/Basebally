import React, { Component } from 'react';
import { Root } from "native-base";
import MainLayout from './src/container/Layout/MainLayout/MainLayout';

export default class App extends Component<Props> {
    render() {
        return (
            <Root>
                <MainLayout />
            </Root>
        );
    }
}