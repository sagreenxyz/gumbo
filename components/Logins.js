import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function Logins({ loggedIn }) {
    return (
        <>
            {
                loggedIn ?
                    <>
                        < Menu >
                            <Menu.Item position='right'>
                                <Button>Sign Out</Button>
                            </Menu.Item>
                        </Menu >
                    </>
                    :
                    <Menu>
                        <Menu.Item position='right'>
                            <Button>Log-in</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button primary>Sign up</Button>
                        </Menu.Item>
                    </Menu>
            }
        </>
    )
}
