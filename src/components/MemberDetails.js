import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

class MemberDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        }
    }
    render() {
        // console.log(this.props.details.activity_periods)
        if (!this.state.isClicked) {
            return (
                <div style={{
                    background: 'black',
                    color: 'white',
                    padding: '10px',
                    margin: '5px',
                    width: '50%',
                    cursor: 'pointer',
                    textAlign: 'center'
                }}
                    // onClick={() => this.props.history.push('/memberDetails')}
                    onClick={() => this.setState({ isClicked: true })}
                >
                    {this.props.details.real_name}
                </div>
            )
        }
        return (
            <Redirect to={{
                pathname: '/memberDetails',
                state: { activityPeriod: this.props.details.activity_periods }
            }}
            />
        )
    }
}

export default withRouter(MemberDetails)