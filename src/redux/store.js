import { configureStore } from '@reduxjs/toolkit'
import subscriptionListSlice  from './Reducers/SubscriptionList'

export const store = configureStore({
    reducer: {
        subscriptionList : subscriptionListSlice,
    }
})