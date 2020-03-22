import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className='team'>
                <h1>Welcome!</h1>
                <h4>This app allows you to create a soccer team of your dreams.</h4>
                <h4>
                    Simply start buy creating a new team and then you can add players
                    from a list of already created players or create a new player.
                </h4>
                <h4>
                    Set a salary cap to your team and challenge yourself to make the  
                    best team possible while staying under budget.
                </h4>
                
            </div>
        )
    }
}

export default Home