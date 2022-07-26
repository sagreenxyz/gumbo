import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { useState } from 'react'
import Logins from '../components/Logins'

export default function Home({ loggedIn = false }) {
    let [visibility, setVisibility] = useState(false)
    const handleToggle = () => {
        setVisibility(!visibility)
    }
    return (
        <>
            <Logins loggedIn={visibility} />
            <Button onClick={handleToggle}>Toggle Logged In/Out</Button>
        </>
    )
}