import React, { useState } from 'react';
import { SearchBarView, SearchIconView } from '../styles/wrapper';
import { SearchImage } from '../styles/image';
import { SearchInput } from '../styles/input';
import { TouchableOpacity } from 'react-native'; // Import TouchableOpacity

interface Props {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = () => {
        onSearch(searchQuery.trim()); // Pass the trimmed query to the parent component
    };

    const handleSearchIconClick = () => {
        handleSearch(); // Call handleSearch when search icon button is clicked
    };

    return (
        <SearchBarView>
            <SearchInput
                value={searchQuery}
                onChangeText={setSearchQuery} // Update searchQuery state on change
                placeholder='Search'
            />
            <SearchIconView>
                <TouchableOpacity onPress={handleSearchIconClick}>
                    <SearchImage
                        source={require('../assets/images/search.png')}
                    />
                </TouchableOpacity>
            </SearchIconView>
        </SearchBarView>
    );
};

export default SearchBar;
