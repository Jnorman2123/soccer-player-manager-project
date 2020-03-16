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
        setTimeout(() => {
          const playerCosts = this.props.teams.teams.players.map(player => player.value)
          const totalPlayerCost = playerCosts.reduce((previousCost, currentCost, index) => previousCost + currentCost, 0)
          this.setState( () => ({
            name: this.props.teams.teams.name,
            formation: this.props.teams.teams.formation,
            salary_cap: this.props.teams.teams.salary_cap - totalPlayerCost
          }), () => {
            this.props.teams.teams = this.state
          })  
        }, 500)
      }

    componentDidMount() {
        const teamId = this.props.match.params.teamID
        this.props.fetchTeam(teamId)
        this.getTeamData()
    }

    renderPlayers = () => {
        const theTeam = this.props.teams.teams
        if (theTeam.players !== undefined && theTeam.players.length === 0 && this.state.name !== '') {
            return <div>
                <h4>This Team Currently Has No Players</h4>
                <Link to={{pathname: `/teams/${theTeam.id}/transfer`, team: theTeam }  }>
                    <button>Add Player to {theTeam.name}</button>
                </Link>
            </div>
            
        } else if (theTeam.players !== undefined && theTeam.players.length > 0) {
            return <div>
                <h3>Players</h3>
                {theTeam.players.map((player, i) => {
                        return <div key={i}>
                            <h3>{player.name}</h3>
                            <h4>{player.position}</h4>
                            {player.transfers.map((transfer, i) => {
                                if (transfer.team_id === theTeam.id) {
                                    return <button key={i}
                                    onClick={() => {
                                        this.props.deleteTransfer(transfer.id);
                                        this.props.history.push(`/teams/`);} }>
                                        Remove {player.name}
                                    </button>
                                } 
                            })}
                        </div>
                })}<br></br>
            <Link to={{pathname: `/teams/${theTeam.id}/transfer`, team: theTeam }  }>
                        <button>Add Player to {theTeam.name}</button>
            </Link>
            </div>
        }
    }

    renderTeam = () => {
        const theTeam = this.state
        if (theTeam.name !== '') {
            return <div>
                <h2>{theTeam.name}</h2>
                <h3>{theTeam.formation}</h3>
                <h4>{theTeam.name} has ${theTeam.salary_cap} remaining salary cap balance.</h4>
                <button onClick={() => {this.props.deleteTeam(theTeam.id); this.props.history.push('/teams')} }>Delete {theTeam.name}</button>
                <Link to={{pathname: `/teams/${theTeam.id}/edit`, team: theTeam }  }>
                        <button>Edit {theTeam.name}</button>
                </Link>
            </div>
        }      
    }

    render() {
        return (
            <div>
                <Team props={this.props} renderTeam={this.renderTeam} renderPlayers={this.renderPlayers} />
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.teams,
    }
}

export default connect(mapStateToProps, { fetchTeam, deleteTeam, deleteTransfer, editTeam })(TeamContainer)