import React, { useState } from 'react'
import { Toggler, Wrapper } from '../styles/wrapper';
import { ToggleButtonView } from '../styles/button';

const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    const toggleSwitch = () => {
        setIsToggled((prevState) => !prevState);
    };

    return (
        <Wrapper>
            <ToggleButtonView
                isToggled={isToggled}
                onPress={toggleSwitch}
            >
                <Toggler isToggled={isToggled} />
            </ToggleButtonView>
        </Wrapper>
    );
};

export default ToggleButton