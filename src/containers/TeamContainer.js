import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeam, deleteTeam, editTeam } from '../actions/teams/teamActions'
import { deleteTransfer } from '../actions/transfers/transferActions'
import { Link } from 'react-router-dom'
import Team from '../components/teams/Team'

class TeamContainer extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            formation: '',
            salary_cap: ''
        }
    }
    

    getTeamData = () => {
        this.setState({
            name: '',
            formation: '',
            salary_cap: ''
        })
        
        setTimeout(() => {
            if (this.props.teams.teams.status !== 404) {
                const playerCosts = this.props.teams.teams.players.map(player => player.value)
                const totalPlayerCost = playerCosts.reduce((previousCost, currentCost, index) => previousCost + currentCost, 0)
                this.setState( () => ({
                    name: this.props.teams.teams.name,
                    formation: this.props.teams.teams.formation,
                    salary_cap: this.props.teams.teams.salary_cap - totalPlayerCost
                }))  
            }      
        }, 100)
      }

    componentDidMount() {
        const teamId = this.props.match.params.teamID
        this.props.fetchTeam(teamId)
        this.getTeamData()
    }

    renderNoPlayers = () => {
        const theTeam = this.state
        const teamId = this.props.match.params.teamID
        const players = this.props.teams.teams.players
        if (players !== undefined && players.length === 0 && this.state.name !== '') {
            return <div>
                <h4>This Team Currently Has No Players</h4>
                <Link to={{pathname: `/teams/${teamId}/transfer`, team: theTeam }  }>
                    <button>Add Player to {theTeam.name}</button>
                </Link>
            </div> 
        } else if (this.props.teams.teams.status === 404) {
            return <div>{this.props.teams.teams.exception}</div>
        }
    }

    renderPlayers = (props, position) => {
        const teamId = this.props.match.params.teamID
        const players = this.props.teams.teams.players
         if (players !== undefined && players.length > 0) {
            return <div className='table' name={position}>
                <h3>{position}s</h3> 
                <table className='w3-table-all w3-card-4'>
                    <tbody>{players.map((player, i) => {
                        if (player.position === position) {
                            return <tr key={i}>
                                <td>{player.name}</td>
                                <td>${player.value}</td>
                                {player.transfers.map((transfer, i) => {
                                    if (transfer.team_id.toString() === teamId) {
                                        return <td key={i}><button 
                                            onClick={() => {
                                                this.props.deleteTransfer(transfer.id);
                                                this.props.history.push(`/teams/`)} }>
                                            Remove {player.name}
                                        </button></td>
                                    }                                
                                })}
                            </tr>
                        }
                    })}</tbody>
                </table>
            </div>
        }
    }

    renderTeam = () => {
        const theTeam = this.state
        const teamId = this.props.match.params.teamID
        if (theTeam.name !== '' && this.props.teams.requesting === false) {
            return <div>
                <h2>{theTeam.name}</h2>
                <h3>{theTeam.formation}</h3>
                <h4>{theTeam.name} has ${theTeam.salary_cap} remaining salary cap balance.</h4>
                <button onClick={() => {this.props.deleteTeam(teamId); this.props.history.push('/teams')} }>Delete {theTeam.name}</button>
                <Link to={{pathname: `/teams/${teamId}/edit`, team: this.props.teams.teams }  }>
                        <button>Edit {theTeam.name}</button>
                </Link>
                <Link to={{pathname: `/teams/${teamId}/transfer`, team: theTeam }  }>
                    <button>Add Player to {theTeam.name}</button>
                </Link>
            </div>
        }   else if (this.props.teams.requesting === true) {
            return <h1>Loading...</h1>
        }     
    }

    render() {
        return (
            <div className='team'>
                <Team props={this.props} renderTeam={this.renderTeam} renderPlayers={this.renderPlayers} renderNoPlayers={this.renderNoPlayers} />
                
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.teams,
        requesting: state.requesting
    }
}

export default connect(mapStateToProps, { fetchTeam, deleteTeam, deleteTransfer, editTeam })(TeamContainer)
