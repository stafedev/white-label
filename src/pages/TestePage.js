import React from 'react';
import { useRecoilState } from 'recoil';

import { textState } from '../atoms'
import Filter from '../components/filter/Filter'

export default function TestePage () {

    const [text,setText] = useRecoilState(textState);
    const onChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <input type="text" value={text} onChange={onChange}/>
            <p>Texto: {text}</p>

            <Filter/>
        </div>
    )
}