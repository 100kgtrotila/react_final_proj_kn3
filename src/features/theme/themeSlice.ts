import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { safeLocalStorage } from '../../shared/lib/localStorage'

type ThemeMode = 'light' | 'dark'

const getInitialTheme = (): ThemeMode => {
    const stored = safeLocalStorage.getItem('theme')
    return (stored === 'light' || stored === 'dark') ? stored : 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: { mode: getInitialTheme() },
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        },
        setTheme: (state, action: PayloadAction<ThemeMode>) => {
            state.mode = action.payload
        },
    },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer