import { useSelector } from "react-redux"
import { connect } from "react-redux"

const Notification = (props) => {

  const notification = useSelector(state => state.notification.message)

  const notisToShow = () => {
    return props.notis.message
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notisToShow()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notis: state.notification,
  }
}

const ConnectedNotis = connect(mapStateToProps)(Notification)

export default ConnectedNotis
