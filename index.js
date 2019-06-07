import React from 'react';
import { Wrapper } from './styled.js';

const ImageCropper = () => {
    return (
        <Wrapper>
            <span draggable>
                This element is draggable
            </span>
        </Wrapper>
    )
}

export default ImageCropper;