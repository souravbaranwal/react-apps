import React, {Component} from 'react';

class LIFECYCLE extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: null,
            isLoading: true
         };
        console.log('in constructor');
    }

    componentDidMount = () => {
      fetch(`https://api.github.com/users/praveen-me`)
        .then(res => res.json())
        .then(user => {
            this.setState({
                isLoading: false,
                user
            })
        })
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('in component did update')
    // }

    // componentWillUpdate(prevProps, prevState) {
    //     console.log('in component will update')
    // }
    
    // componentWillMount() {
    //     console.log('in component will mount')
    // }

    render() {
        // console.log('in render')
        const { user, isLoading} = this.state
        
        return (
            <div>
                {
                    isLoading && !user ? <p>Loading...</p> : (
                        <>
                            <p>
                                {user.login}
                            </p>
                        </>
                    )
                }
            </div>
        );
    }
}

export default LIFECYCLE;