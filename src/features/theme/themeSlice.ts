import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { safeLocalStorage } from '../../shared/lib/localStorage'

type ThemeMode = 'light' | 'dark'

const initialState: { mode: ThemeMode } = {
    mode: (safeLocalStorage.getItem('theme') as ThemeMode) || 'light',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
            safeLocalStorage.setItem('theme', state.mode)
        },
        setTheme: (state, action: PayloadAction<ThemeMode>) => {
            state.mode = action.payload
            safeLocalStorage.setItem('theme', state.mode)
        },
    },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export const selectThemeMode = (state: { theme: { mode: ThemeMode } }) => state.theme.mode
export default themeSlice.reducer
