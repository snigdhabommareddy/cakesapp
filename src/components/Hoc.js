import { Component } from "react"

function Hoc(Comp) {
    return class extends Component {
        render() {
            return (
                <div>
                    <Comp />
                </div>
            )
        }
    }
}
export default Hoc