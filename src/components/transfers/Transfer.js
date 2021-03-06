import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTransfer } from '../../actions/transfers/transferActions'
import { fetchTeam, editTeam } from '../../actions/teams/teamActions'
import { fetchPlayers } from '../../actions/players/playerActions'
import { Link } from 'react-router-dom'


class Transfer extends Component {
    state = {
        team: {
            name: '',
            formation: '',
            salary_cap: ''
        },
        transfer: {
            team_id: this.props.teamId,
            player_id: ''
        },
        player_value: ''
    }

    componentDidMount() {
        this.props.teams.teams = []
        this.props.fetchPlayers() 
        this.props.fetchTeam(this.props.teamId)
        this.getTeamData()
    }

    getTeamData = () => {
        this.setState({
            name: '',
            formation: '',
            salary_cap: ''
        })
        
        setTimeout(() => {
            const playerCosts = this.props.teams.teams.players.map(player => player.value)
            const totalPlayerCost = playerCosts.reduce((previousCost, currentCost, index) => previousCost + currentCost, 0)
            this.setState( () => ({
                name: this.props.teams.teams.name,
                formation: this.props.teams.teams.formation,
                salary_cap: this.props.teams.teams.salary_cap - totalPlayerCost
            }))  
        }, 100)
    }

    checkForPlayer = () => {
        if (this.props.teams.teams.players) {
            const playerNames = this.props.teams.teams.players.map(player => {
                return player.name
            })
            return playerNames
        }
    }

    checkFormation = (position) => {
        if (this.props.teams.teams.formation) {
            const playerPositions = this.props.teams.teams.players.map(player => {
                return player.position
            })
            const formation = this.props.teams.teams.formation.split("-")
            const goalKeeperCap = 1
            const defenderCap = formation[0]
            const midfielderCap = formation[1]
            const forwardCap = formation[2]
            if (position === 'Goalkeeper' && playerPositions.filter(name => name === position).length < goalKeeperCap) {
                 return 'true'
            } else if (position === 'Defender' && playerPositions.filter(name => name === position).length < defenderCap) {
                return 'true'
            } else if (position === 'Midfielder' && playerPositions.filter(name => name === position).length < midfielderCap) {
                return 'true'
            } else if (position === 'Forward' && playerPositions.filter(name => name === position).length < forwardCap) {
                return 'true'
            }
        }
    }

    createPlayers = (position) => {
        const playerNames = this.checkForPlayer()
        if (this.props.players.players.length > 0) {
            return this.props.players.players.map((player, i) => {
                if (playerNames !== undefined && this.state.salary_cap > 0) {
                    if (!playerNames.includes(player.name) && player.value < this.state.salary_cap && player.position === position) {
                        return <option key={i} value={player.id}>{player.name} Price: ${player.value} {player.position}</option>
                    }
                }
            })
        }
    }

    createAddForm = (position) => {
        if (this.checkFormation(position) === 'true') {
            return <div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label>
                        <select name='player_id'  value={this.state.transfer.player_id} onChange={this.handleChange}>
                            <option value='DEFAULT' >Add a {position}</option>
                            {this.createPlayers(position)}
                        </select><br></br>
                    </label>
                    <input type='submit'value="Add Player"></input>
                </form><br></br>
            </div>
        }
    }

    handleChange = (event) => {
        this.setState({
            transfer: {
                ...this.state.transfer, 
                player_id: event.target.value
            },
            player_value: event.target.player_price
        })
    }
s
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTransfer(this.state.transfer)
        this.props.teams.teams = []
        this.props.props.history.push(`/teams/${this.props.teamId}`)
    }

    render() {
        return (
            <div className='team'>
                <h1>{this.state.name}</h1>
                <h3>{this.state.formation}</h3>
                <h3>Remaining Salary Cap ${this.state.salary_cap}</h3><br></br>
                {this.createAddForm('Goalkeeper')}
                {this.createAddForm('Defender')}
                {this.createAddForm('Midfielder')}
                {this.createAddForm('Forward')}
                <Link to={{pathname: `/teams/${this.props.teamId}`}  }>
                    <button>Back to Team</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.teams,
        players: state.players
    }
}

export default connect(mapStateToProps, { addTransfer, fetchTeam, fetchPlayers, editTeam })(Transfer)
