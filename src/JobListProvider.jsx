import React from 'react';
import JobList from './Components/JobList';
import { Provider } from 'react-redux'
import { store } from './redux/store';
export default function jobListProvider() {
        return(
            <Provider store={store}>
                <JobList />
            </Provider>
        );
}