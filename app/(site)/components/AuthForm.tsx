'use client'

import { useState } from "react";

type Variant = 'LOGIN'| 'REGISTER';

const AuithForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    return(
        <div>Auth Form!</div>
    );
}

export default AuithForm;