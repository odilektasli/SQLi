import React from 'react'

import { Spinner } from 'reactstrap'

class Loader extends React.Component {
    render() {
        return (
            <div className="w-100 h-100 d-flex align-items-center justify-content-center py-5">
                <Spinner />
            </div>
        )
    }
}

export default Loader