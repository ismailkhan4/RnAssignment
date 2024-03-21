import React from 'react'
import { SearchBarView, SearchIconView } from '../styles/wrapper'
import { SearchImage } from '../styles/image'
import { SearchInput } from '../styles/input'

const SearchBar = () => {
    return (
        <SearchBarView>
            <SearchInput
                value='Search'
            />
            <SearchIconView>
                <SearchImage
                    source={require('../assets/images/search.png')}
                />
            </SearchIconView>
        </SearchBarView>
    )
}

export default SearchBar