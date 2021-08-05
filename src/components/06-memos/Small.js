import React, { memo } from 'react';

export const Small = memo(({ value }) => {
    console.log('Me volvi a llamar :')
    return (
        <small>
            { value }
        </small>
    )
});
//Solo se dispara si las properties cambian