import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type ThemeMode = 'light' | 'dark'

const getInitialTheme = (): ThemeMode => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') {
        return stored as ThemeMode
    }
    return 'dark'
}

const initialState: { mode: ThemeMode } = {
    mode: getInitialTheme(),
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
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
export const selectThemeMode = (state: { theme: { mode: ThemeMode } }) => state.theme.mode
export default themeSlice.reducer