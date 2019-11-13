import * as React from 'react'

export function giveMeFive(): number {
    return 5
}

type Props = {
    buttonText: string
}

export default (props: Props) => (
    <button onClick={() => console.log(giveMeFive())}>{props.buttonText}!</button>
)
