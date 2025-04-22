import { configureStore } from '@reduxjs/toolkit'
import taskSlice from '../store/sliceStore'

const AppStore = configureStore({
    reducer: {
        todo : taskSlice
    }
})

export default AppStore;
