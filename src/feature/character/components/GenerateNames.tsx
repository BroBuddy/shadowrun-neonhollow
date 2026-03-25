import { useState } from 'react'
import Headline from '@/components/Headline'
import Card from '@/components/Card'
import { generateMultipleNames, isValidTag } from '../services/NameService'

type Props = {
    tag: string
}

function GenerateNames({ tag }: Props) {
    const namesAmount = 5
    const [names, setNames] = useState<string[]>(() => 
        generateMultipleNames(tag, 5)
    )

    const handleGenerate = () => {
        setNames(generateMultipleNames(tag, namesAmount))
    }

    if (!tag || !isValidTag(tag)) {
        return (
            <>
                <Headline>Invalid Name</Headline>
                <Card>
                    <p>The tag you provided is invalid.</p>
                </Card>
            </>
        )
    }

    return (
        <>
            <button className='font-bold highlight' onClick={handleGenerate}>
                🎲 Generate names
            </button>

            {names.length > 0 && (
                <ol className='list-margin'>
                    {names.map((name: string, index: number) => (
                        <li key={index}>{name}</li>
                    ))}
                </ol>
            )}
        </>
    )
}

export default GenerateNames